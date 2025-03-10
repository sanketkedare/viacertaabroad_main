import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import cookie from "cookie";
import redisClient from "@/config/redisConfig";  

connectToDb();

export async function POST(request) {
  try {
    const { name, email, mobile, address, role, password, myOtp } =
      await request.json();

    if (!name || !email || !mobile || !password || !myOtp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name, Email, Password, OTP, and Mobile are required.",
        }),
        { status: 400 }
      );
    }

    // Retrieve OTP from Redis
    const storedOtp = await redisClient.get(`otp:${email}`);

    if (!storedOtp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "OTP expired or invalid. Request a new one.",
        }),
        { status: 400 }
      );
    }

    if (myOtp !== storedOtp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Incorrect OTP. Try again.",
        }),
        { status: 400 }
      );
    }

    // Delete OTP from Redis after successful verification
    await redisClient.del(`otp:${email}`);

 
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
 
    const newUser = new User({
      name,
      email,
      mobile,
      address,
      role,
      password: hashedPassword,
      isVerified: true,
    });

    await newUser.save();

 
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      id: newUser._id,
      email: newUser.email,
      mobile: newUser.mobile,
      role: newUser.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")  
      .sign(secret);

 
    const headers = new Headers({
      "Set-Cookie": cookie.serialize("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      }),
      "Content-Type": "application/json",
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "User verified and created successfully.",
        user: newUser,
      }),
      { status: 201, headers: headers }
    );
  } catch (error) {
    console.error("Error verifying user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error.",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

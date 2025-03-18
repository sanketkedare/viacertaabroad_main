import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { sendSmsOtp } from "@/app/utils/sendOtp";
import { SignJWT } from "jose";
import { serialize } from "cookie";

connectToDb();

export async function POST(request) {
  try {
    const { email, mobile, password } = await request.json();

    if (!email && !mobile) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide an email or mobile number.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const isEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneNumber = mobile && /^\d{10}$/.test(mobile);

    if (!isEmail && !isPhoneNumber) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email or phone number format.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (isEmail) {
      if (!password) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Password is required for email login.",
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return new Response(
          JSON.stringify({ success: false, message: "Invalid credentials." }),
          { status: 401, headers: { "Content-Type": "application/json" } }
        );
      }
    } else if (isPhoneNumber) {
      const otp = crypto.randomInt(100000, 999999).toString(); // 6-digit OTP
      const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 min valid
      const hashedOtp = await bcrypt.hash(otp, 10);

      user.otp = hashedOtp;
      user.otpExpiry = otpExpiry;
      await user.save();

      await sendSmsOtp(mobile, otp);

      return new Response(
        JSON.stringify({
          success: true,
          message: "OTP sent to your mobile number.",
          userId: user._id,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      id: user._id,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(secret);

    const headers = new Headers({
<<<<<<< HEAD
      "Set-Cookie": serialize("auth_token", token, {
=======
      "Set-Cookie": cookie?.serialize("auth_token", token, {
>>>>>>> f83d191b82addc25c853aacfd0948f89c53fc8ab
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      }),
      "Content-Type": "application/json",
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Login successful.",
        userId: user._id,
<<<<<<< HEAD
        token,
=======
        token
>>>>>>> f83d191b82addc25c853aacfd0948f89c53fc8ab
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

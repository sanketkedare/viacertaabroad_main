import User from "@/models/users";
// import jwt from "jsonwebtoken";
import { SignJWT } from "jose";
import cookie from "cookie";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { userId, otp } = await request.json();
    // \----------------------------------
    // const { userId, otp,otpType } = await request.json();
    // in futur we will use this functio to validete otp example if use want to update profile or any change we can send otp and do conditioall use
    // if(otptype=="login"){...}/
    // if(otpType=="updateprofile"){...} // remove header and token generate again
    // ------------------------------------------
    if (!userId || !otp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User ID and OTP are required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.findById(userId);

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!user.otp || !user.otpExpiry || user.otpExpiry < Date.now()) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "OTP has expired. Request a new one.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const isMatch = await bcrypt.compare(otp, user.otp); //when using encrytpiton
    if (!isMatch) {
      // if (user.otp !== otp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid OTP. Please try again.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    user.otp = null;
    user.otpExpiry = null;

    // const token = jwt.sign(
    //   { id: user._id, email: user.email, mobile: user.mobile, role: user.role },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "7d" }
    // );

    // Generate JWT token using jose
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
      "Set-Cookie": cookie.serialize("auth_token", token, {
        httpOnly: true,
        secure: false, // make sure to enable in live
        // sameSite: "strict",
        sameSite: "lax", // Fix for cross-origin issues
        path: "/",
      }),
      "Content-Type": "application/json",
    });

    await user.save();

    return new Response(
      JSON.stringify({ success: true, message: "OTP Verified, logged in" }),
      { status: 200, headers: headers }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error.",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

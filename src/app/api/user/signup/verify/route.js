import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import { SignJWT } from "jose";
import cookie from "cookie";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/app/utils/sendEmail";

connectToDb();

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return Response.json(
        { success: false, message: "Email and OTP are required." },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        { success: false, message: "User not found." },
        { status: 404 }
      );
    }

    if (user.isVerified) {
      return Response.json(
        { success: false, message: "User is already verified. Please log in." },
        { status: 400 }
      );
    }

    if (Date.now() > user.otpExpiry) {
      user.otp = undefined;
      user.otpExpiry = undefined;
      await user.save();

      return Response.json(
        { success: false, message: "OTP expired. Request a new one." },
        { status: 401 }
      );
    }

    const isOtpValid = await bcrypt.compare(otp, user.otp);
    if (!isOtpValid) {
      return Response.json(
        { success: false, message: "Invalid OTP." },
        { status: 401 }
      );
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
    
    // const data = { email, userName: user.name };

    // sendEmail(user.email, data, "signUpSuccess");

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
        // secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: "lax",
        path: "/",
      }),
      "Content-Type": "application/json",
    });

    return Response.json(
      {
        success: true,
        message: "OTP verified successfully. User signed up.",
        user: {
          id: user._id,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
          isVerified: user.isVerified,
        },
      },
      { status: 200, headers: headers }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return Response.json(
      {
        success: false,
        message: "Internal Server Error.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

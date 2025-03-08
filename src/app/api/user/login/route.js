import { sendEmailOtp, sendSmsOtp } from "@/app/utils/sendOtp";
import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import crypto from "crypto";
import bcrypt from "bcryptjs";

connectToDb();

export async function POST(request) {
  try {
    const { email, mobile } = await request.json();

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

    const otp = crypto.randomInt(1000, 9999).toString();
    const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes expiry

    const saltRounds = 10;
    const hashedOtp = await bcrypt.hash(otp, saltRounds);
    user.otp = hashedOtp;
    // user.otp = otp;

    user.otpExpiry = otpExpiry;

    await user.save();

    if (isEmail) {
      await sendEmailOtp(email, otp); //otp withour encrypt
    } else {
      await sendSmsOtp(mobile, otp);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `OTP sent to your ${isEmail ? "email" : "mobile number"}.`,
        userId: user._id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

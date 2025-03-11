import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/app/utils/sendEmail";

connectToDb();

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide an email  .",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);
    user.otp = hashedOtp;
    user.otpExpiry = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes
    await user.save();
    const data = { email, otp, name: user.name };

    sendEmail(email, data, "password_Reset_Otp");

    return new Response(
      JSON.stringify({
        success: true,
        message: "OTP sent to your registered email.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
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

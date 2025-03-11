import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import bcrypt from "bcryptjs";

connectToDb();

export async function POST(request) {
  try {
    const { email, otp, newPassword } = await request.json();

    if (!email || !otp || !newPassword) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email, OTP, and new password are required.",
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
    if (!user.otp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "otp not found generate new one.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    const isOtpValid = await bcrypt.compare(otp, user.otp);

    if (!isOtpValid || Date.now() > user.otpExpiry) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid or expired OTP." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    return new Response(
      JSON.stringify({ success: true, message: "Password reset successful." }),
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

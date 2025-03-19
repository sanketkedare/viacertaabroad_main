import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/app/utils/sendEmail";

connectToDb();

export async function POST(request) {
  try {
    const { name, email, mobile, address, role, password } =
      await request.json();

    if (!name || !email || !mobile || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name, Email, and Mobile are required.",
          headers: { "Content-Type": "application/json" },
        }),
        { status: 400 }
      );
    }

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.isVerified) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "User already exists.",
          }),
          { status: 409, headers: { "Content-Type": "application/json" } }
        );
      }

      // User exists but is not verified, update details
      existingUser.name = name;
      existingUser.mobile = mobile;
      existingUser.address = address;
      existingUser.role = role;
      existingUser.password = await bcrypt.hash(password, 10);
    } else {
      existingUser = new User({
        name,
        email,
        mobile,
        password: await bcrypt.hash(password, 10),
        address,
        role,
        isVerified: false,
      });
    }

    const otp = crypto.randomInt(1000, 9999).toString();
    console.log(otp)
    const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes expiry
    existingUser.otp = await bcrypt.hash(otp, 10);
    existingUser.otpExpiry = otpExpiry;

    await existingUser.save(); // Save the new or updated user
    const data = { existingUser, otp };
    await sendEmail(existingUser.email, data, "verifyOtp");

    return new Response(
      JSON.stringify({
        success: true,
        message: "OTP sent to your email. Please verify to complete sign-up.",
        user: existingUser,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating/updating user:", error);
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
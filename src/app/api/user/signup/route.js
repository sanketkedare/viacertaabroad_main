import { connectToDb } from "@/config/dbConfig";
import { sendEmail } from "@/app/utils/sendEmail";
import crypto from "crypto";
import redisClient from "@/config/redisConfig";  

connectToDb();

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is required." }),
        { status: 400 }
      );
    }

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User already exists." }),
        { status: 409 }
      );
    }

 
    const otp = crypto.randomInt(1000, 9999).toString();

    // Store OTP in Redis (valid for 5 minutes)
    await redisClient.set(`otp:${email}`, otp, { EX: 300 }); // EX: expiry time in seconds

    // Send OTP via email
    
    // await sendEmail(email, otp, "verifyUser");   //unccomment after push code

    return new Response(
      JSON.stringify({
        success: true,
        message: "OTP sent. Please verify to complete signup.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500 }
    );
  }
}

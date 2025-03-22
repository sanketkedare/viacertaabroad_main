import { sendEmail } from "@/app/utils/sendEmail";
import { connectToDb } from "@/config/dbConfig";
import { addToSheet } from "@/config/sheetConfig";

import Enquiry_User from "@/models/counselingForm";

connectToDb();
export async function POST(request) {
  try {
    const { name, email, mobile } = await request.json();

    if (!name || !email || !mobile) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields (name, email, mobile) are required.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if the user already exists
    const existingUser = await Enquiry_User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "You have already booked a counseling session.",
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a new user entry
    const user = new Enquiry_User({ name, email, mobile });
    await user.save();
    await sendEmail(process.env.EMAIL_SEND_TO, user, "counselingForm");
    // Get current timestamp in Indian time
    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });



    // Optional: Add to Google Sheet (Uncomment when implemented)
    await addToSheet(
      "enquiry",
      [name, email, mobile, currentDate],
      ["Name", "Email", "Mobile", "Timestamp"]
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Counseling session booked successfully.",
        user,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
        error: error.message, // For debugging (remove in production)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  try {
    const user = await Enquiry_User.find();
    console.log(user);

    return new Response(
      JSON.stringify({
        success: true,
        totalUsers: user.length,
        user,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
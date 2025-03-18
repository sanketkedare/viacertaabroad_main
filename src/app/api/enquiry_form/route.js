import { sendEmail } from "@/app/utils/sendEmail";
import { connectToDb } from "@/config/dbConfig";
import Enquiry_User from "@/models/counselingForm";

connectToDb();

export async function POST(request) {
  try {
    const { name, email, mobile } = await request.json();
    const existingUser = await Enquiry_User.findOne({ email: email });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User has already booked counseling.",
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!name || !email || !mobile) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const user = new Enquiry_User({ name, email, mobile });
    // console.log(user);
    await user.save();
    await sendEmail(process.env.EMAIL_SEND_TO, user, "counselingForm");
    return new Response(
      JSON.stringify({
        success: true,
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

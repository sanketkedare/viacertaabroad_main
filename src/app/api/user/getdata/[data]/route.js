import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

connectToDb();

export async function GET(request) {
  try {
    // Extract and decode email or mobile from URL
    const data = decodeURIComponent(new URL(request.nextUrl).pathname.split("/").pop());

    // Validate data format
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
    const isPhoneNumber = /^\d+$/.test(data);

    if (!isEmail && !isPhoneNumber) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email or mobile format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Search user by email or mobile
    const user = await User.findOne(isEmail ? { email: data } : { mobile: data });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return user data (excluding sensitive fields)
    return new Response(
      JSON.stringify({ success: true, user }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

connectToDb();

export async function GET(request) {
  try {
    // Extract and decode email or mobile from URL
    const data = decodeURIComponent(new URL(request.nextUrl).pathname.split("/").pop());

    // Validate data (must be email or numeric mobile number)
    if (!data || (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data) && !/^\d+$/.test(data))) {
      return Response.json({ success: false, message: "Invalid email or mobile format." }, { status: 400 });
    }

    // Search user by email or mobile
    const user = await User.findOne(data.includes("@") ? { email: data } : { mobile: data });

    // Handle user not found
    if (!user) {
      return Response.json({ success: false, message: "User not found." }, { status: 404 });
    }

    // Return user data (excluding sensitive info)
    return Response.json({ success: true, user }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json({ success: false, message: "Internal Server Error." }, { status: 500 });
  }
}

import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

connectToDb();

export async function PUT(request) {
  try {
    const url = new URL(request.nextUrl);
    const data = decodeURIComponent(url.pathname.split("/").pop());

    console.log("data from url:", data);

    if (!data) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Data parameter is required.",
        }),
        { status: 400 }
      );
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
    const isPhoneNumber = /^\d+$/.test(data);

    const searchQuery = isEmail
      ? { email: data }
      : isPhoneNumber
      ? { mobile: data }
      : null;

    if (!searchQuery) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email or mobile format.",
        }),
        { status: 400 }
      );
    }

    const user = await User.findOne(searchQuery);

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404 }
      );
    }

    const { name, email, mobile } = await request.json();

    if (name) user.name = name;
    if (email) user.email = email;
    if (mobile) user.mobile = mobile;

    await user.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "User updated successfully.",
        user,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500 }
    );
  }
}

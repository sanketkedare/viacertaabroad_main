import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

export async function PUT(request) {
  try {
    connectToDb();
    const { userId, role } = await request.json();

    if (!userId || !role) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User ID and role are required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { role: role },
      { new: true }
    );

    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User not found.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `User role updated to ${role}.`,
        user: user,
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

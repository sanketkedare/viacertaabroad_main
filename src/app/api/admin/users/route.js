import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

connectToDb();

export async function GET() {
  try {
    const users = await User.find();
    const verifiedUsers = users.filter((user) => user.isVerified);
    const unverifiedUsers = users.filter((user) => !user.isVerified);

    return new Response(
      JSON.stringify({
        success: true,
        totalUsers: users.length,
        totalVerifiedUsers: verifiedUsers.length,
        totalUnverifiedUsers: unverifiedUsers.length,
        verifiedUsers,
        unverifiedUsers,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function PUT(request) {
  try {
    const { id, name, email, mobile, address, role } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "userId  is required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, mobile, address, role },
      { new: true }
    );

    if (!updatedUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "User updated successfully.",
        user: updatedUser,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating user:", error);
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

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User ID is required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "User deleted successfully.",
        user: deletedUser,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
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

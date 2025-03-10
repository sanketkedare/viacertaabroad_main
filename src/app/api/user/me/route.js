import { authenticate } from "@/app/utils/isAuthenticate";
import User from "@/models/users";

export async function GET(request) {
  const auth = await authenticate(request);

  if (!auth.success) {
    return new Response(
      JSON.stringify({ success: false, message: auth.message }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const myDetails = await User.findOne({ _id: auth.user.id });
    if (!myDetails) {
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
        message: "Protected route accessed",
        fromToken: auth.user,
        user: myDetails,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "error, no-token",
        error: error.message,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
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

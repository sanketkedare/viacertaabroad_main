import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

export async function DELETE() {
  await connectToDb();
  try {
    const deleteResult = await User.deleteMany({ isVerified: false });

    if (deleteResult.deletedCount === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "No unverified users found to delete.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    } 

    return new Response(
      JSON.stringify({
        success: true,
        message: `Successfully deleted ${deleteResult.deletedCount} unverified users.`,
        deleteResult,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting unverified users:", error);
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

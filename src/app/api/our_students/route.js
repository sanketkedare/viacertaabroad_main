import { connectToDb } from "@/config/dbConfig";
import OurStudents from "@/models/ourStudents";

export async function GET() {
  try {
    await connectToDb();
    const ourStudent = await OurStudents.find();

    return new Response(
      JSON.stringify({
        success: true,
        totalStudents: ourStudent.length,
        ourStudent: ourStudent,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "An error occurred",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

import { connectToDb } from "@/config/dbConfig";
import Course from "@/models/courses";

connectToDb();

 

export async function GET() {
  try {
    const courses = await Course.find();

    return new Response(
      JSON.stringify({ success: true, totalCourses: courses.length, courses }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
 
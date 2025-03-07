import { connectToDb } from "@/config/dbConfig";
import OurStudents from "@/models/ourStudents";

export async function POST(request) {
  await connectToDb();

  try {
    const {
      name,
      university,
      country,
      scholarshipType,
      scholarshipAmount,
      course,
      message,
    } = await request.json();

    const ourStudent = new OurStudents({
      name,
      university,
      country,
      scholarshipType,
      scholarshipAmount,
      course,
      message,
    });

    await ourStudent.save();

    return new Response(JSON.stringify({ success: true, data: ourStudent }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
export async function GET() {
  try {
    await connectToDb();
    const ourStudent = await OurStudents.find();

    return new Response(
      JSON.stringify({
        success: true,
        totalStudents: ourStudent.length, //
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

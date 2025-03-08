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

    // if (!name || !university || !country || !scholarshipType || !course) {
    //   return new Response(
    //     JSON.stringify({
    //       success: false,
    //       message:
    //         "Name, university, country, scholarship type, and course are required.",
    //     }),
    //     { status: 400, headers: { "Content-Type": "application/json" } }
    //   );
    // }

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

export async function PUT(request) {
  await connectToDb();

  try {
    const {
      studentIdToUpdate,
      name,
      university,
      country,
      scholarshipType,
      scholarshipAmount,
      course,
      message,
    } = await request.json();

    if (!studentIdToUpdate) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Student ID is required to update.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const updatedStudent = await OurStudents.findByIdAndUpdate(
      studentIdToUpdate,
      {
        name,
        university,
        country,
        scholarshipType,
        scholarshipAmount,
        course,
        message,
      },
      { new: true }
    );

    if (!updatedStudent) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Student not found.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Student updated successfully",
        data: updatedStudent,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
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

export async function DELETE(request) {
  try {
    await connectToDb();

    const { studentId } = await request.json();

    if (!studentId) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Student ID is required to delete.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const deletedStudent = await OurStudents.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Student not found.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Student deleted successfully",
        data: deletedStudent,
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

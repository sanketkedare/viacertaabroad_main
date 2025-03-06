import { connectToDb } from "@/config/dbConfig";
import Course from "@/models/courses";

connectToDb();

export async function POST(request) {
  try {
    const {
      name,
      admissionClosingDate,
      universityName,
      destinationCountry,
      postStudyWorkVisaEligibility,
      tuitionFeesOnCampus,
      durationOnCampus,
      imageUrl,
    } = await request.json();

    if (
      !name ||
      !admissionClosingDate ||
      !universityName ||
      !destinationCountry ||
      !postStudyWorkVisaEligibility ||
      !tuitionFeesOnCampus ||
      !durationOnCampus
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required except imageUrl.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const existingCourse = await Course.findOne({ name, universityName });

    if (existingCourse) {
      return new Response(
        JSON.stringify({ success: false, message: "Course already exists." }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    const newCourse = new Course({
      name,
      admissionClosingDate,
      universityName,
      destinationCountry,
      postStudyWorkVisaEligibility,
      tuitionFeesOnCampus,
      durationOnCampus,
      imageUrl,
    });

    await newCourse.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Course created successfully.",
        course: newCourse,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating course:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error.",
        error,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

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

export async function PUT(request) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "Course ID is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const updatedCourse = await Course.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedCourse) {
      return new Response(
        JSON.stringify({ success: false, message: "Course not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Course updated successfully.",
        course: updatedCourse,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating course:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "Course ID is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return new Response(
        JSON.stringify({ success: false, message: "Course not found." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Course deleted successfully.",
        course: deletedCourse,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting course:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
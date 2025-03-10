import { connectToDb } from "@/config/dbConfig";
import Blog from "@/models/blog";

export async function GET() {
  try {
    await connectToDb();

    const allBlogs = await Blog.find();

    if (allBlogs.length === 0) {
      return Response.json(
        {
          success: true,
          message: "No blogs found.",
          totalBlogs: 0,
          blogs: [],
        },
        { status: 200 }
      );
    }

    return Response.json(
      {
        success: true,
        totalBlogs: allBlogs.length,
        blogs: allBlogs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    return Response.json(
      {
        success: false,
        message: "An error occurred.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

import { connectToDb } from "@/config/dbConfig";
import Blog from "@/models/blog";

 

export async function POST(request) {
  try {
    await connectToDb();

    const { title, author, imageUrl, intro, description } =
      await request.json();

    if (!title || !author || !imageUrl || !intro || !description) {
      return Response.json(
        {
          success: false,
          message:
            "All fields (title, author, imageUrl, intro, description) are required.",
        },
        { status: 400 }
      );
    }

    const blog = new Blog({
      title,
      author,
      imageUrl,
      intro,
      description,
    });

    await blog.save();

    return Response.json(
      {
        success: true,
        message: "Blog created successfully.",
        blog,
      },
      { status: 201 }
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

export async function PUT(request) {
  try {
    await connectToDb();

    const { blogIdtoUpdate, title, author, imageUrl, intro, description } =
      await request.json();

    if (!blogIdtoUpdate) {
      return Response.json(
        {
          success: false,
          message: "Blog ID is required to update.",
        },
        { status: 400 }
      );
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogIdtoUpdate,
      { title, author, imageUrl, intro, description },
      { new: true }
    );

    if (!updatedBlog) {
      return Response.json(
        {
          success: false,
          message: "Blog not found.",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Blog updated successfully.",
        updatedBlog,
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



export async function DELETE(request) {
  try {
    await connectToDb();

    const { blogIdtoDelete } = await request.json();

    if (!blogIdtoDelete) {
      return Response.json(
        {
          success: false,
          message: "Blog ID is required to update.",
        },
        { status: 400 }
      );
    }

    const blog = await Blog.findByIdAndDelete(blogIdtoDelete);

    if (!blog) {
      return Response.json(
        {
          success: false,
          message: "Blog not found.",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Blog deleted successfully.",
        blog,
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
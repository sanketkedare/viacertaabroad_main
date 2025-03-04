import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

connectToDb();

export async function POST(request) {
  try {
    const { name, email, mobile } = await request.json();

    if (!name || !email || !mobile) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name, Email, and Mobile are required.",
        }),
        { status: 400 }
      );
    }

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User already exists." }),
        { status: 409, headers: { "Content-Type": "application/json" }, }
      );
    }

    const newUser = new User({ name, email, mobile });
    await newUser.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "User created successfully.",
        user: newUser,
      }),
      { status: 201, headers: { "Content-Type": "application/json" }, }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500 , headers: { "Content-Type": "application/json" },}
    );
  }
}

export async function GET() {
  try {
    const users = await User.find();

    return new Response(
      JSON.stringify({ success: true, totalUsers: users.length, users }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500 , headers: { "Content-Type": "application/json" },}
    );
  }
}

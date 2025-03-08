import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";
// import jwt from "jsonwebtoken";
import { SignJWT } from "jose";
import cookie from "cookie";

connectToDb();

export async function POST(request) {
  try {
    const { name, email, mobile, address, role } = await request.json();

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
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    const newUser = new User({ name, email, mobile, address, role });
    // ------------------
    //
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    // const token = jwt.sign(
    const token = await new SignJWT({
      id: newUser._id,
      email: newUser.email,
      mobile: newUser.mobile,
      role: newUser.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d") // Expiration time
      .sign(secret); // Sign the token

    const headers = new Headers({
      "Set-Cookie": cookie.serialize("auth_token", token, {
        httpOnly: true,
        secure: false, // make sure to enable in live
        // sameSite: "strict",
        sameSite: "lax", // Fix for cross-origin issues
        path: "/",
      }),
      "Content-Type": "application/json",
    });

    // -----------------
    await newUser.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "User created successfully.",
        user: newUser,
      }),
      { status: 201, headers: headers }
    );
  } catch (error) {
    console.error("Error creating user:", error);
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

// export async function GET() {
//   try {
//     const users = await User.find();

//     return new Response(
//       JSON.stringify({ success: true, totalUsers: users.length, users }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return new Response(
//       JSON.stringify({ success: false, message: "Internal Server Error." }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }

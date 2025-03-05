import { connectToDb } from "@/config/dbConfig";
import User from "@/models/users";

connectToDb();

export async function GET(request) {
  try {
    // Extract and decode email or mobile from URL
    const data = decodeURIComponent(new URL(request.nextUrl).pathname.split("/").pop());

    // Validate data (must be email or numeric mobile number)
    if (!data || (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data) && !/^\d+$/.test(data))) {
      return Response.json({ success: false, message: "Invalid email or mobile format." }, { status: 400 });
    }

<<<<<<< HEAD
    // Search user by email or mobile
    const user = await User.findOne(data.includes("@") ? { email: data } : { mobile: data });
=======
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
    const isPhoneNumber = /^\d+$/.test(data);

    const searchQuery = isEmail
      ? { email: data }
      : isPhoneNumber
      ? { mobile: data }
      : null;

    if (!searchQuery) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email or mobile format.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" }, }
      );
    }

    const user = await User.findOne(searchQuery);
>>>>>>> origin/ashvary

    // Handle user not found
    if (!user) {
<<<<<<< HEAD
      return Response.json({ success: false, message: "User not found." }, { status: 404 });
=======
      return new Response(
        JSON.stringify({ success: false, message: "User not found." }),
        { status: 404 , headers: { "Content-Type": "application/json" },}
      );
>>>>>>> origin/ashvary
    }

    // Return user data (excluding sensitive info)
    return Response.json({ success: true, user }, { status: 200 });

<<<<<<< HEAD
  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json({ success: false, message: "Internal Server Error." }, { status: 500 });
=======
    if (name) user.name = name;
    if (email) user.email = email;
    if (mobile) user.mobile = mobile;

    await user.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "User updated successfully.",
        user,
      }),
      { status: 200, headers: { "Content-Type": "application/json" }, }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error." }),
      { status: 500, headers: { "Content-Type": "application/json" }, }
    );
>>>>>>> origin/ashvary
  }
}

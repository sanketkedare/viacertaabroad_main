// import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
import cookie from "cookie";

export async function authenticate(request) {
  try {
    const cookies = cookie.parse(request.headers.get("cookie") || "");
    const token = cookies.auth_token;

    if (!token) {
      return { success: false, message: "Unauthorized" };
    }
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);  
    const { payload } = await jwtVerify(token, secret);


    return { success: true, user: payload };
  } catch (error) {
    return {
      success: false,
      message: "Invalid or expired token",
      error: error.message,
    };
  }
}

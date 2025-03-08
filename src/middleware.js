import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
import { authenticate } from "./app/utils/isAuthenticate";

const protectedRoutes = ["/api/user/me"];

const adminRoutes = [
  "/api/admin/update_user_role",
  // "/api/admin/users",
];

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  // const method = req.method;

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isAdminRoute = adminRoutes.includes(pathname);

  if (!isProtectedRoute && !isAdminRoute) {
    return NextResponse.next();
  }

  try {
    const authResult = await authenticate(req);

    if (!authResult.success) {
      return NextResponse.json({ error: authResult.message }, { status: 401 });
    }

    const role = authResult.user.role;

    // if (isAdminRoute && method === "GET" && role !== "admin") {
    if (isAdminRoute && role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden - Admin Access Only" },
        { status: 403 }
      );
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { message: "Middleware error", error: error.message },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: [...protectedRoutes, ...adminRoutes],
  // matcher: [],
};

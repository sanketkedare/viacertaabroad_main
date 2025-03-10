import cookie from "cookie";

export async function POST() {
  try {
    return new Response(
      JSON.stringify({ success: true, message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie.serialize("auth_token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            expires: new Date(0),
          }),
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Logout failed", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

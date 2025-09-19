// app/api/logout/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ success: true, message: "Logged out" });

  // Clear the _token cookie
  res.cookies.set("_token", "", {
    path: "/",
    expires: new Date(0), // expired
  });

  return res;
}

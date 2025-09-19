import { AUTH_ROUTES, PROTECTED_PATTERNS } from "@/utilit/constant";
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("_token");

  console.log("Middleware executed for:", pathname);

  const isProtected = PROTECTED_PATTERNS.some((pattern) =>
    pattern.test(pathname)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\.(?:svg|ico|png|jpg|jpeg|webp|woff|woff2|ttf|otf|eot|js|css|json)).*)",
  ],
};

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request, response) {
  const userToken = request.cookies.get("token")?.value;

  if (!userToken) {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  console.log("Cookies:");
  const { value } = cookieStore.get("token");
  if (!value) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
    });
  }
  const response = { user: "exists" };
  return new Response(JSON.stringify(response), { status: 200 });
}

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  console.log("Cookies:");
  const { value } = cookieStore.get("token");
  if (!value) {
    return NextResponse.json({
      redirectTo: "/",
    });
  }
  const response = { redirect: "/dashboard" };
  return new Response(JSON.stringify(response), { status: 200 });
}

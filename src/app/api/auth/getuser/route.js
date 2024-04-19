import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const cookieStore = cookies();
  const { value } = cookieStore.get("token");
  if (!value) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
    });
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${value}`,
      },
    }
  );

  const response = { user: data };
  return new Response(JSON.stringify(response), { status: 200 });
}

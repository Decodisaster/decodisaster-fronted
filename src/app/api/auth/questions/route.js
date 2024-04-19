import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request, res) {
  const cookieStore = cookies();
  const { value } = cookieStore.get("token");
  const searchParams = request.nextUrl.searchParams;
  const cardId = searchParams.get("cardId");

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/${cardId}`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${value}`,
        },
      }
    );
    // console.log(data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
    });
  }
}

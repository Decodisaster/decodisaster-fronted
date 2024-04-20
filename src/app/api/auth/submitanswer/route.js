import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PUT(request) {
  const { cardId, answer } = await request.json();
  const cookieStore = cookies();
  const { value } = cookieStore.get("token");
  if (!value) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
    });
  }
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/submit/${cardId}/${cardId}`,
      {
        answer,
      },
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${value}`,
        },
      }
    );
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: err.message,
      status: 401,
    });
  }
}

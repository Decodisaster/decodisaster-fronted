import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;

  const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    email,
    password,
  });
  const finalToken = res.data.token;
  //   catch (err) {
  //   console.error(err);
  //   return NextResponse.json({
  //     message: "Unauthorized",
  //     error: err.data,
  //     status: 500,
  //   });
  // }
  if(!finalToken) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
    });
  }
  const response = { message: "Authorized", token: finalToken, status: 200 };
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Set-Cookie": `token=${finalToken}`,
    },
  });
}

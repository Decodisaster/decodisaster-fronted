"use client";
import React, { useState } from "react";
import marvel from "../assets/marvelbg.png";
import Link from "next/link";
import localFont from "next/font/local";
import "../globals.css";
import { loginUser } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import AuthRedirect from "./AuthRedirect";

const myFont = localFont({ src: "../fonts/Avengers.ttf" });

function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  async function handleSubmit() {
    if (email && password) {
      console.log("Email: ", email);
      console.log("Password ", password);
      try {
        const res = await axios.post("/api/auth/login", {
          email,
          password,
        });
        console.log(res.data);
        if (res.status === 200) {
          router.push("/dashboard");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <div className="w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url(${marvel.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "95%",
          height: "95%",
        }}
        className="rounded-3xl flex items-center justify-center"
      >
        <div className="bg-[#D7D7D7] w-[90%] h-[90%] p-3 rounded-3xl flex flex-col gap-5 items-center justify-center">
          <div>
            <h2
              className={`text-2xl md:text-4xl lg:text-7xl font-bold ${myFont.className}`}
            >
              DecoDisaster
            </h2>
          </div>
          <div className="flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center">
            <input
              type="email"
              style={{
                fontFamily: "Bruno Ace SC, sans-serif",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
              className="w-full h-auto rounded-xl p-5 "
            />
            <input
              type="password"
              style={{
                fontFamily: "Bruno Ace SC, sans-serif",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-auto rounded-xl p-5"
            />
            <button onClick={handleSubmit} className="deco-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;

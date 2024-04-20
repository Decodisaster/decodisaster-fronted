"use client";
import Image from "next/image";
import ipu from "../assets/ipulogo.png";
import acm from "../assets/acm-logo.png";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const myFont = localFont({ src: "../fonts/Avengers.ttf" });

function Navbar({ isWatcherModalOpen }) {
  // Receive the isWatcherModalOpen prop
  const router = useRouter();
  const [timer, setTimer] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const { user, error } = await getUserDetails();
      if (error) {
        router.push("/");
        return;
      }
      setUser(user.user);
    })();
  }, [router]);

  useEffect(() => {
    if (!isWatcherModalOpen) {
      // Start the timer only when the watcherModal is closed
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isWatcherModalOpen]); // Watcher for changes in isWatcherModalOpen

  // Calculate hours, minutes, and seconds from total seconds
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center lg:justify-between px-4 md:px-6 lg:px-10 py-8 md:py-8 lg:py-14 gap-5">
      <div className="flex gap-5 items-center w-[10em] md:w-full lg:w-full">
        <Link href="/" className="hover:cursor-pointer">
          <Image
            src={ipu}
            width={500}
            height={500}
            alt="logo"
            className="bg-white w-[6em] md:w-[7em] lg:w-[8em] h-auto p-2 rounded-lg"
          />
        </Link>
        <Link href="/" className="hover:cursor-pointer">
          <Image
            src={acm}
            width={500}
            height={500}
            alt="logo"
            className="bg-white w-[5em] md:w-[6em] lg:w-[7em] h-auto p-2 rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5">
        <div className="bg-[#000834] border-[0.4em] p-2 border-[#FAFF00] min-w-52 lg:w-72 lg:h-16 rounded-lg">
          <p
            className={`text-2xl text-white tracking-wider  ${myFont.className}`}
          >
            Points: {user && user.points}
          </p>
        </div>
        <div className="bg-[#000834] border-[0.4em] p-2 border-[#FAFF00] min-w-52 lg:w-72 lg:h-16 rounded-lg">
          <p
            className={`text-2xl text-white tracking-wider  ${myFont.className}`}
          >
            Time: {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

async function getUserDetails() {
  try {
    const { data } = await axios.get("/api/auth/getuser");
    return {
      user: data,
      error: null,
    };
  } catch (e) {
    return {
      user: null,
      error: e,
    };
  }
}

export default Navbar;

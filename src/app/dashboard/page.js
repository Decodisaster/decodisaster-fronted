"use client";
import React, { useState, useEffect } from "react";
import SetImage from "../components/cards/SetImage";
import WModal from "../components/watchModal";
import one from "../assets/card-assets/one.png";
import two from "../assets/card-assets/two.png";
import three from "../assets/card-assets/three.png";
import four from "../assets/card-assets/four.png";
import five from "../assets/card-assets/five.png";
import six from "../assets/card-assets/six.png";
import seven from "../assets/card-assets/seven.png";
import traingle from "../assets/triangle.png";
import axios from "axios";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import LevelModal from "../components/LevelModal/LevelModal";
import Image from "next/image";
import { modalData } from "../data/modalData";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const levels = [
  {
    id: 1,
    title: "captain_marvel",
    src: six,
    bgColor: "bg-gradient-to-bl from-[#040021] to-[#370161]",
    color: "border-[#FAFF00]  hover:shadow-[#FAFF00]",
    isUnlocked: true,
  },
  {
    id: 2,
    title: "iron_man",
    src: three,
    bgColor: "bg-gradient-to-tl from-[#400025] to-[#010101]",
    color: "border-[#BA0000]  hover:shadow-[#BA0000]",
    isUnlocked: false,
  },
  {
    id: 3,
    title: "star_lord",
    src: seven,
    bgColor: "bg-gradient-to-tl from-[#961D0D] via-[#330052] to-[#000834]",
    color: "border-[#FF1E00] hover:shadow-[#FF1E00]",
    isUnlocked: false,
  },
  {
    id: 4,
    title: "captain_america",
    src: one,
    bgColor: "bg-gradient-to-tr from-[#030511] to-[#020A2E]",
    color: "border-[#00FFFF]  hover:shadow-[#00FFFF]",
    isUnlocked: false,
  },

  {
    id: 5,
    title: "spider_man",
    src: four,
    bgColor: "bg-gradient-to-tr from-[#223B7D] to-[#170307]",
    color: "border-[#F304F4] hover:shadow-[#F304F4]",
    isUnlocked: false,
  },
  {
    id: 6,
    title: "dr_strange",
    src: five,
    bgColor: "bg-gradient-to-br from-[#400025] to-[#0D26CC]",
    color: "border-[#00FFE0]  hover:shadow-[#00FFE0]",
    isUnlocked: false,
  },
];

const myFont = localFont({ src: "../fonts/Avengers.ttf" });

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUserDetails();
      toast.promise(getUserDetails, {
        error: "An error occurred",
      });
      if (error) {
        router.push("/");
        return;
      }
      setUser(user.user);
    })();
  }, [router]);
  const [isWatcherModalOpen, setIsWatcherModalOpen] = useState(false); // Track the state of the watcherModal

  const handleOpenModal = () => {
    setIsWatcherModalOpen(true); // Set the watcherModal state to open
  };

  const handleCloseModal = () => {
    setIsWatcherModalOpen(false); // Set the watcherModal state to closed
  };

  const customOrder = [1, 3, 5, 6, 4, 7, 2];
  levels.sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id));

  useEffect(() => {
    // Open the modal for the first level when the page loads
    handleOpenModal();
  }, []);
  return (
    <>
      {user && (
        <div className="flex flex-col h-screen body-bg">
          <div className="flex-1 overflow-auto">
            <div className="px-5">
              <Navbar isWatcherModalOpen={isWatcherModalOpen} />
              <div className="pl-5 flex flex-col items-start space-y-5">
                <h2
                  className={`text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-wider ${myFont.className}`}
                >
                  Hi, {user.fullname}
                </h2>
                <br />
                <br />
                <h2
                  className={`text-3xl md:text-5xl lg:text-5xl text-white font-semibold tracking-wider ${myFont.className}`}
                >
                  Welcome to DecoDisaster
                </h2>
              </div>
              <div className="mt-10 flex flex-wrap h-auto justify-center items-center gap-5">
                {levels.map((level, index) => (
                  <SetImage
                    key={level.id}
                    levelId={level.id}
                    src={level.src}
                    bgColor={level.bgColor}
                    shape={traingle}
                    color={level.color}
                    onOpen={handleOpenModal}
                    isCardsCompleted={
                      user.cardcompleted + 1 >= level.id || level.isUnlocked
                    } // Open the modal when clicking on any card
                  >
                    <LevelModal
                      data={modalData[level.id - 1]}
                      level={level.id}
                      cardsCompleted={user.cardCompleted}
                    />
                  </SetImage>
                ))}
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>
          {/* <WModal isOpen={isWatcherModalOpen} onClose={handleCloseModal} /> */}
        </div>
      )}
    </>
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

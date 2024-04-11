'use client'
import React, { useState } from "react";
import SetImage from "../components/cards/SetImage";
import one from "../assets/card-assets/one.png";
import two from "../assets/card-assets/two.png";
import three from "../assets/card-assets/three.png";
import four from "../assets/card-assets/four.png";
import five from "../assets/card-assets/five.png";
import six from "../assets/card-assets/six.png";
import seven from "../assets/card-assets/seven.png";
import traingle from "../assets/triangle.png";
import NavCard from "../components/cards/navb";
import LevelModal from "../components/LevelModal/LevelModal";

const levels = [
    {
        title: "Hell1",
        src: one,
        bgColor: "bg-gradient-to-tr from-[#030511] to-[#020A2E]",
        color: "border-[#00FFFF]  hover:shadow-[#00FFFF]",
    },
    {
        title: "Hell2",
        src: two,
        bgColor: "bg-gradient-to-bl from-[#000000] to-[#0000AB]",
        color: "border-[#FFFFFF] hover:shadow-[#FFFFFF]",
    },
    {
        title: "Hell3",
        src: three,
        bgColor: "bg-gradient-to-tl from-[#400025] to-[#010101]",
        color: "border-[#BA0000]  hover:shadow-[#BA0000]",
    },
    {
        title: "Hell4",
        src: four,
        bgColor: "bg-gradient-to-tr from-[#223B7D] to-[#170307]",
        color: "border-[#F304F4] hover:shadow-[#F304F4]",
    },
    {
        title: "Hell5",
        src: five,
        bgColor: "bg-gradient-to-br from-[#400025] to-[#0D26CC]",
        color: "border-[#00FFE0]  hover:shadow-[#00FFE0]",
    },
    {
        title: "Hell6",
        src: six,
        bgColor: "bg-gradient-to-bl from-[#040021] to-[#370161]",
        color: "border-[#FAFF00]  hover:shadow-[#FAFF00]",
    },
    {
        title: "Hell7",
        src: seven,
        bgColor: "bg-gradient-to-tl from-[#961D0D] via-[#330052] to-[#000834]",
        color: "border-[#FF1E00] hover:shadow-[#FF1E00]",
    },
];

export default async function Dashboard() {
    const [modalsOpen, setModalsOpen] = useState(Array(7).fill(false));

    const handleOpenModal = (index) => {
        const updatedModals = [...modalsOpen];
        updatedModals[index] = true;
        setModalsOpen(updatedModals);
    };

    const handleCloseModal = (index) => {
        const updatedModals = [...modalsOpen];
        updatedModals[index] = false;
        setModalsOpen(updatedModals);
    };

    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    
    return (
        <div className="flex items-center h-screen w-screen overflow-y-auto overflow-x-hidden flex-col">
            <div className="flex justify-between items-center h-[10%] w-full m-3">
                <NavCard className="border-red-500 border-solid border-b-2"></NavCard>
                <div className="flex w-[50%] justify-center gap-2">
                    <p className="text-white h-full w-[40%] border-yellow-300 border-[2px] rounded-md p-2 border-solid bg-blue-950">
                        <span className="text-white uppercase">P</span>
                        <span className="font-sans m-1 italic">oints</span> :
                    </p>
                    <p className="text-white h-full w-[40%] border-yellow-300 border-[2px] rounded-md p-2 border-solid bg-blue-950">
                        <span className="text-white uppercase">T</span>
                        <span className="font-sans italic m-1">ime</span> :
                    </p>
                </div>
            </div>
            <div className="m-10 ml-20 text-left w-full">
                <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold uppercase">H<span className="font-sans italic">I USERNAME</span></p>
                <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold uppercase">W<span className="font-sans italic">ELCOME TO DECO DISASTER</span></p>
            </div>
            <div className="flex flex-wrap h-11/12 justify-center items-center gap-5">
                {levels.map((level, index) => (
                    <SetImage
                        key={index}
                        src={level.src}
                        bgColor={level.bgColor}
                        shape={traingle}
                        color={level.color}
                        modalOpen={modalsOpen[index]}
                        onOpen={() => handleOpenModal(index)}
                        onClose={() => handleCloseModal(index)}
                    >
                        <LevelModal title={level.title} />
                    </SetImage>
                ))}
            </div>
        </div>
    );
}

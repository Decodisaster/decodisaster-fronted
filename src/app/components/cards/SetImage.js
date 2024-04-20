"use client";
import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { counterContext } from "../../context/context.js";
import { AiFillLock } from "react-icons/ai";
import localFont from "next/font/local";

function SetImage(props) {
  const [clicker, setclicker] = useState(0); //for sequence wise modal opening

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenLevel = () => setModalOpen(true);

  const handleClose = () => setModalOpen(false);

  return (
    <counterContext.Provider value={{ clicker }}>
      <div
        onClick={props.isCardsCompleted ? handleOpenLevel : null}
        className={`flex z-10 justify-center items-center ${props.bgColor} hover:cursor-pointer hover:shadow-[rgb(0,255,53)_5px_5px_80px] group transition-all duration-[0.5s] ease-[ease-in-out] relative border-[0.5em] p-[2px] gap-5 w-[20em] h-[13em] md:w-[25em] md:h-[15em] lg:w-[28em] lg:h-[18em] ${props.shadow} m-1 rounded-[20px] border-solid ${props.color}`}
      >
        {!props.isCardsCompleted && (
          <>
            <div
              className={
                "relative inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-md"
              }
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AiFillLock className="text-6xl text-white" />
            </div>
          </>
        )}
        <Image
          onClick={() => setclicker(clicker + 1)}
          height={1000}
          width={1000}
          alt="modal-bg"
          className={
            props.isCardsCompleted
              ? `group-hover:translate-y-[-30px] group-hover:scale-[1.1]  transition-all duration-[0.5s] ease-[ease-in-out] w-[30em] h-full object-contain`
              : `w-[30em] h-full object-contain`
          }
          src={props.src}
        />
            <div className=" text absolute inset-0 flex items-center justify-start text-white font-bold italic ml-8 text-xl">
             <h1>Level<div className="mt-3 lg:text-5xl md:text-3xl text-2xl">{props.levelId}</div></h1>
            </div>
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>{props.children}</Box>
        </Modal>
      </div>
    </counterContext.Provider>
  );
}

export default SetImage;

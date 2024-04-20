"use client"
import React from 'react'
import Box from "@mui/material/Box";
import marvel from "../assets/marvelbg.png";
import "../globals.css"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifycontent: "center",
    flexdirection: "column",
  };


const Final = () => {
  return (
    <div className="text-white flex justify-center items-center"><Box
    className="box h-full flex items-center justify-center text-center"
    style={style}
  >
    <div className="px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[50rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
        <div className="my-0font-bold italic text-3xl content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 text-[#010127] items-center justify-center overflow-x-hidden">
          <div className="text-center">
            <h2
              className="font-bold italic mcq"
            >
              Thank you for playing lser. 
            </h2>
          </div>
          <div className="text-center">
            <h2
              className="font-bold italic mcq"

            >
              You have gained ____ points. 
            </h2>
          </div>
          <div className="text-center underline text-red-600">
            <a
              href='#'
              className="font-bold italic mcq"
            >
              Fill this google form. 
            </a>
          </div>
        </div>
      </div>
    </div>
  </Box></div>
  )
}

export default Final
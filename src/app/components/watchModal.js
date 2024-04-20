import React, { useRef } from "react";
import { useState, useContext } from "react";
import marvel from "../assets/marvelbg.png";
import Box from "@mui/material/Box";
import Image from "next/image";
import "./watchsty.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifycontent: "center",
  flexdirection: "column",
};

const watcherModal = ({ isOpen, onClose }) => {
  const [count, setcount] = useState(0);

  return (
    <>
      {isOpen && count == 0 && (
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        >
          <Box className=" box flex items-center justify-center" style={style}>
            <div className="px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[40rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
              <div
                style={{
                  backgroundImage: `url(${marvel.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "95%",
                  height: "95%",
                }}
                className="rounded-3xl flex items-center justify-center "
              >
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[94%] h-[94%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-x2 md:text-2xl lg:text-2xl font-bold italic mt-6 text-center"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Welcome to DecoDisaster 4.0! Here are the guidelines to navigate through the levels:
                    </h2>
                    
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 justify-center">
                      <p className="mb-4">
                        1. There are six levels in total.
                      </p>
                      <p className="mb-4">
                        2. The first level is unlocked initially, granting you access to the challenge.
                      </p>
                      <p className="mb-4">
                        3. To unlock the subsequent levels, you must solve the question provided for each current  level. The answer to each question serves as the password for the next level.
                      </p>
                    <button
                      onClick={() => {
                        setcount(count + 1);
                      }}
                      className="deco-btn flex items-center justify-center"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      )}

      {isOpen && count == 1 && (
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        >
          <Box className="box flex items-center justify-center" style={style}>
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[40rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
              <div
                style={{
                  backgroundImage: `url(${marvel.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "95%",
                  height: "95%",
                }}
                className="rounded-3xl flex items-center justify-center "
              >
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[94%] h-[94%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic text-center"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Welcome to DecoDisaster 4.0! Here are the guidelines to navigate through the levels:
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 min-w-64 justify-center">
                      <p className="mb-1">
                        4. Levels 1 to 4 present one question each.
                      </p>
                      <p className="mb-1">
                        5. Levels 5 and 6 contain two questions each.
                      </p>
                      <p className="mb-1">
                        6. For level 5, the answers to both questions must be combined to unlock level 6.
                      </p>
                      <p className="mb-1">
                        7. Ensure that all answers are written in capital letters and without any spaces.
                      </p>
                      <p className="mb-1">
                        8. Finally, the combination of answers from level 6 will provide the ultimate solution to the challenge.
                      </p>
                      <br/>

                    <button
                      onClick={() => {
                        setcount(count + 1);
                      }}
                      className="deco-btn flex items-center justify-center"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      )}

      {isOpen && count == 2 && (
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        >
          <Box className="box flex items-center justify-center" style={style}>
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[40rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
              <div
                style={{
                  backgroundImage: `url(${marvel.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "95%",
                  height: "95%",
                }}
                className="rounded-3xl flex items-center justify-center "
              >
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic text-center"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Welcome to DecoDisaster 4.0! Here are the guidelines to navigate through the levels:
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 min-w-64 justify-center">
                      <p className="mb-4">
                        For example: In Level 5, if the answers to the questions are "ABCD" and "1234", then the combined password for Level 6 would be "ABCD1234". 
                        Make sure to enter it without any spaces and in all capital letters.
                      </p>
                      <p className="mb-8 font-bold">
                        Get ready to unravel mysteries, and experience the thrill like never before. Let the adventure begin!
                      </p>
                    <br/>
                    <button
                      onClick={onClose}
                      className="deco-btn flex items-center justify-center"
                    >
                      Let's Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};

export default watcherModal;

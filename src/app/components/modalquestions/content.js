"use client";
import React, { useRef, useEffect } from "react";
import marvel from "../../assets/marvelbg.png";
import Link from "next/link";
import "../../globals.css";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import Image from "next/image";
import cap from "../../assets/modal-assets/captain.png";
import { modalData } from "../../data/modalData";
import { counterContext } from "../../context/context.js";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../watchsty.css";
import SubmitAnswer from "../SubmitAnswer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifycontent: "center",
  flexdirection: "column",
};

const Content = ({ id }) => {
  const router = useRouter();
  const value = useContext(counterContext);
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    (async () => {
      const { data, error } = await getQuestion(id);
      if (data == "token expired") {
        router.push("/?error=token expired");
        return;
      }
      if (error) {
        router.push("/dashboard");
        return;
      }
      setData(data.message[0]);
    })();
  }, [router]);
  console.log(data);
  return (
    <>
      (
      <Box
        className="h-full w-full flex flex-col md:flex-row lg:flex-row items-center justify-center px-24"
        style={style}
      >
        <div className="flex flex-row">
          <Image
            src={modalData[id - 1].heroImg}
            alt="hero"
            width={350}
            height={100}
            className="w-[12rem] max-h-xl mr-50 pr-0 md:-ml-[10em] lg:-ml-[4em]"
          />
          <div
            className="lg:top-10 md:max-w-md char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 text-md md:text-xl lg:text-2xl font-bold italic"
            style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
          >
            {data && data.instruction}
          </div>
        </div>
        <div className="px-0 h-[20rem] md:w-[50rem] md:h-[30rem] lg:w-[50rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
            <div className="my-0 content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-2 items-center justify-center overflow-x-hidden">
              <div className="text-center">
                <h2
                  className="font-bold italic"
                  style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                >
                  1. Write all thing in a Capital Letters
                </h2>
              </div>
              <div className="flex flex-col min-w-80 gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center">
                {data && (
                  <Link href={`${data.question_text}`} target="_blank">
                    Click here to begin your quest
                  </Link>
                )}
                {/* <input
                  type="text"
                  onChange={(e) => setAnswer(e.target.value)}
                  style={{
                    fontFamily: "Bruno Ace SC, sans-serif",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  placeholder="Enter your answer here..."
                  className=" min-h-28 w-full h-auto rounded-xl p-5"
                />
                <button
                  onClick={async () => {
                    console.log("before");
                    await submitAnswer(id, answer);
                    console.log("after");
                    router.push("/dashboard");
                  }}
                  className="deco-btn  flex items-center justify-center m-2"
                >
                  Submit
                </button> */}
                <SubmitAnswer id={id} />
              </div>
            </div>
          </div>
        </div>
      </Box>
      )
    </>
  );
};

async function getQuestion(cardId) {
  try {
    const { data } = await axios.get(`/api/auth/questions?cardId=${cardId}`);
    return {
      data,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export default Content;

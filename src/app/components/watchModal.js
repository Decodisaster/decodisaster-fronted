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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic mt-10"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      In the aftermath of Thanos' devastating snap, the world
                      descended into chaos. With half of humanity wiped out,
                      those who remained struggled to survive amidst a power
                      vacuum left by the absence of billions. Opportunistic
                      villains seized control, plunging the world into darkness.
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
          <Box className=" box flex items-center justify-center" style={style}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className="mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      As one of the few remaining heroes, burdened with the
                      responsibility to save humanity, the weight of the task
                      ahead felt insurmountable. Each passing day claimed the
                      lives of friends and allies, leaving me to confront the
                      growing tyranny alone. But hope flickered in the darkness
                      when I encountered Gamora, Thanos' adopted daughter.
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      Despite her tumultuous past, she offered her assistance in
                      the battle against her tyrannical father. With her
                      knowledge and skills, we embarked on a journey to reclaim
                      the Infinity Stones, the source of Thanos' power.
                      Gathering the stones proved to be a perilous endeavor.
                      Thanos, now emboldened by his unmatched might, guarded
                      them fiercely.
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

      {isOpen && count == 3 && (
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      However, with Gamora's guidance and the remnants of the
                      hero community rallying behind us, we mounted a united
                      front against the Mad Titan. Together, we faced relentless
                      battles and overwhelming odds. Yet, with each victory, our
                      resolve strengthened. United by a common purpose, we
                      forged an unbreakable bond, transcending our individual
                      differences.
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

      {isOpen && count == 4 && (
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      Finally, the moment arrived. Standing face to face with
                      Thanos, I knew the fate of the universe hung in the
                      balance. With the Space Stone, Reality Stone, Power Stone,
                      Mind Stone, Time Stone, and Soul Stone secured within a
                      robotic arm, I confronted the embodiment of tyranny and
                      chaos. In a climactic showdown, we unleashed our combined
                      strength against Thanos.
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

      {isOpen && count == 5 && (
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      With unwavering determination, we fought for the survival
                      of humanity, for the fallen, and for the hope of a
                      brighter tomorrow. And as the dust settled, and the echoes
                      of battle faded, I raised the robotic arm, adorned with
                      the Infinity Stones, and made the ultimate sacrifice.
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

      {isOpen && count == 6 && (
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      With a snap of my fingers, I harnessed the power of the
                      stones to reverse the effects of the snap apocalypse,
                      restoring balance to the universe and bringing back those
                      who were lost. With a snap of my fingers, I harnessed the
                      power of the stones to reverse the effects of the snap
                      apocalypse, restoring balance to the universe and bringing
                      back those who were lost.
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

      {isOpen && count == 7 && (
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      From the heart of Manhattan, from the Avengers
                      Headquarters at 890 Fifth Avenue, the beacon of hope
                      radiated once more. The world may have been scarred by
                      tragedy, but through unity and resilience, we emerged
                      victorious.
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

      {isOpen && count == 8 && (
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png"
              alt="hero"
              width={350}
              height={100}
              className=" mr-50 pr-20 w-auto m-auto image"
            />
            <div className=" px-0 w-[20rem] h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[60rem] lg:h-[35rem]  rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center">
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
                <div className="my-0 content-box p-8 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-10 items-center justify-center overflow-x-hidden">
                  <div>
                    <h2
                      className="text-xl md:text-2xl lg:text-2xl font-bold italic"
                      style={{ fontFamily: "Bruno Ace SC, sans-serif" }}
                    >
                      Life After Snap Apocalypse
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 min-w-64 items-center justify-center">
                    <p className="mb-4">
                      Together, we had overcome the darkness, proving that even
                      in the face of despair, heroes will always rise to the
                      challenge, ready to defend the world against any threat,
                      no matter how formidable.
                    </p>
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

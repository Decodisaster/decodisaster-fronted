import React, { useEffect, useState } from "react";
import Image from "next/image";
import localFont from 'next/font/local'


const myFont = localFont({ src: '../../fonts/Avengers.ttf' })

const LevelModal = ({ data, handleCloseModal }) => {
  const [DataChanged, setDataChanged] = useState(false);

  const toggleData = () => {
    setDataChanged((prev) => !prev);
    // onClose();
  };

  return (
    <div className={`flex flex-col md:flex-row lg:flex-row items-center justify-center w-screen h-screen ${myFont.className} relative bg-black bg-opacity-70`}>
      {/* <div className="w-[30em]">
        <Image src={isDataChanged ? data.vilImg : data.heroImg} alt="villain" width={1000} height={1000} />
      </div> */}
      {/* <div className="w-[20em] h-[30rem] flex items-center justify-center text-center bg-[#323232E5] mx-20 rounded-[3em] p-5">
        <h2 className="text-3xl lg:text-4xl text-white">{isDataChanged ? data.vilContent : data.heroContent}</h2>
      </div> */}
      {/* <div className="h-80 w-64 bg-gray-500 mx-20 flex items-center justify-center "> */}
        <button className="text-4xl text-white absolute top-[2rem] left-[2rem] md:top-[5rem] lg:top-[5rem] md:left-[6rem] lg:left-[6rem] hover:cursor-pointer">X</button>
        <div className="modal">
          <div className="modal-content">
            {/* <button className="bg-white p-2" onClick={toggleData}>
              Change Data
            </button> */}
            {DataChanged ? <div>{data.vilMainContent}</div> : <div>{data.heroMainContent}</div>}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default LevelModal;

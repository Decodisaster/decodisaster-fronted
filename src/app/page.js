'use client'
import Link from "next/link"
import ipu from "../app/assets/ipulogo.png"
import acm from "../app/assets/acm-logo.png"
import Image from 'next/image'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import one from "../app/assets/one.jpg"

import localFont from 'next/font/local'
import { useState } from "react";
import { useStepContext } from "@mui/material";
import LoginCard from "../app/components/LoginCard";

const myFont = localFont({ src: '../app/fonts/Avengers.ttf' })


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => setModalOpen(true);

  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-[#000000] to-transparent absolute w-[100%] h-[100%] md:h-full lg:h-full left-0 bottom-0"></div>
      <div className="absolute left-3 md:left-10 lg:left-10 h-screen flex flex-col justify-center">
        <div className="space-y-7">
          <h1 className={`text-white text-2xl md:text-3xl lg:text-5xl font-bold uppercase ${myFont.className}`}>W <span className="font-sans italic">elcome to</span></h1>
          <h1 className={`text-white text-4xl md:text-7xl lg:text-8xl font-bold uppercase ${myFont.className}`}>D <span className="font-sans italic">ecoDisaster</span></h1>
          <p className="text-gray-400 w-[20em] lg:w-[35em] text-md md:text-lg lg:text-xl mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus, veritatis numquam voluptas, error eius consectetur totam laborum voluptatibus voluptates ratione quam in! In, ut!</p>
          <div className="mt-10">
            <div onClick={handleOpen} className="font-sans flex items-center justify-center w-32 h-14 bg-[#6056B6] rounded-full text-white text-2xl font-semibold hover:cursor-pointer">Login</div>
            <Modal
              open={modalOpen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <LoginCard />
              </Box>
            </Modal>
          </div>
        </div>
        <h3 className="text-xl text-white mt-5 font-semibold">Presented by:</h3>
        <div className='flex flex-row gap-10 mt-5'>
          <Image src={ipu} width={500} height={500} alt='logo' className='bg-white w-[9em] h-[8em] p-2 rounded-lg' />
          <Image src={acm} width={500} height={500} alt='logo' className='bg-white w-[8em] h-[8em] p-2 rounded-full' />
        </div>
      </div>
    </div>
  );
}

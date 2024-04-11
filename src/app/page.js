'use client'

import ipu from "../app/assets/ipulogo.png"
import acm from "../app/assets/acm-logo.png"
import char from "../app/assets/char.png"
import Image from 'next/image'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import localFont from 'next/font/local'
import { Audiowide } from "next/font/google"
import { useState } from "react";
import LoginCard from "../app/components/LoginCard";

const myFont = localFont({ src: '../app/fonts/Avengers.ttf' })
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] })


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
      <div className="bg-gradient-to-r from-black-gradient from-5%  to-gray-gradient absolute w-[100%] h-[100%] md:h-full lg:h-full left-0 bottom-0"></div>
      <div id="main-content">
        <div className="absolute left-3 md:left-10 lg:left-10 h-screen flex flex-col justify-center">
          <div className="space-y-8">
            <h1 className={`text-white text-3xl md:text-3xl lg:text-6xl ${myFont.className} tracking-wider`}>Welcome To</h1>
            <h1 className={`text-white text-[2.5em] md:text-7xl lg:text-8xl ${myFont.className} tracking-wider`}>DecoDisaster</h1>
            
            <div className="mt-10">
              <div onClick={handleOpen} className={`mt-16 font-sans flex items-center justify-center w-[10rem] h-[4.5rem] lg:w-[12rem] lg:h-[5rem] bg-gradient-to-l from-[#9747FF] to-[#160023] rounded-full text-white text-[36px] lg:text-[44px] font-semibold hover:cursor-pointer ${audiowide.className}`}>Login</div>
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
          <div className="mt-10">
            <h3 className={`text-xl lg:text-2xl text-white mt-5 font-semibold ${audiowide.className}`}>Presented by:</h3>
            <div className='flex flex-row gap-10 mt-5'>
              <Image src={ipu} width={500} height={500} alt='logo' className='bg-white w-auto h-[6em] lg:h-[8em] p-2 rounded-lg' />
              <Image src={acm} width={500} height={500} alt='logo' className='bg-white w-auto h-[6em] lg:h-[8em] p-2 rounded-full' />
            </div>
          </div>
        </div>
        <div className="block  lg:hidden">
          <Image src={char} alt="character" width={1000} height={1000} className="w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
        </div>
      </div>
    </div>
  );
}

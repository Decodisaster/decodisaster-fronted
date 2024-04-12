import Image from 'next/image'
import React from 'react'
import ipu from "../assets/ipulogo.png"
import acm from "../assets/acm-logo.png"
import localFont from 'next/font/local'
import Link from 'next/link'

const myFont = localFont({ src: '../fonts/Avengers.ttf' })

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center md:items-center lg:items-center justify-between px-10 py-14 gap-5'>
      <div className='flex gap-5 items-center'>
        <Link href="/" className='hover:cursor-pointer'>
          <Image src={ipu} width={500} height={500} alt='logo' className='bg-white w-[6em] md:w-[7em] lg:w-[8em] h-auto p-2 rounded-lg' />
        </Link>
        <Link href="/" className='hover:cursor-pointer'>
          <Image src={acm} width={500} height={500} alt='logo' className='bg-white w-[5em] md:w-[6em] lg:w-[7em] h-auto p-2 rounded-full' />
        </Link>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
        <div className='bg-[#000834] border-[0.4em] p-2 border-[#FAFF00] min-w-52 lg:w-72 lg:h-16 rounded-lg'>
          <p className={`text-xl text-white tracking-wider  ${myFont.className}`}>Points: </p>
        </div>
        <div className='bg-[#000834] border-[0.4em] p-2 border-[#FAFF00] min-w-52 lg:w-72 lg:h-16 rounded-lg'>
          <p className={`text-xl text-white tracking-wider  ${myFont.className}`}>Time: </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
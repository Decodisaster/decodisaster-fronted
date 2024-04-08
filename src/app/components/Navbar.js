import Image from 'next/image'
import React from 'react'
import ipu from "../assets/ipulogo.png"
import acm from "../assets/acm-logo.png"

function Navbar() {
  return (
    <div className='flex flex-row gap-10'>
        <Image src={ipu} width={500} height={500} alt='logo' className='bg-white w-[9em] h-[8em] p-2 rounded-lg' />
        <Image src={acm} width={500} height={500} alt='logo' className='bg-white w-[8em] h-[8em] p-2 rounded-full' />
    </div>
  )
}

export default Navbar
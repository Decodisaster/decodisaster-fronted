import Image from 'next/image'
import React from 'react'
import ipu from "../../assets/ipulogo.png"
import acm from "../../assets/acm-logo.png"
function NavCard() {

    return (
        <div>
            <div className='flex flex-row gap-10 p-6 bg-white'>
                <Image src={ipu} width={1000} height={1000} alt='logo' className='bg-white w-32 h-auto p-2 rounded-lg' />
                <Image src={acm} width={1000} height={1000} alt='logo' className='bg-white w-32 h-auto p-2 rounded-full' />
            </div>
        </div>
    );
}

export default NavCard;
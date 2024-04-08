import React from 'react'
import marvel from "../assets/marvelbg.png"
import Link from 'next/link'

function LoginCard() {
    return (
        <div className='w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
            <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                <div className='bg-[#D7D7D7] w-[90%] h-[90%] p-3 rounded-3xl flex flex-col gap-5 items-center justify-center'>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>DecoDisaster</h2>
                    </div>
                    <div className='flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center'>
                        <input type="email" style={{ fontFamily: 'Bruno Ace SC, sans-serif', backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', }} placeholder='Username' className='w-full h-auto rounded-xl p-5' />
                        <input type="password" style={{ fontFamily: 'Bruno Ace SC, sans-serif', backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', }} placeholder='Password' className='w-full h-auto rounded-xl p-5' />
                        <Link href={'/dashboard'} onClick={console.log('hello')} style={{
                            backgroundImage: `url(${marvel.src})`,
                            backgroundSize: 'cover', backgroundPosition: 'center', fontFamily: 'Bruno Ace SC, sans-serif'
                        }}
                            className='hover:cursor-pointer w-[5em] text-xl md:w-[5em] md:text-2xl lg:w-[5em] lg:text-3xl h-auto p-3 rounded-xl flex items-center justify-center italic  font-bold text-[#000C4A]'
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCard
import Image from "next/image"
import grooting from "../assets/grooting.png"

export default function Loading() {
    return (
        <div id="loading-animation" className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Image src={grooting} alt="Logo" className="w-32 h-32 md:w-[10em] md:h-[10em] lg:w-[20em] lg:h-[20em] animate-pulse" width={1000} height={1000} />
        </div>
    )
}

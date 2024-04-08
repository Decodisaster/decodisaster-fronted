import Image from "next/image"
import grooting from "../assets/grooting.png"

export default function Loading() {
    return (
        <div id="loading-animation" className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Image src={grooting} alt="Logo" className="w-16 h-16" width={1000} height={1000} />
        </div>
    )
}

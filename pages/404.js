import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"

export default function Custom404() {
    return (
        <>
            <main className="mydiv w-full h-full xl:items-center flex flex-wrap bg-image-container">
                <div className="flex w-full md:h-[900px] 3xl:h-[800px] justify-center items-center md:portrait:min-h-[600px]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-white text-[14rem]">404_</div>
                        <div className="flex items-center">
                            <div className="flex text-white text-xl text-[#EC992A]">You're out of your comfort zone. Let's take you back</div><button className="ml-2 border border-white px-14 py-3 text-[#EC992A] text-xl">HOME</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
  }

import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"

export default function Custom404() {
    return (
        <div className="flex w-full items-center justify-center bg-image-container">
            <div className="flex flex-col h-screen justify-center py-[30px] items-center spce-y-6 xl:space-y-10 min-h-[600px] px-4">
                <div className="flex text-white text-[8rem] xl:text-[14rem] xl:leading-[12rem] z-10">404_</div>
                <div className="flex flex-wrap items-center justify-center space-y-6 md:space-y-0">
                    <div className="flex text-xl text-center">
                        <div className="flex items-center h-full w-full z-10 text-[#EC992A]">There's nothing to see here. Let's take you back</div>
                    </div>
                    <Link href="/" className="z-10 ml-2 border-2 border-[#EC992A] px-14 py-2 text-[#EC992A] text-xl hover:bg-[#EC992A] hover:text-black ease-in-out duration-500">home</Link>
                </div>
            </div>
        </div>
    )
  }

import Image from "next/image"
import Link from "next/link"

export default function Custom404() {
    return (
        <div className="flex w-full items-center justify-center bg-image-container">
            <div className="flex flex-col h-screen justify-center py-[30px] items-center spce-y-6 xl:space-y-10 min-h-[600px] px-4">
                <div className="flex text-white text-[8rem] xl:text-[14rem] xl:leading-[12rem] z-10">404_</div>
                <div className="flex flex-wrap items-center justify-center space-y-6 md:space-y-0">
                    <div className="flex text-center">
                        <div className="flex items-center h-full w-full z-10 text-xl 3xl:text-2xl text-[#EC992A]">Can't see clearly?... Let me take you back</div>
                    </div>
                    <Link href="/" className="flex items-center z-10 ml-2 border-2 border-[#EC992A] text-[#EC992A] text-xl 3xl:text-2xl hover:bg-[#EC992A] hover:text-black ease-in-out duration-500 w-[166px] h-[45px] px-2">
                    <p className="w-full text-center md:text-left">home</p></Link>
                </div>
            </div>
        </div>
    )
  }

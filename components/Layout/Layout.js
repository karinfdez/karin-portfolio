import SvgInitialsMark from "../svgCmp/SvgInitialsMark"
import Burger from "../Burger"
import SideNav from "../SideNav"
import { varProps } from "../../mainvar"

export default function Layout({ children }) {
  return (
    <>
        <div className='flex w-full xl:py-8 lg:min-w-[380px] h-full justify-center px-0 lg:px-6'>
            <div className='py-6 lg:px-4 w-full h-full xl:max-w-[1800px] 3xl:max-w-[2600px]'>
                <div className='flex justify-center items-center w-full relative'>
                    <div className="w-full align-center hidden lg:inline-block absolute text-5xl opacity-25 tracking-wider text-light-blue font-bold font-raleway transform -rotate-90 origin-top-left top-[10rem] left-0 3xl:left-[1.6rem]">
                        About
                    </div>
                    <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px]'>
                        <SvgInitialsMark/>
                    </div>
                    <Burger varProps={varProps} />
                </div>
                <div className="flex flex-wrap-reverse md:grid md:grid-cols-[10%_80%_10%] lg:grid-cols-[4%_92%_4%] landscape:md:pt-12 landscape:lg:pt-24 portrait:lg:pt-40 3xl:pt-44 items-center">
                    <div className="flex border-t-2 border-light-blue mt-4 md:mt-0 md:border-none w-full md:items-center">
                        <SideNav />
                    </div>
                    <main className="w-full flex flex-wrap lg:max-w-[1200px] xl:max-w-[1250px] mx-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    </>
  )
}
import SvgInitialsMark from "../svgCmp/SvgInitialsMark"
import Burger from "../Burger"
import SideNav from "../SideNav"
import { varProps } from "../../mainvar"

export default function Layout({verticalTitle='', children }) {
  return (
    <div className='flex w-full xl:pt-8 justify-center px-0 lg:px-6 min-h-screen h-full'>
        <div className='flex flex-col lg:px-4 3xl:px-8 w-full h-full xl:max-w-[1800px] 3xl:max-w-[2600px] items-center relative pt-4 md:pt-0'>
                {verticalTitle && <div className="align-center hidden xl:inline-block absolute text-5xl opacity-25 tracking-wider text-light-blue font-bold font-raleway transform rotate-[90deg] origin-top-left top-[1rem] lg:left-[4.5rem] 3xl:left-[7rem]">
                    {verticalTitle}
                </div>}
            <div className='flex justify-center items-center w-full relative'>
                <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px]'>
                    <SvgInitialsMark/>
                </div>
                <Burger varProps={varProps} />
            </div>
            <div className="flex w-full h-full md:h-[700px] 3xl:h-[800px] items-center">
                <div className="flex flex-wrap-reverse w-full lg:grid lg:grid-cols-[10%_80%_10%] xl:grid-cols-[4%_92%_4%] items-center xl:py-[60px] 3xl:pt-[50px] min-h-[600px] md:max-h-[600px] my-auto">
                    <div className="flex border-t-2 border-light-blue mt-4 md:mt-0 lg:border-none w-full md:items-center">
                        <SideNav />
                    </div>
                    <main className="w-full h-auto xl:items-center flex flex-wrap md:landscape:max-w-[750px] xl:max-w-[1250px] 3xl:max-w-[1350px] my-auto mx-auto">
                        {children}
                    </main>
                </div>

            </div>
        </div>
    </div>
  )
}
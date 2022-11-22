import SvgInitialsMark from "../svgCmp/SvgInitialsMark"
import Burger from "../Burger"
import SideNav from "../SideNav"
import { varProps } from "../../mainvar"

export default function Layout({verticalTitle='', children }) {
  return (
    <div className='flex w-full pt-8 justify-center px-0 lg:px-6 min-h-screen h-full'>
        <div className='flex flex-col lg:px-4 3xl:px-8 w-full h-full xl:max-w-[1800px] 3xl:max-w-[2600px] items-center relative pt-0 lg:pt-5 md:pt-0'>
            <div className='flex justify-center items-center w-full relative'>
                <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px]'>
                    <SvgInitialsMark/>
                </div>
                <Burger varProps={varProps} />
            </div>
            <div className="flex w-full h-full md:h-[700px] 3xl:h-[800px] items-center">
                <div className="flex flex-wrap-reverse w-full xl:grid xl:grid-cols-[4%_92%_4%] items-center xl:py-[60px] 3xl:pt-[50px] min-h-[600px] md:portrait:h-[900px] my-auto">
                    <div className="flex flex-col border-t-2 border-light-blue mt-4 md:mt-0 md:border-none w-full md:items-center relative">
                        <SideNav />
                        {verticalTitle && <div className="absolute -top-[250px] 3xl:-top-[300px] hidden xl:inline-block text-5xl opacity-25 tracking-wider text-light-blue font-bold font-raleway transform -rotate-[90deg]">
                        {verticalTitle}
                </div>}
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
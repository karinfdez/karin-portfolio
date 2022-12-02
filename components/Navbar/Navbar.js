
import SvgInitialsMark from "../svgCmp/SvgInitialsMark"
import Link from "next/link"

const Navbar = () => (
    <div className='flex items-center w-full h-[70px] md:h-[80px] 3xl:h-[70px] fixed top-0 max-w-full shadow-lg header-main px-10 3xl:px-14 z-20'>
        <div className='flex justify-start-start w-[50px] h-[50px] md:w-[60px] md:h-[60px]'>
            <SvgInitialsMark/>
        </div>
        <div className="flex w-full justify-end space-x-4">
            <Link href="/" className="hover-animation font-bold text-orange-pal">Resume</Link>
            <Link href="/#projects" className="hover-animation font-bold text-orange-pal">Projects</Link>
        </div>
            {/* <Burger varProps={varProps} /> */}
    </div>
)

export default Navbar
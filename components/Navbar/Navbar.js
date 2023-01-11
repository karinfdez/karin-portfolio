import { useState } from "react";
import SvgInitialsMark from "../svgCmp/SvgInitialsMark";
import Link from "next/link";
import Hamburger from "../Hamburger";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div
        className={`navigation !${
          hamburgerOpen
            ? "none"
            : "flex items-center w-full h-[70px] md:h-[80px] 3xl:h-[70px] fixed top-0 max-w-full shadow-lg header-main px-10 3xl:px-14 z-20"
        }`}
      >
        <div className="flex justify-start-start w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
          <SvgInitialsMark />
        </div>
        <div className="menu-nav flex w-full justify-end space-x-4 navigation">
          <Link href="/" className="hover-animation font-bold text-orange-pal">
            Resume
          </Link>
          <Link
            href="/#projects"
            className="hover-animation font-bold text-orange-pal"
          >
            Projects
          </Link>
        </div>
      </div>
      <div
        className="w-full flex hamburger justify-end"
        onClick={toggleHamburger}
      >
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </>
  );
};

export default Navbar;

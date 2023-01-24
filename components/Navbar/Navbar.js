import { useState } from "react";
import SvgInitialsMark from "../svgCmp/SvgInitialsMark";
import Link from "next/link";
import Hamburger from "../Hamburger";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const barList = [
    {
      name: "Resume",
      href: "",
      className:
        "text-orange-pal text-[30px] md:text-lg text-center style-3 font-bold",
      dataReplace: "Resume",
    },
    {
      name: "Projects",
      href: "/#projects",
      className:
        "text-orange-pal text-[30px] md:text-lg text-center style-3 font-bold",
      dataReplace: "Projects",
    },
  ];

  return (
    <div className="flex w-full items-center h-[70px] md:h-[80px] 3xl:h-[70px] fixed top-0 max-w-full shadow-lg header-main px-10 3xl:px-14 z-20">
      <div className="flex justify-start fixed w-[50px] z-20 h-[50px] md:w-[60px] md:h-[60px]">
        <SvgInitialsMark />
      </div>
      <div className="menu-nav flex w-full justify-end space-x-8 navigation">
        {barList.map((item, index) => (
          <Link
            id="style-2"
            data-replace={item.dataReplace}
            className={item.className}
            href={item.href}
            key={index}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div
        className="absolute right-0 top-2 fixed w-[60px] h-[70px] flex hamburger flex-end"
        onClick={toggleHamburger}
      >
        <div className="container nav-container flex items-center absolute top-0 right-0">
          <div
            className={`${hamburgerOpen ? "hidden" : "flex hamburger-lines"}`}
          >
            <span
              className={`line line1 ${
                hamburgerOpen ? "rotate-45" : "rotate-0"
              } ease-in-out duration-500 transition-transform`}
            ></span>
            <span
              className={`line line2 ${
                hamburgerOpen ? "scale-y-0" : ""
              } ease-in-out duration-500 transition-transform`}
            ></span>
            <span
              className={`line line3 ${
                hamburgerOpen ? "-rotate-45" : "rotate-0"
              } ease-in-out duration-500 transition-transform`}
            ></span>
          </div>
        </div>
        <Hamburger isOpen={hamburgerOpen} barList={barList} />
      </div>
    </div>
  );
};

export default Navbar;

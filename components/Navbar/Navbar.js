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
        "text-orange-pal text-[30px] lg:text-lg text-center style-3 font-bold",
      dataReplace: "text-orange-pal text-lg text-center style-3 font-bold",
    },
    {
      name: "Projects",
      href: "/#projects",
      className:
        "text-orange-pal text-[30px] lg:text-lg text-center style-3 font-bold",
      dataReplace: "Projects",
    },
  ];

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
        <div className="menu-nav flex w-full justify-end space-x-8 navigation">
          {barList.map((item, index) => (
            <Link
              data-replace={item.dataReplace}
              className={item.className}
              href={item.href}
              key={index}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="w-full flex hamburger justify-end"
        onClick={toggleHamburger}
      >
        <Hamburger isOpen={hamburgerOpen} barList={barList} />
      </div>
    </>
  );
};

export default Navbar;

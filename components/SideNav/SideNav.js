import React from "react";
import SvgGithubMark from "../svgCmp/SvgGithubMark";
import SvgLinkedinMark from "../svgCmp/SvgLinkedinMark";
import SvgTwitterMark from "../svgCmp/SvgTwitterMark";

const SideNav = (props) => {
    return (
        <nav className="flex md:flex-col z-10 flex w-full h-full items-center justify-center items-center space-x-8 py-4 xl:py-0 md:space-x-0 md:space-y-4 z-[99999]"
        >
            <a
                href="https://github.com/karinfdez"
                className="hover:xl:scale-[1.15] xl:ease-in xl:duration-300 transform-gpu"
            >
                <SvgGithubMark width={40} height={40} />
            </a>
            <a
                href="https://www.linkedin.com/in/karinfernandez"
                className="hover:xl:scale-[1.15] xl:ease-in xl:duration-300 transform-gpu"
            >
                <SvgLinkedinMark width={40} height={40} />
            </a>
            <a
                href="https://twitter.com/karincodes"
                className="hover:xl:scale-[1.15] xl:ease-in xl:duration-300 transform-gpu"
            >
                <SvgTwitterMark width={40} height={40}/>
            </a>
        </nav>
    );
};

export default SideNav;

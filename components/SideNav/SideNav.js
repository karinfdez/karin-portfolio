import React from "react";
import SvgGithubMark from "../svgCmp/SvgGithubMark";
import SvgLinkedinMark from "../svgCmp/SvgLinkedinMark";
import SvgTwitterMark from "../svgCmp/SvgTwitterMark";

const SideNav = (props) => {
    return (
        <nav className="flex md:flex-col z-10 flex w-full h-full items-center justify-center items-center space-x-8 py-4 xl:py-0 md:space-x-0 md:space-y-4"
        >
            <a
                href="https://github.com/karinfdez"
                className="transition duration-700 ease hover:opacity-50"
            >
                <SvgGithubMark width={40} height={40} />
            </a>
            <a
                href="https://www.linkedin.com/in/karinfernandez"
                className="transition duration-700 ease hover:opacity-50 mt-0 ml-0"
            >
                <SvgLinkedinMark width={40} height={40} />
            </a>
            <a
                href="https://twitter.com/karincodes"
                className="transition duration-700 ease hover:opacity-50"
            >
                <SvgTwitterMark width={40} height={40} />
            </a>
        </nav>
    );
};

export default SideNav;

import React from "react";
import SvgGithubMark from "../svgCmp/SvgGithubMark";
import SvgLinkedinMark from "../svgCmp/SvgLinkedinMark";
import SvgTwitterMark from "../svgCmp/SvgTwitterMark";

const SideNav = (props) => {
    const { navbarHeight, navbarWidth, namePage = "" } = props;
    return (
        <div className={`flex w-${navbarWidth}  bg-transparent`}>
            {namePage && (
                <div
                    className={`w-full align-center absolute text-5xl opacity-25 tracking-wider text-light-blue font-bold font-raleway transform -rotate-90 origin-top-left top-${namePage}`}
                >
                    {namePage}
                </div>
            )}
            <nav
                className={`flex flex-col justify-between z-10 flex max-h-10 h-${navbarHeight} w-full z-9999`}
            >
                <a
                    href="https://github.com/karinfdez"
                    className="githubIcon pb-4 transition duration-700 ease hover:animate-spin"
                >
                    <SvgGithubMark width={40} height={40} />
                </a>
                <a
                    href="https://www.linkedin.com/in/karinfernandez"
                    className="linkedinIcon pb-4 transition duration-700 ease hover:opacity-50"
                >
                    <SvgLinkedinMark width={40} height={40} />
                </a>
                <a
                    href="https://twitter.com/karincodes"
                    className="twitterIcon pb-4 transition duration-700 ease hover:opacity-50"
                >
                    <SvgTwitterMark width={40} height={40} />
                </a>
            </nav>
        </div>
    );
};

export default SideNav;

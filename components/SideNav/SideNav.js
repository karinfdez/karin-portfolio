import React from "react";
import SvgGithubMark from "../svgCmp/SvgGithubMark";
import SvgLinkedinMark from "../svgCmp/SvgLinkedinMark";
import SvgTwitterMark from "../svgCmp/SvgTwitterMark";
import Link from "next/link";

const SideNav = (props) => {
  return (
    <nav className="flex w-full h-full items-center justify-center space-x-6">
      <Link href="https://github.com/karinfdez" className="hover-animation">
        <SvgGithubMark width={37} height={37} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/karinfernandez"
        className="hover-animation"
      >
        <SvgLinkedinMark width={37} height={37} />
      </Link>
      <Link href="https://twitter.com/karincodes" className="hover-animation">
        <SvgTwitterMark width={37} height={37} />
      </Link>
    </nav>
  );
};

export default SideNav;

import React, { useState } from "react";
import Link from "next/link";

const Hamburger = ({ isOpen }) => {
  console.log("isOpen", isOpen);
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container flex items-center">
          <div className="hamburger-lines">
            <span
              className={`line line1 ${
                isOpen ? "rotate-45" : "rotate-0"
              } ease-in-out duration-500 transition-transform`}
            ></span>
            <span
              className={`line line2 ${
                isOpen ? "scale-y-0" : ""
              } ease-in-out duration-500 transition-transform`}
            ></span>
            <span
              className={`line line3 ${
                isOpen ? "-rotate-45" : "rotate-0"
              } ease-in-out duration-500 transition-transform`}
            ></span>
          </div>
          {/* <div className="flex menu-items min-w-full w-full">
            <li className="w-full">
              <Link href="/">Resume</Link>
            </li>
            <li className="w-full">
              <Link href="/">Projects</Link>
            </li>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Hamburger;

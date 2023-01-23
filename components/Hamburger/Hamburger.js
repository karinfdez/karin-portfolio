import React, { useState } from "react";
import Link from "next/link";

const Hamburger = ({ isOpen, barList = [1, 2, 3], onClick }) => {
  return (
    <nav className="w-full h-full relative">
      <div
        className={`w-full bg-dark-blue opacity-[0.97] fixed right-0 top-0 h-screen p-5 md:p-12 z-40 ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container nav-container flex items-center absolute top-2 right-0">
          <div className="flex hamburger-lines">
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
        </div>
        {isOpen && (
          <div
            className={`flex w-full h-full flex-nowrap z-10 flex-col`}
            onClick={onClick}
          >
            <div className="flex flex-col mt-16 w-full h-full items-center space-y-16">
              {barList.map((item, index) => (
                <Link
                  data-replace={item.dataReplace}
                  className={`${item.className}`}
                  href={item.href}
                  key={index}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Hamburger;

import React, { useState } from "react";

const Hamburger = ({ isOpen }) => {
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
        </div>
      </div>
    </nav>
  );
};

export default Hamburger;

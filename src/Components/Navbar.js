/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../Assests/Css/Navbar.css";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* md:max-w-screen-xl */}
      <nav className="px-2 py-1 mx-auto nav">
        <h6 className="brandName flex">
          <span>&lt;</span>Yatendra
          <span>&nbsp;</span>
          <span>&#47;</span>
          <span>&gt;</span>
        </h6>

        <button className="flex md:hidden cursor-pointer" id="hamburger">
          <img className={isActive ? "hidden  border-none" : "block"} onClick={toggleClass} src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" alt="block" width="40" height="40" />
          <img className={isActive ? "block  border-none" : "hidden"} onClick={toggleClass} src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" alt="hidden" width="40" height="40" />
        </button>

        <ul className="nav_headers px-5 toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
          <li className="Nav_links">
            <a href="home" className="block md:inline-block  px-3 py-3 md:border-none">
              Home
            </a>
          </li>
          <li className="Nav_links">
            <a href="tool" className="block md:inline-block  px-3 py-3 md:border-none">
              ToolBelt
            </a>
          </li>
          <li className="Nav_links">
            <a href="#" className="block md:inline-block  px-3 py-3 md:border-none">
              Project
            </a>
          </li>
          <li className="Nav_links">
            <a href="#" className="block md:inline-block  px-3 py-3 md:border-none">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

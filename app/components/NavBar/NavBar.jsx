"use client";
import { useState } from "react";
import useScrollSections from "@/app/hooks/useScrollSectrions";
import Navigation from "./Navigation";
import LanguageSwitch from "./LanguajeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { scrolled } = useScrollSections();
  const [sideBarMenu, setSideBarMenu] = useState(false);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 fixed ${
        scrolled
          ? "bg-white px-2 py-2 text-black h-16 transition-all duration-300 backdrop-blur-sm bg-opacity-80"
          : " bg-transparent px-2 py-4 text-white  transition-all duration-300"
      } flex justify-between items-center`}
    >
      <div>
        <p className="text-4xl tracking-wider cursor-pointer font-semibold bg-transparent relative">
          Portfo<span className="text-[#f9004d]">lio</span>
        </p>
      </div>
      <div className="md:hidden block">
        <FontAwesomeIcon
          className={`text-2xl m-1  ${sideBarMenu ? "hidden" : ""} md:block`}
          onClick={() => {
            setSideBarMenu(true);
          }}
          icon={faBars}
        />
      </div>

      <div
        className={`p-5 md:flex justify-center items-center md:gap-5 gap-10 flex-col md:flex-row ${
          sideBarMenu
            ? `bg-[#f9004d] md:bg-transparent absolute md:block right-0 h-screen md:h-auto top-0 w-40 md:w-auto`
            : `hidden`
        }`}
      >
        <div className="md:hidden block">
          <FontAwesomeIcon
            onClick={() => {
              setSideBarMenu(false);
            }}
            className="mb-5"
            icon={faXmark}
          />
        </div>

        <Navigation sideBarMenu={sideBarMenu} setSideBarMenu={setSideBarMenu} />
        <div className="mt-5 md:mt-0">
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

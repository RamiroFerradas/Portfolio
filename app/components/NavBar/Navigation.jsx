"use client";

import { useLanguage } from "@/app/context/LanguajeContext";
import useScrollSections from "@/app/hooks/useScrollSectrions";
import { Routes } from "@/app/routes/routes";
import LinkScroll from "../LinkScroll";

export default function Navigation({ activeSection }) {
  const { text } = useLanguage();
  const { scrolled } = useScrollSections();
  const Links = Routes(text.navBar);
  return (
    <ul className={` flex relative flex-col md:flex-row gap-5 md:gap-0`}>
      {Links?.map((value, index) => (
        <li
          key={index}
          className="group font-bold text-gray-600 transition duration-300 mx-2 flex flex-row"
        >
          <LinkScroll
            offset={-10}
            to={value.href}
            className={` ${scrolled ? "md:text-black" : ` md:text-white`} ${
              activeSection === value.active ? "text-black" : `text-white`
            } md:hover:text-[#f9004d] font-bold`}
          >
            {value.text}
            <span
              className={`block max-w-0 ${
                activeSection === value.active && `max-w-full`
              } md:group-hover:max-w-full transition-all duration-500 h-[3px] md:bg-[#f9004d] bg-black`}
            />
          </LinkScroll>
        </li>
      ))}
    </ul>
  );
}

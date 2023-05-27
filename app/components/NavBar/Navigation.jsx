"use client";
import { useLanguage } from "@/app/context/LanguajeContext";
import useScrollSections from "@/app/hooks/useScrollSectrions";
import { Routes } from "@/app/routes/routes";

export default function Navigation() {
  const { text } = useLanguage();
  const { scrolled, sectionActive } = useScrollSections();

  return (
    <ul className={` flex relative flex-col md:flex-row gap-5 md:gap-0`}>
      {Routes.map((value, index) => (
        <li
          key={index}
          className="group font-bold text-gray-600 transition duration-300 mx-2 flex flex-row"
        >
          <a
            href={value.href}
            className={` ${scrolled ? "md:text-black" : ` md:text-white`} ${
              sectionActive === value.active ? "text-black" : `text-white`
            } md:hover:text-[#f9004d] font-bold`}
          >
            {text?.navBar?.[value.text]}
            <span
              className={`block max-w-0 ${
                sectionActive === value.active && `max-w-full`
              } md:group-hover:max-w-full transition-all duration-500 h-[3px] md:bg-[#f9004d] bg-black`}
            ></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

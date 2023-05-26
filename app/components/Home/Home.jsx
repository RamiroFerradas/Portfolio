import { React } from "react";

import style from "./Home.module.css";
import { useLanguage } from "@/app/context/LanguajeContext";

export default function Home() {
  const { text } = useLanguage();

  return (
    <section
      id="home"
      className="h-screen text-white relative text-2xl flex flex-col justify-start "
    >
      <div className="md:left-20 left-8 top-40 absolute">
        <p className="text-[#fcfc] tracking-wider">{text.home.homeText1}</p>
        <p className="md:text-7xl text-4xl md:my-5 my-2 mx-0 tracking-wider ">
          Ramiro Ferradas
        </p>
        <p className="">{text.home.homeText2}.</p>
      </div>
    </section>
  );
}
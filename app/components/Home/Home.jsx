"use client";
import VisibilitySensor from "react-visibility-sensor";
import { useLanguage } from "@/app/context/LanguajeContext";

export default function Home({ handleSectionVisibility }) {
  const { text } = useLanguage();

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible) => handleSectionVisibility(isVisible, "home")}
    >
      <section
        data-aos="fade-right"
        id="home"
        className="h-screen text-white retive text-2xl flex flex-col justify-start "
      >
        <div className="md:left-20 left-8 top-40 absolute animate-runHom">
          <p className="text-[#fcfc] tracking-wider">{text.home.homeText1}</p>
          <p className="md:text-7xl text-4xl md:my-5 my-2 mx-0 tracking-wider ">
            Ramiro Ferradas
          </p>
          <p className="">{text.home.homeText2}</p>
        </div>
      </section>
    </VisibilitySensor>
  );
}

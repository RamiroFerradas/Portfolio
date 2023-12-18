"use client";

import { useLanguage } from "@/app/context/LanguajeContext";
import Card from "./Card";
import { ListServices } from "./ListServices";
import VisibilitySensor from "react-visibility-sensor";

export default function MyServices({ handleSectionVisibility }) {
  const { text } = useLanguage();

  const services = ListServices(text);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible) => handleSectionVisibility(isVisible, "services")}
    >
      <section
        id="services"
        className={`flex flex-col justify-center items-center gap-6 my-10 relative text-white h-[100vh]`}
        data-aos="zoom-in-up"
      >
        <div className={`text-3xl text-white`}>
          <p>{text.services.title}</p>
        </div>

        <div
          className={`animate-animationServices gap-8 grid grid-cols-1 md:grid-cols-3 mt-50 justify-center items-center`}
        >
          {services.map((s, i) => (
            <Card
              key={i}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>
      </section>
    </VisibilitySensor>
  );
}

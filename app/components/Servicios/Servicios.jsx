import React, { useEffect } from "react";

import style from "./Servicios.module.css";
import useObserver from "@/app/hooks/useObserver";
import { useLanguage } from "@/app/context/LanguajeContext";

export default function Servicios() {
  const { text } = useLanguage();
  const [sectionRef, entries] = useObserver({
    threshold: 0.25,
  });

  const isIntersecting = entries[0]?.isIntersecting;

  return (
    <section id="services" className={style.servicios} ref={sectionRef}>
      <div className={style.container}>
        <h1>{text.services.title}</h1>
        <div
          className={
            isIntersecting ? style.servicios_lista : style.serviciosOff
          }
        >
          <div className={style.section_servicios}>
            <i className="fa-solid fa-code"></i>
            <h2>{text.services.webDesign.title}</h2>
            <p>{text.services.webDesign.description}</p>
          </div>
          <div className={style.section_servicios}>
            <i className="fa-solid fa-crop"></i>
            <h2>{text.services.uiuxDesing.title}</h2>
            <p>{text.services.uiuxDesing.description}</p>
          </div>
          <div className={style.section_servicios}>
            <i className="fa-brands fa-app-store"></i>
            <h2>{text.services.appDesing.title}</h2>
            <p>{text.services.appDesing.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

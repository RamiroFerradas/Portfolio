import React, { useEffect } from "react";
import useLanguaje from "../../Hooks/useLanguaje";
import useObserver from "../../Hooks/useObserver";
import style from "./Servicios.module.css";

export default function Servicios({ servicios }) {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });
  const { text } = useLanguaje();

  useEffect(() => {
    const res = document.querySelectorAll(`.${style.servicios}`);
    setElements(res);
  }, [setElements]);

  // useEffect(() => {
  //   if (entries[0]?.isIntersecting)
  //     entries?.target.classList.add(style.servicios_lista);
  // }, [entries]);
  const intersecting = entries[0]?.isIntersecting;

  return (
    <div className={style.servicios} ref={servicios}>
      <div className={style.container}>
        <h1>{text.services.title}</h1>

        <div
          className={intersecting ? style.servicios_lista : style.serviciosOff}
        >
          <div className={style.section_servicios}>
            <i className="fa-solid fa-code"></i>
            <h2>{text.services.webDesing.title}</h2>
            <p>{text.services.webDesing.description}</p>
          </div>
          <div className={style.section_servicios}>
            <i className="fa-solid fa-crop"></i>
            <h2>{text.services.uiuxDesing.title}</h2>
            <p>{text.services.webDesing.description}</p>
          </div>
          <div className={style.section_servicios}>
            <i className="fa-brands fa-app-store"></i>
            <h2>{text.services.appDesing.title}</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

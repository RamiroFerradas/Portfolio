import React, { useRef, useState } from "react";
import style from "./About.module.css";
import yoImg from "../../Assets/img/byn/ramiro.jpg";
import pdf from "../../Assets/cv/cv.pdf";
import { useEffect } from "react";
import { useIntersection } from "use-intersection";
import useObserver from "../../Hooks/useObserver";

export default function About({ viewAbout, about }) {
  const [viewButton, setViewButton] = useState(false);

  const root = useRef(null);
  const target = useRef(null);

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    const res = document.querySelectorAll(`.${style.about}`);
    setElements(res);
  }, [about, setElements]);
  console.log(entries, "observer");

  const intersecting = entries[0]?.isIntersecting;

  setTimeout(() => {
    if (viewAbout) {
      setViewButton(true);
    } else {
      setViewButton(false);
    }
  }, 1000);
  return (
    <div className={style.about} ref={target}>
      <div className={style.main}>
        {intersecting && (
          <div className={style.image_wrapper}>
            <img src={yoImg} alt="ramiro" className="imagen" />
            <img src={yoImg} alt="ramiro" className={style.image2} />
            <img src={yoImg} alt="ramiro" className={style.image3} />
            <img src={yoImg} alt="ramiro" className={style.image4} />
          </div>
        )}
        {intersecting && (
          <div className={style.aboutText}>
            <h2>Sobre mi</h2>

            <h5>
              Desarrollador <span className={style.spanLogo}>Full Stack</span>
            </h5>
            <p>
              Soy desarrollador web Full Stack con preferencia en el front-end.
              Puedo proporcionar un código limpio y un diseño perfecto de
              píxeles. También hago que el sitio web sea cada vez más
              interactivo con animaciones web. Un diseño responsivo hace que su
              sitio web sea accesible para todos los usuarios,
              independientemente de su dispositivo.
            </p>
          </div>
        )}
        <button className={viewButton ? style.buttonCV : style.buttonCVOff}>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Ramiro_Ferradas.pdf"
          >
            Descargar CV
          </a>
        </button>
      </div>
      {/* </AnimationOnScroll> */}
    </div>
  );
}

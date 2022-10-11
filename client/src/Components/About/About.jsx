import React, { useState } from "react";
import style from "./About.module.css";
import yoImg from "../../Assets/img/byn/ramiro.jpg";
import pdf from "../../Assets/cv/cv.pdf";
import { useEffect } from "react";

export default function About({ about, viewAbout }) {
  const [viewButton, setViewButton] = useState(false);
  useEffect(() => {}, [viewAbout]);

  setTimeout(() => {
    if (viewAbout) {
      setViewButton(true);
    } else {
      setViewButton(false);
    }
  }, 1000);
  return (
    <section ref={about} className={style.about}>
      <div className={style.main}>
        <div className={style.image_wrapper}>
          <img src={yoImg} alt="ramiro" className={style.image1} />
          <img src={yoImg} alt="ramiro" className={style.image2} />
          <img src={yoImg} alt="ramiro" className={style.image3} />
          <img src={yoImg} alt="ramiro" className={style.image4} />
        </div>
        <div className={style.aboutText}>
          <h2>Sobre mi</h2>
          <h5>
            Desarrollador <span className={style.spanLogo}>Full Stack</span>
          </h5>
          <p>
            Soy desarrollador web Full Stack con preferencia en el front-end.
            Puedo proporcionar un código limpio y un diseño perfecto de píxeles.
            También hago que el sitio web sea cada vez más interactivo con
            animaciones web. También hago que el sitio web sea cada vez más
            interactivo con animaciones web. Un diseño responsivo hace que su
            sitio web sea accesible para todos los usuarios, independientemente
            de su dispositivo.
          </p>
        </div>
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
    </section>
  );
}

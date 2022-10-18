import { React, useState } from "react";
import style from "./About.module.css";
import yoImg from "../../Assets/img/byn/ramiro.jpg";
import pdf from "../../Assets/cv/cv.pdf";
import { useEffect } from "react";
import useObserver from "../../Hooks/useObserver";
import useLanguaje from "../../Hooks/useLanguaje";

export default function About({ viewAbout, about }) {
  const { text } = useLanguaje();
  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    const res = document.querySelectorAll(`.${style.about}`);
    setElements(res);
  }, [setElements]);

  const intersecting = entries[0]?.isIntersecting;

  return (
    <section id="about" className={style.about} ref={about}>
      <div className={style.main}>
        <div className={intersecting ? style.image_wrapper : undefined}>
          <img src={yoImg} alt="ramiro" className={style.image1} />
          <img src={yoImg} alt="ramiro" className={style.image2} />
          <img src={yoImg} alt="ramiro" className={style.image3} />
          <img src={yoImg} alt="ramiro" className={style.image4} />
        </div>

        <div className={intersecting ? style.aboutText : undefined}>
          <h2>{text.about.title}</h2>

          <h5>
            {text.about.subtitle}
            <span className={style.spanLogo}> Full Stack</span>
          </h5>
          <p>{text.about.description}</p>
        </div>

        <button className={intersecting ? style.buttonCV : undefined}>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Ramiro_Ferradas.pdf"
          >
            {text.about.download}
          </a>
        </button>
      </div>
    </section>
  );
}

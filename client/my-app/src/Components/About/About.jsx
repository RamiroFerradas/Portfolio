import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <section className={style.about}>
      <div className={style.main}>
        <div className={style.aboutText}>
          <h2>About Me</h2>
          <h5>
            Desarrollador <span className={style.spanLogo}>Full Stack</span>
          </h5>
          <p>
            Soy un desarrollador web Full Stack con preferencia en el front-end.
            Puedo proporcionar un código limpio y un diseño perfecto de píxeles.
            También hago que el sitio web sea cada vez más interactivo con
            animaciones web. También hago que el sitio web sea cada vez más
            interactivo con animaciones web. Un diseño responsivo hace que su
            sitio web sea accesible para todos los usuarios, independientemente
            de su dispositivo.
          </p>
        </div>
      </div>
    </section>
  );
}

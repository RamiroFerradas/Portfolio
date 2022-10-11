import React, { useEffect, useRef, useState } from "react";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import style from "./Home.module.css";

export default function Home() {
  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
    console.log("holis");
  };

  const about = useRef(null);
  const inicio = useRef(null);
  const [viewAbout, setViewAbout] = useState(false);

  return (
    <body className={style.body}>
      <div className={style.divNavbar}>
        <NavBar
          setViewAbout={setViewAbout}
          viewAbout={viewAbout}
          scrollToSeccion={scrollToSeccion}
          about={about}
          inicio={inicio}
        />
      </div>
      <div ref={inicio} className={style.contenedor}>
        <div className={style.content}>
          <h4>Hola, mi nombre es</h4>
          <h1>Ramiro Ferradas</h1>
          <h3>Soy desarrollador web.</h3>
          <div className={style.form_email}>
            <form action="">
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Ingrese su Email"
              />
              <input type="submit" name="submit" value="Empezemos" />
            </form>
          </div>
        </div>
      </div>
      <div className={viewAbout ? style.aboOn : style.aboOff}>
        <About viewAbout={viewAbout} about={about} />
      </div>
    </body>
  );
}

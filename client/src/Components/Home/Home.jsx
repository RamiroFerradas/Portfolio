import { React, useRef } from "react";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import style from "./Home.module.css";
import Servicios from "../Servicios/Servicios";
import Trabajos from "../Trabajos/Trabajos";
import Contacto from "../Contacto/Contacto";

export default function Home() {
  const about = useRef();
  const servicios = useRef();
  const inicio = useRef();
  const trabajos = useRef();
  const contacto = useRef();

  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.body}>
      <div className={style.divNavbar}>
        <NavBar
          scrollToSeccion={scrollToSeccion}
          about={about}
          inicio={inicio}
          servicios={servicios}
          trabajos={trabajos}
          contacto={contacto}
        />
      </div>
      <div>
        <div className={style.contenedor} ref={inicio}>
          <div className={style.content}>
            <h4>Hola, mi nombre es</h4>
            <h1>Ramiro Ferradas</h1>
            <h3>Soy desarrollador web.</h3>
          </div>
        </div>
      </div>
      <About about={about} />
      <Servicios servicios={servicios} />
      <Trabajos trabajos={trabajos} />
      <Contacto contacto={contacto} />
    </div>
  );
}

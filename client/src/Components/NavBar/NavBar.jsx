import React, { useEffect, useRef, useState } from "react";
import style from "./NavBar.module.css";
import { useIntersection } from "use-intersection";

export default function NavBar({ scrollToSeccion, about, inicio }) {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle(style.sticky, window.scrollY > 0);
    });
  }, []);

  const values = [
    { id: 1, text: "Inicio", ref: inicio },
    { id: 2, text: "Sobre mi", ref: about },
    { id: 3, text: "Servicios" },
    { id: 4, text: "Habilidades" },
    { id: 5, text: "Contacto" },
  ];
  const [activeId, setActiveId] = useState();

  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <h2 className={style.logo}>
          Portfo<span className={style.spanLogo}>lio</span>
        </h2>
        <div className={style.menu}>
          <ul>
            {values.map((e) => {
              return (
                <li
                  disa
                  className={activeId === e.id ? style.linkActive : style.link}
                  onClick={() => {
                    setActiveId(e.id);
                    scrollToSeccion(e.ref);
                  }}
                >
                  {e.text}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

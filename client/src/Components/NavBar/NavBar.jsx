import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function NavBar({
  scrollToSeccion,
  about,
  inicio,
  servicios,
  trabajos,
  contacto,
}) {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle(style.sticky, window.scrollY > 0);
    });
  }, []);

  const values = [
    { id: 1, text: "Inicio", ref: inicio },
    { id: 2, text: "Sobre mi", ref: about },
    { id: 3, text: "Servicios", ref: servicios },
    { id: 4, text: "Trabajos", ref: trabajos },
    { id: 5, text: "Contacto", ref: contacto },
  ];
  const [activeId, setActiveId] = useState(1);
  const [activeIdCache, setActiveIdCache] = useLocalStorage({
    id: (`id`, activeId),
  });

  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <h2
          className={style.logo}
          onClick={() => {
            window.scrollTo(0, 0);
            setActiveId(1);
            setActiveIdCache(1);
          }}
        >
          Portfo<span className={style.spanLogo}>lio</span>
        </h2>
        <div className={style.menu}>
          <ul>
            {values.map((e) => {
              return (
                <li
                  key={e.id}
                  className={
                    activeIdCache === e.id ? style.linkActive : style.link
                  }
                  onClick={() => {
                    setActiveId(e.id);
                    setActiveIdCache(e.id);
                    scrollToSeccion(e.ref);
                  }}
                >
                  <span>{e.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

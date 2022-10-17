import { React, useContext, useEffect, useRef, useState } from "react";
import style from "./NavBar.module.css";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import LanguajeContext from "../../Context/LanguajeContext";
import useLanguaje from "../../Hooks/useLanguaje";
import eng from "../../Assets/icons/eng.png";
export default function NavBar({
  // scrollToSeccion,
  about,
  inicio,
  servicios,
  trabajos,
  contacto,
}) {
  const eng = useRef(null);
  const esp = useRef(null);
  const { text, handleLanguage } = useLanguaje();
  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle(style.sticky, window.scrollY > 0);
    });
  }, []);

  const values = [
    { id: 1, text: `${text.navBar.inicio}`, ref: inicio },
    { id: 2, text: `${text.navBar.Sobre_mi}`, ref: about },
    { id: 3, text: `${text.navBar.Servicios}`, ref: servicios },
    { id: 4, text: `${text.navBar.Trabajos}`, ref: trabajos },
    { id: 5, text: `${text.navBar.Contacto}`, ref: contacto },
  ];
  const [activeIdCache, setActiveIdCache] = useLocalStorage(`id`, "1");
  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <h2
          className={style.logo}
          onClick={() => {
            window.scrollTo(0, 0);
            setActiveIdCache(1);
          }}
        >
          Portfo<span className={style.spanLogo}>lio</span>
        </h2>

        <div className={style.menu}>
          <ul className={openMenu && style.openSidebar}>
            {values.map((e) => {
              return (
                <li
                  key={e.id}
                  className={
                    activeIdCache === e.id ? style.linkActive : style.link
                  }
                  onClick={() => {
                    setActiveIdCache(e.id);
                    scrollToSeccion(e.ref);
                  }}
                >
                  <span>{e.text}</span>
                </li>
              );
            })}

            <i
              className={`fas fa-times ${style.icon}`}
              onClick={() => setOpenMenu(!openMenu)}
            ></i>
            <div className={style.flagsContainer}>
              <button
                value="esp"
                onClick={(e) => {
                  handleLanguage("esp");
                  esp.current.classList.add(style.selected);
                  eng.current.classList.remove(style.selected);
                }}
              >
                <img
                  ref={esp}
                  className={style.flagImg}
                  src="https://flagcdn.com/es.svg"
                  alt="Spanish"
                />
              </button>
              <button
                value="eng"
                onClick={(e) => {
                  handleLanguage("eng");
                  esp.current.classList.remove(style.selected);
                  eng.current.classList.add(style.selected);
                }}
              >
                <img
                  ref={eng}
                  className={style.flagImg}
                  src="https://flagcdn.com/us.svg"
                  alt="English"
                />
              </button>
            </div>
          </ul>

          <i
            onClick={() => setOpenMenu(!openMenu)}
            className={`fas fa-bars ${style.icon}`}
          ></i>
        </div>
      </nav>
    </header>
  );
}

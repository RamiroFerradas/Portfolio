import { React, useContext, useEffect, useState } from "react";
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
          <ul className={openMenu && style.openSidebar}>
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

            <i
              className={`fas fa-times ${style.icon}`}
              onClick={() => setOpenMenu(!openMenu)}
            ></i>
          </ul>

          <i
            onClick={() => setOpenMenu(!openMenu)}
            className={`fas fa-bars ${style.icon}`}
          ></i>
          <div className={style.flagsContainer}>
            <button value="esp" onClick={(e) => handleLanguage("esp")}>
              <img
                className={style.flagImg}
                src="https://flagcdn.com/es.svg"
                alt="Spanish"
              />
            </button>
            <button value="eng" onClick={(e) => handleLanguage("eng")}>
              <img
                className={style.flagImg}
                src="https://flagcdn.com/us.svg"
                alt="English"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

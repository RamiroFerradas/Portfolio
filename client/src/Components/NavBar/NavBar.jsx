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
  const link = useRef(null);
  const ul = useRef(null);
  const { text, handleLanguage, languaje } = useLanguaje();
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
    window.addEventListener("scroll", handleScroll);
    // openMenu && ul.current.classList.add(style.openSidebar);
  }, []);

  const [sectionActive, setsectionActive] = useState("home");

  const handleScroll = () => {
    let current = "";
    const section = document.querySelectorAll(`section`);
    section.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
        setsectionActive(current);
        // console.log("estas en", current);
      }
    });
  };

  const values = [
    {
      id: 1,
      active: "home",
      text: `${text.navBar.inicio}`,
      scrollTo: inicio,
      ref: link,
    },
    {
      id: 2,
      active: "about",
      text: `${text.navBar.Sobre_mi}`,
      scrollTo: about,
      ref: link,
    },
    {
      id: 3,
      active: "services",
      text: `${text.navBar.Servicios}`,
      ref: link,
      scrollTo: servicios,
    },
    {
      id: 4,
      active: "works",
      text: `${text.navBar.Trabajos}`,
      ref: link,
      scrollTo: trabajos,
    },
    {
      id: 5,
      active: "contact",
      ref: link,
      text: `${text.navBar.Contacto}`,
      scrollTo: contacto,
    },
  ];

  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <h2
          className={style.logo}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Portfo<span className={style.spanLogo}>lio</span>
        </h2>

        <div className={style.menu}>
          <ul ref={ul}>
            {values.map((e) => {
              return (
                <li
                  key={e.id}
                  className={
                    e?.active === sectionActive ? style.active : style.link
                  }
                  onClick={() => {
                    scrollToSeccion(e.scrollTo);
                  }}
                  ref={e.ref}
                >
                  <span>{e.text}</span>
                </li>
              );
            })}

            <i
              className={`fas fa-times ${style.icon}`}
              onClick={() => ul.current.classList.remove(style.openSidebar)}
            ></i>
            <div className={style.flagsContainer}>
              <button value="esp" onClick={(e) => handleLanguage("esp")}>
                <img
                  ref={esp}
                  className={
                    languaje === "esp" ? style.selected : style.flagImg
                  }
                  src="https://flagcdn.com/es.svg"
                  alt="Spanish"
                />
              </button>
              <button value="eng" onClick={(e) => handleLanguage("eng")}>
                <img
                  ref={eng}
                  className={
                    languaje === "eng" ? style.selected : style.flagImg
                  }
                  src="https://flagcdn.com/us.svg"
                  alt="English"
                />
              </button>
            </div>
          </ul>

          <i
            onClick={() => ul.current.classList.add(style.openSidebar)}
            className={`fas fa-bars ${style.icon}`}
          ></i>
        </div>
      </nav>
    </header>
  );
}

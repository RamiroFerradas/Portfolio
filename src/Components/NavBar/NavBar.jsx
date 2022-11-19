import { React, useEffect, useRef, useState } from "react";
import style from "./NavBar.module.css";
import useLanguaje from "../../Hooks/useLanguaje";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { useCallback } from "react";

export default function NavBar({
  closeMenu,
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
  const { text, handleLanguage, languaje, check } = useLanguaje();
  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [sectionActive, setsectionActive] = useLocalStorage("section", "home");

  const handleScroll = useCallback(() => {
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
  }, [setsectionActive]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle(style.sticky, window.scrollY > 0);
    });
    closeMenu && ul.current.classList.remove(style.openSidebar);
    window.addEventListener("scroll", handleScroll);
  }, [closeMenu, handleScroll]);

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
              <div className={style.switch}>
                <input
                  onChange={(e) => handleLanguage(e)}
                  id="language-toggle"
                  className={`${style.check_toggle} ${style.check_toggle_round_flat}`}
                  type="checkbox"
                  defaultChecked={check}
                ></input>
                <label htmlFor="language-toggle"></label>
                <span className={style.on}>
                  <img
                    ref={esp}
                    className={style.flagImg}
                    src="https://flagcdn.com/es.svg"
                    alt="Spanish"
                  />
                </span>
                <span className={style.off}>
                  <div className={style.imgDiv}>
                    <img
                      ref={eng}
                      className={style.flagImg}
                      src="https://flagcdn.com/us.svg"
                      alt="English"
                    />
                  </div>
                </span>
              </div>
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

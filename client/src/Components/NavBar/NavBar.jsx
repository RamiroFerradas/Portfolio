import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar({
  scrollToSeccion,
  about,
  viewAbout,
  setViewAbout,
  inicio,
}) {
  // const scrollStiky = () => {
  //   window.addEventListener("scroll", function () {
  //     var header = document.querySelector("header");
  //     header.classList.toggle("sticky", window.scrollY);
  //   });
  // };
  // scrollStiky();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle(style.sticky, window.scrollY > 0);
    });
  }, []);

  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <h2 className={style.logo}>
          Portfo<span className={style.spanLogo}>lio</span>
        </h2>
        <div className={style.menu}>
          <ul>
            <NavLink
              onClick={() => {
                scrollToSeccion(inicio);
                setViewAbout(!viewAbout);
              }}
              to="/"
              className={({ isActive }) =>
                isActive ? style.link : style.linkOff
              }
              // onClick={() => scrollToSeccion(about)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.link : style.linkOff
              }
              onClick={() => {
                setViewAbout(!viewAbout);
                setTimeout(() => {
                  scrollToSeccion(about);
                }, 100);
              }}
            >
              Sobre mi
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link : style.linkOff
              }
            >
              Servicios
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link : style.linkOff
              }
            >
              Habilidades
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link : style.linkOff
              }
            >
              Contacto
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

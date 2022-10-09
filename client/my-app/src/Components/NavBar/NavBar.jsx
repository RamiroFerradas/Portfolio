import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.container}>
      <nav className={style.navBar}>
        <h2 className={style.logo}>
          Portfo<span className={style.spanLogo}>lio</span>
        </h2>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.link : style.linkOff
            }
          >
            Inicio
          </NavLink>
          <NavLink to="/about" className={style.link}>
            Sobre mi
          </NavLink>
          <NavLink className={style.link}>Servicios</NavLink>
          <NavLink className={style.link}>Habilidades</NavLink>
          <NavLink className={style.link}>Contacto</NavLink>
        </div>

        <h1>Ingresar</h1>
      </nav>
    </div>
  );
}

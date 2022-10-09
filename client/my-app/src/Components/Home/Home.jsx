import React from "react";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import style from "./Home.module.css";

export default function Home() {
  return (
    <body className={style.body}>
      <NavBar />
      <div className={style.contenedor}>
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
      <About />
    </body>
  );
}

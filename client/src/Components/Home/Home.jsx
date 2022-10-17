import { React, useContext } from "react";
import useLanguaje from "../../Hooks/useLanguaje";
import style from "./Home.module.css";

export default function Home({ inicio }) {
  const { text } = useLanguaje();

  return (
    <section id="home" className={style.contenedor} ref={inicio}>
      <div className={style.content}>
        <h4>{text.home.homeText1}</h4>
        <h1>Ramiro Ferradas</h1>
        <h3>{text.home.homeText2}.</h3>
      </div>
    </section>
  );
}

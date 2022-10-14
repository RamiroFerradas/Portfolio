import { React } from "react";
import style from "./Home.module.css";

export default function Home({ inicio }) {
  return (
    <div className={style.contenedor} ref={inicio}>
      <div className={style.content}>
        <h4>Hola, mi nombre es</h4>
        <h1>Ramiro Ferradas</h1>
        <h3>Soy desarrollador web.</h3>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import style from "./Trabajos.module.css";
import pokemon from "../../Assets/trabajos/Captura de pantalla 2022-10-12 190024.png";
import countries from "../../Assets/trabajos/countries.png";
import programax from "../../Assets/trabajos/programax.png";
import videogames from "../../Assets/trabajos/videogames.png";
import useObserver from "../../Hooks/useObserver";
import useLanguaje from "../../Hooks/useLanguaje";

export default function Trabajos({ trabajos }) {
  const { text } = useLanguaje();
  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null,
  });
  console.log(entries);
  useEffect(() => {
    const res = document.querySelectorAll(`.${style.container}`);
    setElements(res);
  }, [setElements]);
  const intersecting = entries[0]?.isIntersecting;

  return (
    <div className={style.portfolio} ref={trabajos}>
      <div className={style.container}>
        <h1>{text.work.title}</h1>
        <div
          className={intersecting ? style.trabajos_lista : style.trabajosOff}
        >
          <div className={style.trabajo}>
            <img
              src={programax}
              className={style.imgTrabajos}
              alt="programax"
            />
            <div className={style.layer}>
              <h3>{text.work.programax.title}</h3>
              <p>{text.work.programax.description}</p>
              <a
                target="_blank"
                href="https://programax.vercel.app/"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className={style.trabajo}>
            <img
              src={countries}
              className={style.imgTrabajos}
              alt="countries"
            />
            <div className={style.layer}>
              <h3>{text.work.countries.title}</h3>
              <p>{text.work.countries.description}</p>
              <a
                target="_blank"
                href="https://countriesapp-phi.vercel.app/"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className={style.trabajo}>
            <img src={pokemon} alt="pokemon" className={style.imgTrabajos} />
            <div className={style.layer}>
              <h3>Poke App</h3>
              <p>
                Esta página es un Proyecto Individual para el bootcamp de
                SoyHenry. Aquí puede encontrar información sobre los diferentes
                Pokemon y sus caracteristicas.
              </p>
              <a
                target="_blank"
                href="https://pi-pokemon-2.vercel.app/"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className={style.trabajo}>
            <img
              src={videogames}
              alt="videogames"
              className={style.imgTrabajos}
            />
            <div className={style.layer}>
              <h3>Videogames App</h3>
              <p>
                Esta página es un Proyecto Individual para el bootcamp de
                SoyHenry. Se trata de una SPA(single Page Aplication) donde
                puede encontrar información sobre diferentes videojuegos, de
                multiples plataformas y sus caracteristicas.
              </p>
              <a
                target="_blank"
                href="https://videogamesapp-nine.vercel.app"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

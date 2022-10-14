import React, { useEffect } from "react";
import style from "./Trabajos.module.css";
import pokemon from "../../Assets/trabajos/Captura de pantalla 2022-10-12 190024.png";
import countries from "../../Assets/trabajos/countries.png";
import programax from "../../Assets/trabajos/programax.png";
import videogames from "../../Assets/trabajos/videogames.png";
import useObserver from "../../Hooks/useObserver";

export default function Trabajos({ trabajos }) {
  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null,
  });

  useEffect(() => {
    const res = document.querySelectorAll(`.${style.portfolio}`);
    setElements(res);
  }, [setElements]);
  const intersecting = entries[0]?.isIntersecting;
  console.log(intersecting);

  return (
    <div className={style.portfolio} ref={trabajos}>
      <div className={style.container}>
        <h1>Trabajos realizados</h1>
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
              <h3>Programax</h3>
              <p>
                En Programax, podrás postularte y encontrar a los
                desarrolladores que cubran tus necesidades... ¡Al alcance de un
                click! Contacta al desarrollador ideal, hazle una oferta, y paga
                por su trabajo de manera segura y sin costo adicional... ¡Y todo
                en un solo sitio!
              </p>
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
              <h3>Countreies App</h3>
              <p>
                Esta página es un Proyecto Individual para el bootcamp de
                SoyHenry. Aquí puede encontrar información sobre todos los
                países del mundo, como la población, las actividades turísticas
                que puede realizar allí.
              </p>
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

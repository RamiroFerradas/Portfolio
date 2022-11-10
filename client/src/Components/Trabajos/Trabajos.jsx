import React, { useLayoutEffect } from "react";
import style from "./Trabajos.module.css";
import pokemon from "../../Assets/trabajos/Captura de pantalla 2022-10-12 190024.png";
import countries from "../../Assets/trabajos/countries.png";
import programax from "../../Assets/trabajos/programax.png";
import videogames from "../../Assets/trabajos/videogames.png";
import bikeTraining from "../../Assets/trabajos/bikeTraining.png";
import StarWars from "../../Assets/trabajos/StartWars.png";
import useObserver from "../../Hooks/useObserver";
import useLanguaje from "../../Hooks/useLanguaje";
import FieldTrabajo from "./Field/FieldTrabajo";

export default function Trabajos({ trabajos }) {
  const { text } = useLanguaje();
  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null,
  });
  useLayoutEffect(() => {
    const res = document.querySelectorAll(`.${style.portfolio}`);
    setElements(res);
  }, [setElements]);
  const intersecting = entries[0]?.isIntersecting;

  return (
    <section id="works">
      <div className={style.portfolio} ref={trabajos}>
        <div className={style.container}>
          <h1>{text.work.title}</h1>
          <div
            className={intersecting ? style.trabajos_lista : style.trabajosOff}
          >
            <FieldTrabajo
              img={programax}
              title={text.work.programax.title}
              description={text.work.programax.description}
              link={"https://programax.vercel.app/"}
              github={"https://github.com/FranNavarro27F/Proyecto_Final"}
            />

            <FieldTrabajo
              img={countries}
              title={text.work.countries.title}
              description={text.work.countries.description}
              link={"https://countriesapp-phi.vercel.app/"}
              github={"https://github.com/RamiroFerradas/PI-COUNTRIES"}
            />

            <FieldTrabajo
              img={pokemon}
              title={text.work.pokemon.title}
              description={text.work.pokemon.description}
              link={"https://pi-pokemon-2.vercel.app/"}
              github={"https://github.com/RamiroFerradas/POKE-APP"}
            />

            <FieldTrabajo
              img={videogames}
              title={text.work.videogames.title}
              description={text.work.videogames.description}
              link={"https://videogamesapp-nine.vercel.app"}
              github={"https://github.com/RamiroFerradas/VIDEOGAMES.git"}
            />

            <FieldTrabajo
              img={bikeTraining}
              title={text.work.bikeTraining.title}
              description={text.work.bikeTraining.description}
              link={"https://durandotraining.vercel.app/"}
              github={"https://github.com/RamiroFerradas/BIKE-TRAINING.git"}
            />

            <FieldTrabajo
              img={StarWars}
              title={text.work.starwars.title}
              description={text.work.starwars.description}
              link={"https://technical-challenger-wannabe.vercel.app/"}
              github={
                "https://github.com/RamiroFerradas/Technical-Challenger-Wannabe"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

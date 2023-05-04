import React, { useEffect } from "react";
import style from "./Trabajos.module.css";
import FieldTrabajo from "./Field/FieldTrabajo";
import useLanguaje from "../../Hooks/useLanguaje";
import useObserver from "../../Hooks/useObserver";

//imagenes
import pokemon from "../../Assets/trabajos/Captura de pantalla 2022-10-12 190024.png";
import countries from "../../Assets/trabajos/countries.png";
import programax from "../../Assets/trabajos/programax.png";
import videogames from "../../Assets/trabajos/videogames.png";
import bikeTraining from "../../Assets/trabajos/bikeTraining.png";
import StarWars from "../../Assets/trabajos/StartWars.png";
import jotaTe from "../../Assets/trabajos/jotaTe.png";
import ATC from "../../Assets/trabajos/atc.jpg";
import StoryDots from "../../Assets/trabajos/ecommerce_storydots.jpg";

export default function Trabajos({ trabajos }) {
  const { text } = useLanguaje();

  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null,
  });
  useEffect(() => {
    const res = document.querySelectorAll(`.${style.portfolio}`);
    setElements(res);
  }, [setElements]);

  const intersecting = entries[0]?.isIntersecting;
  const trabajosList = [
    {
      img: StoryDots,
      title: text.work.StoryDots.title,
      description: text.work.StoryDots.description,
      link: "https://ecommerce-storydots.vercel.app/",
      github: "https://github.com/RamiroFerradas/Ecommerce.git",
    },
    {
      img: jotaTe,
      title: text.work.jotaTe.title,
      description: text.work.jotaTe.description,
      link: "https://jotate-climatizacion.vercel.app/",
      github: "https://github.com/RamiroFerradas/JotaTe-Climatizacion",
    },
    {
      img: ATC,
      title: text.work.atc.title,
      description: text.work.atc.description,
      link: "https://alquilatucancha.vercel.app/",
      github: "https://github.com/RamiroFerradas/Alquila-Tu-Cancha.git",
    },
    {
      img: StarWars,
      title: text.work.starwars.title,
      description: text.work.starwars.description,
      link: "https://technical-challenger-wannabe.vercel.app/",
      github: "https://github.com/RamiroFerradas/Technical-Challenger-Wannabe",
    },
    {
      img: programax,
      title: text.work.programax.title,
      description: text.work.programax.description,
      link: "https://programax.vercel.app/",
      github: "https://github.com/FranNavarro27F/Proyecto_Final",
    },
    {
      img: countries,
      title: text.work.countries.title,
      description: text.work.countries.description,
      link: "https://countriesapp-phi.vercel.app/",
      github: "https://github.com/RamiroFerradas/PI-COUNTRIES",
    },
    {
      img: pokemon,
      title: text.work.pokemon.title,
      description: text.work.pokemon.description,
      link: "https://pi-pokemon-2.vercel.app/",
      github: "https://github.com/RamiroFerradas/POKE-APP",
    },
    {
      img: videogames,
      title: text.work.videogames.title,
      description: text.work.videogames.description,
      link: "https://videogamesapp-nine.vercel.app",
      github: "https://github.com/RamiroFerradas/VIDEOGAMES.git",
    },
    {
      img: bikeTraining,
      title: text.work.bikeTraining.title,
      description: text.work.bikeTraining.description,
      link: "https://durandotraining.vercel.app/",
      github: "https://github.com/RamiroFerradas/BIKE-TRAINING.git",
    },
  ];
  return (
    <section id="works">
      <div className={style.portfolio} ref={trabajos}>
        <div className={style.container}>
          <h1>{text.work.title}</h1>
          <div
            className={intersecting ? style.trabajos_lista : style.trabajosOff}
          >
            {trabajosList?.map((e) => {
              return (
                <FieldTrabajo
                  img={e.img}
                  title={e.title}
                  description={e.description}
                  link={e.link}
                  github={e.github}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

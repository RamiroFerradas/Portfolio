import countries from "../../../public/trabajos/countries.png";
import programax from "../../../public/trabajos/programax.png";
import videogames from "../../../public/trabajos/videogames.png";
import bikeTraining from "../../../public/trabajos/bikeTraining.png";
import StarWars from "../../../public/trabajos/StartWars.png";
import jotaTe from "../../../public/trabajos/jotaTe.png";
import ATC from "../../../public/trabajos/atc.jpg";
import StoryDots from "../../../public/trabajos/ecommerce_storydots.jpg";
import Dolars from "../../../public/trabajos/dolars.png";

export const worksList = (text) => [
  {
    img: Dolars,
    title: text.work.Dolars.title,
    description: text.work.Dolars.description,
    link: "https://dolars.vercel.app/",
    github: "https://github.com/RamiroFerradas/Dolars",
  },
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
  // {
  //   img: pokemon,
  //   title: text.work.pokemon.title,
  //   description: text.work.pokemon.description,
  //   link: "https://pi-pokemon-2.vercel.app/",
  //   github: "https://github.com/RamiroFerradas/POKE-APP",
  // },
  // {
  //   img: videogames,
  //   title: text.work.videogames.title,
  //   description: text.work.videogames.description,
  //   link: "https://videogamesapp-nine.vercel.app",
  //   github: "https://github.com/RamiroFerradas/VIDEOGAMES.git",
  // },
  // {
  //   img: bikeTraining,
  //   title: text.work.bikeTraining.title,
  //   description: text.work.bikeTraining.description,
  //   link: "https://durandotraining.vercel.app/",
  //   github: "https://github.com/RamiroFerradas/BIKE-TRAINING.git",
  // },
];

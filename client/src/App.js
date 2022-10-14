import { useRef } from "react";
import About from "./Components/About/About";
import Contacto from "./Components/Contacto/Contacto";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Servicios from "./Components/Servicios/Servicios";
import Trabajos from "./Components/Trabajos/Trabajos";
import style from "./App.module.css";
import LanguajeContext from "./Context/LanguajeContext";

function App() {
  const languaje = {};
  const trabajos = useRef();
  const contacto = useRef();
  const about = useRef();
  const servicios = useRef();
  const inicio = useRef();

  return (
    <div className={style.body}>
      <LanguajeContext.Provider value={languaje}>
        <NavBar
          about={about}
          inicio={inicio}
          servicios={servicios}
          trabajos={trabajos}
          contacto={contacto}
        />
        <Home inicio={inicio} />
        <About about={about} />
        <Servicios servicios={servicios} />
        <Trabajos trabajos={trabajos} />
        <Contacto contacto={contacto} />
      </LanguajeContext.Provider>
    </div>
  );
}

export default App;

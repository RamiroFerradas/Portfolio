import { useEffect, useRef, useState } from "react";
import About from "./Components/About/About";
import Contacto from "./Components/Contacto/Contacto";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Servicios from "./Components/Servicios/Servicios";
import Trabajos from "./Components/Trabajos/Trabajos";
import style from "./App.module.css";
import { LanguajeProvider } from "./Context/LanguajeContext";
import useObserver from "./Hooks/useObserver";

function App() {
  const trabajos = useRef();
  const contacto = useRef();
  const about = useRef();
  const servicios = useRef();
  const inicio = useRef();

  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <div
      className={style.app}
      onClick={() => {
        setCloseMenu(!closeMenu);
      }}
    >
      <LanguajeProvider>
        <NavBar
          closeMenu={closeMenu}
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
      </LanguajeProvider>
    </div>
  );
}

export default App;

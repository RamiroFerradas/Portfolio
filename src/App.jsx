import { useRef, useState, useEffect } from "react";
import About from "./Components/About/About";
import Contacto from "./Components/Contacto/Contacto";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Servicios from "./Components/Servicios/Servicios";
import Trabajos from "./Components/Trabajos/Trabajos";
import style from "./App.module.css";
import Chat from "./Components/Chat/Chat";

function App() {
  const trabajos = useRef();
  const contacto = useRef();
  const about = useRef();
  const servicios = useRef();
  const inicio = useRef();
  const app = useRef();

  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <div ref={app} className={style.app}>
      <NavBar
        closeMenu={closeMenu}
        about={about}
        inicio={inicio}
        servicios={servicios}
        trabajos={trabajos}
        contacto={contacto}
        setCloseMenu={setCloseMenu}
      />
      <section
        onClick={() => {
          setCloseMenu(true);
        }}
      >
        {/* <Chat /> */}
        <Home inicio={inicio} />
        <About about={about} />
        <Servicios servicios={servicios} />
        <Trabajos trabajos={trabajos} />
        <Contacto contacto={contacto} />
      </section>
    </div>
  );
}

export default App;

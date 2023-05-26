"use client";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Image from "next/image";
import appBg from "../public/images/background/fondito.jpg";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Servicios from "./components/Servicios/Servicios";
import Trabajos from "./components/Trabajos/Trabajos";
import Contacto from "./components/Contacto/Contacto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <main className="relative h-screen">
      <Image
        alt="background"
        src={appBg}
        className="fixed h-screen object-cover w-screen"
        priority
      />
      <NavBar closeMenu={closeMenu} setCloseMenu={setCloseMenu} />
      <Home />
      <About />
      <Servicios />
      <Trabajos />
      <Contacto />
      <footer className="bg-gray-800 py-6 text-white relative">
        <div className="container mx-auto flex justify-center">
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">
              ¡Gracias por visitar mi portfolio!
            </h2>
            <p className="mb-4">
              Si estás interesado en colaborar o tienes alguna pregunta, no
              dudes en contactarme.
            </p>

            <div className="mt-4 absolute right-2">
              <a
                href="https://github.com/RamiroFerradas/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f9004d]"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramiro-ferradas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f9004d]"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ramiro Ferradas. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

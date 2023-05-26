import NavBar from "./components/NavBar/NavBar";
import Image from "next/image";
import appBg from "../public/images/background/fondito.jpg";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Servicios from "./components/Servicios/Servicios";
import Trabajos from "./components/Trabajos/Trabajos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main className="relative h-screen">
      <Image
        alt="background"
        src={appBg}
        className="fixed h-screen object-cover w-screen"
        priority
      />
      <NavBar />
      <Home />
      <About />
      <Servicios />
      <Trabajos />
      <Contacto />
      <Footer />
    </main>
  );
}

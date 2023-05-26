import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Servicios from "./components/Servicios/Servicios";
import Trabajos from "./components/Trabajos/Trabajos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main className="relative h-screen">
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

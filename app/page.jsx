import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyServices from "./components/MyServices/MyServices";
import Works from "./components/Works/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main className="relative">
      <NavBar />
      <Home />
      <About />
      <MyServices />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}

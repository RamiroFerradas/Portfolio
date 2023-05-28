"use client";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyServices from "./components/MyServices/MyServices";
import Works from "./components/Works/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { useLanguage } from "./context/LanguajeContext";
import Loading from "./components/loading";

export default function App() {
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const { text } = useLanguage();

  return !text ? (
    <Loading />
  ) : (
    <main className="relative" onClick={() => setSideBarMenu(false)}>
      <NavBar setSideBarMenu={setSideBarMenu} sideBarMenu={sideBarMenu} />
      <Home />
      <About />
      <MyServices />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}

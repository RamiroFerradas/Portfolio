"use client";

import { useState } from "react";
import TagManager from "react-gtm-module";
import Navbar from "./components/NavBar/NavBar";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyServices from "./components/MyServices/MyServices";
import Works from "./components/Works/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./components/loading";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const [load, setload] = useState(true);
  setTimeout(() => {
    setload(false);
  }, 300);

  useEffect(() => {
    AOS.init();
    const tagManagerArgs = {
      gtmId: "GTM-M7TK9HN",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  const handleSectionVisibility = (isVisible, sectionName) => {
    if (isVisible) {
      setActiveSection(sectionName);
    }
  };
  return load ? (
    <Loading />
  ) : (
    <main
      className="relative"
      onClick={() => {
        setSideBarMenu(false);
        setIsChatOpen(false);
      }}
    >
      <Navbar
        setSideBarMenu={setSideBarMenu}
        sideBarMenu={sideBarMenu}
        activeSection={activeSection}
      />
      {/* <Chat setIsChatOpen={setIsChatOpen} isChatOpen={isChatOpen} handleSectionVisibility={handleSectionVisibility} /> */}
      <Home handleSectionVisibility={handleSectionVisibility} />
      <About handleSectionVisibility={handleSectionVisibility} />
      <MyServices handleSectionVisibility={handleSectionVisibility} />
      <Works handleSectionVisibility={handleSectionVisibility} />
      <Contact handleSectionVisibility={handleSectionVisibility} />
      <Footer />
    </main>
  );
}

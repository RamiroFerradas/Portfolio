"use client";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyServices from "./components/MyServices/MyServices";
import Works from "./components/Works/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Loading from "./components/loading";
import Chat from "./components/Chat/Chat";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function App() {
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [load, setload] = useState(true);
  setTimeout(() => {
    setload(false);
  }, 300);

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-M7TK9HN",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

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
      <NavBar setSideBarMenu={setSideBarMenu} sideBarMenu={sideBarMenu} />
      <Chat setIsChatOpen={setIsChatOpen} isChatOpen={isChatOpen} />
      <Home />
      <About />
      <MyServices />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}

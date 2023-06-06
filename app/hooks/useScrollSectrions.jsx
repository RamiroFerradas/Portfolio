import { useEffect, useRef, useState, useCallback } from "react";

const useScrollSections = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sectionActive, setSectionActive] = useState("home");
  const sectionRef = useRef([]);

  useEffect(() => {
    sectionRef.current = Array.from(document.querySelectorAll("section"));
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  const handleScrollSection = useCallback(() => {
    sectionRef.current.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.pageYOffset >= sectionTop) {
        setSectionActive(section.getAttribute("id"));
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSection);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScrollSection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, handleScrollSection]);

  return { scrolled, sectionActive };
};

export default useScrollSections;

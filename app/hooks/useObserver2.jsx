import { useEffect, useRef, useState } from "react";

const useObserver2 = (callback) => {
  const sectionRefs = useRef([]);
  const [sectionIntersected, setSectionIntersected] = useState([]);

  useEffect(() => {
    const handleIntersection = () => {
      const intersections = sectionRefs.current.map((sectionRef) => {
        const { top, bottom } = sectionRef.getBoundingClientRect();
        return top < window.innerHeight && bottom > 0;
      });
      setSectionIntersected(intersections);
    };

    const handleScroll = () => {
      window.requestAnimationFrame(handleIntersection);
    };

    handleIntersection(); // Comprobar intersecciones al montar el componente

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setSectionRef = (index) => (ref) => {
    sectionRefs.current[index] = ref;
  };

  return { setSectionRef, sectionIntersected };
};

export default useObserver2;

import { useRef, useState, useEffect } from "react";

export default function useObserver(options) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  // console.log(elements, "elements");
  console.log(entries, "entries");
  const observer = useRef(
    new IntersectionObserver(function (observedEntries) {
      setEntries(observedEntries);
    }, options)
  );

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element));
    }
    return function cleanUp() {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return [observer.current, setElements, entries];
}

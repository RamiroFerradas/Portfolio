import { useRef, useState, useEffect } from "react";

export default function useObserver(options) {
  const [entries, setEntries] = useState([]);
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const { current: element } = elementRef;

    if (element) {
      const observer = new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries);
      }, options);

      observer.observe(element);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [options]);

  const isIntersecting = entries[0]?.isIntersecting;

  return [elementRef, entries, isIntersecting];
}

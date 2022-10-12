import React, { useEffect } from "react";
import useObserver from "../../Hooks/useObserver";
import style from "./Servicios.module.css";

export default function Servicios({ servicios }) {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    const res = document.querySelectorAll(`.${style.servicios}`);
    setElements(res);
  }, [setElements]);

  console.log(entries[0]?.isIntersecting);
  // useEffect(() => {
  //   if (entries[0]?.isIntersecting)
  //     entries?.target.classList.add(style.servicios_lista);
  // }, [entries]);

  const intersecting = entries[0]?.isIntersecting;

  return (
    <div className={style.servicios} ref={servicios}>
      <div className={style.container}>
        <h1>Mis Servicios</h1>
        {intersecting && (
          <div className={style.servicios_lista}>
            <div className={style.section_servicios}>
              <i className="fa-solid fa-code"></i>
              <h2>Web Desing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ullam, aspernatur ratione necessitatibus perspiciatis
                accusantium voluptatibus laboriosam, officiis quae repudiandae
                iure error distinctio autem culpa dolorum ex totam officia
                optio.
              </p>
            </div>
            <div className={style.section_servicios}>
              <i className="fa-solid fa-crop"></i>
              <h2>UI/UX Desing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ullam, aspernatur ratione necessitatibus perspiciatis
                accusantium voluptatibus laboriosam, officiis quae repudiandae
                iure error distinctio autem culpa dolorum ex totam officia
                optio.
              </p>
            </div>
            <div className={style.section_servicios}>
              <i className="fa-brands fa-app-store"></i>
              <h2>App Desing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ullam, aspernatur ratione necessitatibus perspiciatis
                accusantium voluptatibus laboriosam, officiis quae repudiandae
                iure error distinctio autem culpa dolorum ex totam officia
                optio.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

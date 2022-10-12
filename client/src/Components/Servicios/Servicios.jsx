import React from "react";
import style from "./Servicios.module.css";

export default function Servicios({ servicios }) {
  return (
    <div className={style.servicios} ref={servicios}>
      <div className={style.container}>
        <h1>Mis Servicios</h1>
        <div className={style.servicios_lista}>
          <div className={style.section_servicios}>
            <i className="fa-solid fa-code"></i>
            <h2>Web Desing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ullam, aspernatur ratione necessitatibus perspiciatis accusantium
              voluptatibus laboriosam, officiis quae repudiandae iure error
              distinctio autem culpa dolorum ex totam officia optio.
            </p>
          </div>
          <div className={style.section_servicios}>
            <i className="fa-solid fa-crop"></i>
            <h2>UI/UX Desing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ullam, aspernatur ratione necessitatibus perspiciatis accusantium
              voluptatibus laboriosam, officiis quae repudiandae iure error
              distinctio autem culpa dolorum ex totam officia optio.
            </p>
          </div>
          <div className={style.section_servicios}>
            <i className="fa-brands fa-app-store"></i>
            <h2>App Desing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ullam, aspernatur ratione necessitatibus perspiciatis accusantium
              voluptatibus laboriosam, officiis quae repudiandae iure error
              distinctio autem culpa dolorum ex totam officia optio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

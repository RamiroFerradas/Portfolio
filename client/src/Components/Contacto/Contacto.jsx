import React from "react";
import style from "./Contacto.module.css";

export default function Contacto({ contacto }) {
  return (
    <div className={style.contact} ref={contacto}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.contacto_izquierda}>
            <h1 className={style.titulo}>Contactame</h1>
            <p>
              <i className="fas fa-paper-plane"></i> ramiferra97@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i> 3492528404
            </p>
            <div className={style.redes}>
              <a href="https://github.com/RamiroFerradas">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.linkedin.com/in/ramiro-ferradas/">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div>
            <form action="" className={style.contacto_derecha}>
              <input type="text" name="name" placeholder="Tu Nombre" required />
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                required
              />
              <textarea name="Mensaje" id="" rows="6">
                Tu Mensaje
              </textarea>
              <button className={`${style.btn} ${style.btn2}`} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

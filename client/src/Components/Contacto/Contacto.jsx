import React, { useRef, useState } from "react";
import style from "./Contacto.module.css";
import emailjs from "@emailjs/browser";

export default function Contacto({ contacto }) {
  const form = useRef();

  const [mensaje, setMensaje] = useState({ status: false, error: true });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ncuo59s",
        "template_4m0h4gc",
        form.current,
        "7qmg76jqvEUupvvNI"
      )
      .then(
        (result) => {
          console.log(result);
          setMensaje({ ...mensaje, status: true, error: false });
        },
        (error) => {
          setMensaje({ ...mensaje, status: true, error: true });
          console.log(error);
        }
      );
  };

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
              <a
                target="_blank"
                href="https://github.com/RamiroFerradas"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ramiro-ferradas/"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div>
            <form
              action=""
              className={style.contacto_derecha}
              onSubmit={sendEmail}
              ref={form}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Tu Nombre"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Tu Email"
                required
              />
              <textarea
                name="user_message"
                id=""
                rows="6"
                cols="30"
                placeholder="Tu mensaje..."
                required
              ></textarea>
              <button
                disabled={mensaje.status}
                className={`${style.btn} ${style.btn2}`}
                type="submit"
              >
                Enviar
              </button>
              {mensaje.status && !mensaje.error && (
                <span id="msg" className={style.send}>
                  Su mensaje ha sido enviado con exito !
                </span>
              )}
              {mensaje.status && mensaje.error && (
                <span id="msg" className={style.sendError}>
                  Su mensaje no se pudo enviar, vuelve a intentar por favor.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import style from "./Contacto.module.css";
import emailjs from "@emailjs/browser";

export default function Contacto({ contacto }) {
  const form = useRef();

  const [mensaje, setMensaje] = useState({
    status: false,
    error: true,
    text: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(form.current[1].value)) {
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
            setMensaje({
              ...mensaje,
              status: true,
              error: false,
              text: "Su mensaje ha sido enviado con exito",
            });
          },
          (error) => {
            setMensaje({
              ...mensaje,
              status: false,
              error: true,
              mensaje:
                "Su mensaje no se pudo enviar, vuelve a intentar por favor.",
            });
            console.log(error);
          }
        );
    } else {
      setMensaje({
        ...mensaje,
        status: false,
        error: true,
        text: "Escribe correctamente su direccionde mail",
      });
    }
  };

  return (
    <div ref={contacto} className={style.contact}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.contacto_izquierda}>
            <h1 className={style.titulo}>Contáctame</h1>
            <p>
              <i className="fas fa-paper-plane"></i>
              <span>ramiferra97@gmail.com</span>
            </p>
            <p>
              <i className="fas fa-phone-square"></i>
              <span>3492528404</span>
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
                // required
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

              {mensaje && (
                <span
                  id="msg"
                  className={mensaje.error ? style.sendError : style.send}
                >
                  {mensaje.text}
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

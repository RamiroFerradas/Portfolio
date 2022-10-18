import React, { useRef, useState } from "react";
import style from "./Contacto.module.css";
import emailjs from "@emailjs/browser";
import useLanguaje from "../../Hooks/useLanguaje";

export default function Contacto({ contacto, entries, setElements }) {
  const { text } = useLanguaje();
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
    <section id="contact" ref={contacto} className={style.contact}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.contacto_izquierda}>
            <h1 className={style.titulo}>{text.contact.title}</h1>
            {/* <p>
              <i className="fas fa-paper-plane"></i>
              <span>ramiferra97@gmail.com</span>
            </p> */}
            {/* <p>
              <i className="fas fa-phone-square"></i>
              <span>3492528404</span>
            </p> */}
            <div className={style.redes}>
              <a
                target="_blank"
                href="https://github.com/RamiroFerradas"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ramiro-ferradas/"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=3492528404"
                rel="noreferrer"
              >
                <i class="fa-brands fa-whatsapp"></i>
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
                placeholder={text.contact.placeholder.name}
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder={text.contact.placeholder.email}
                // required
              />
              <textarea
                name="user_message"
                id=""
                rows="6"
                cols="30"
                placeholder={text.contact.placeholder.msg}
                required
              ></textarea>
              <div className={style.sendMsj_Button}>
                <button
                  disabled={mensaje.status}
                  className={`${style.btn} ${style.btn2}`}
                  type="submit"
                >
                  {text.contact.send}
                </button>

                {mensaje && (
                  <span
                    id="msg"
                    className={mensaje.error ? style.sendError : style.send}
                  >
                    {mensaje.text}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

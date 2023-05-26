"use client";
import React, { useRef } from "react";
import style from "./Contacto.module.css";
import { useLanguage } from "@/app/context/LanguajeContext";
import useSendEmail from "@/app/hooks/useSendEmail";

export default function Contacto() {
  const { text } = useLanguage();
  const form = useRef(null);

  const { sendEmail, mensaje } = useSendEmail(form);

  return (
    <section id="contact" className={style.contact}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.contacto_izquierda}>
            <h1 className={style.titulo}>{text.contact.title}</h1>

            <div className={style.redes}>
              <a
                href="https://github.com/RamiroFerradas"
                target="_blank"
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
                href="https://api.whatsapp.com/send?phone=543492528404"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
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
          {/* <div
            className="badge-base LI-profile-badge"
            data-locale="es_ES"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="ramiro-ferradas"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://ar.linkedin.com/in/ramiro-ferradas?trk=profile-badge"
            >
              Ramiro Ferradas
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

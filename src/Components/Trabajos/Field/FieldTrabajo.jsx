import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import style from "./FieldTrabajo.module.css";

export default function FieldTrabajo({
  img,
  title,
  description,
  github,
  link,
}) {
  return (
    <div className={style.trabajo}>
      <img src={img} alt="durandoBike" className={style.imgTrabajos} />
      <div className={style.layer}>
        <BsChevronDoubleUp className={style.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={style.linksTrabajos}>
          <a target="_blank" href={link} rel="noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <a target="_blank" href={github} rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

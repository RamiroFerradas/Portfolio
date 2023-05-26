import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import style from "./FieldTrabajo.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function FieldTrabajo({
  img,
  title,
  description,
  github,
  link,
}) {
  return (
    <div className={style.trabajo}>
      <Image src={img} alt={title} className={style.imgTrabajos} />
      <div className={style.layer}>
        <BsChevronDoubleUp className={style.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={style.linksTrabajos}>
          <a target="_blank" href={link} rel="noreferrer">
            <i>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-blue-900"
              />
            </i>
          </a>
          <a target="_blank" href={github} rel="noreferrer">
            <i className="">
              <FontAwesomeIcon icon={faGithub} className="text-blue-900" />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

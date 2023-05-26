"use client";
import style from "./Trabajos.module.css";
import FieldTrabajo from "./Field/FieldTrabajo";
import useObserver from "@/app/hooks/useObserver";
import { useLanguage } from "@/app/context/LanguajeContext";
import { trabajosList } from "./TrabajosList";

export default function Trabajos() {
  const [sectionRef, entries] = useObserver({
    threshold: 0.25,
  });

  const isIntersecting = entries[0]?.isIntersecting;

  const { text } = useLanguage();
  const listaTrabajos = trabajosList(text);

  return (
    <section id="works" ref={sectionRef}>
      <div className={style.portfolio}>
        <div className={style.container}>
          <h1 className="">{text.work.title}</h1>
          <div
            className={
              isIntersecting ? style.trabajos_lista : style.trabajosOff
            }
          >
            {listaTrabajos?.map(
              ({ img, title, description, link, github }, i) => {
                return (
                  <FieldTrabajo
                    key={i}
                    img={img}
                    title={title}
                    description={description}
                    link={link}
                    github={github}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

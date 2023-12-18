"use client";
import useObserver from "@/app/hooks/useObserver";
import VisibilitySensor from "react-visibility-sensor";

import { worksList } from "./WorksList";
import CardWork from "./CardWork";
import { useLanguage } from "@/app/context/LanguajeContext";
import { useInView } from "@react-spring/web";

export default function Works({ handleSectionVisibility }) {
  const [sectionRef, entries] = useObserver({
    threshold: 0.25,
  });

  const [ref, inView] = useInView();
  const isIntersecting = true;
  // const isIntersecting = entries[0]?.isIntersecting;;
  const { text } = useLanguage();
  const listaTrabajos = worksList(text);
  return (
    <section
      id="works"
      ref={ref}
      className="flex flex-col items-center gap-10 py-10 px-4"
    >
      {" "}
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleSectionVisibility(isVisible, "works")}
      >
        <>
          <h1 className="text-white text-3xl">{text?.work?.title}</h1>
          <div
            className={
              isIntersecting
                ? `grid md:grid-cols-2 gap-10 animate-animationServices opacity-100 relative`
                : `grid md:grid-cols-2 gap-10 relative opacity-0`
            }
          >
            {listaTrabajos?.map(
              ({ img, title, description, link, github }, i) => {
                return (
                  <CardWork
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
        </>
      </VisibilitySensor>
    </section>
  );
}

"use client";
import useObserver from "@/app/hooks/useObserver";
import { useLanguage } from "@/app/context/LanguajeContext";
import { worksList } from "./WorksList";
import CardWork from "./CardWork";

export default function Works() {
  const [sectionRef, entries] = useObserver({
    threshold: 0.25,
  });
  const isIntersecting = entries[0]?.isIntersecting;
  // const isIntersecting = entries[0]?.isIntersecting;;
  const { text } = useLanguage();
  const listaTrabajos = worksList(text);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="flex flex-col items-center gap-10 min-h-[100vh] py-10 px-4"
    >
      <h1 className="text-white text-3xl">{text?.work?.title}</h1>
      <div
        className={
          isIntersecting
            ? `grid md:grid-cols-2 gap-10 animate-animationServices opacity-100 relative`
            : `grid md:grid-cols-2 gap-10 relative opacity-0`
        }
      >
        {listaTrabajos?.map(({ img, title, description, link, github }, i) => {
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
        })}
      </div>
    </section>
  );
}

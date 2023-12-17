"use client";

import { useLanguage } from "@/app/context/LanguajeContext";
import Card from "./Card";
import { ListServices } from "./ListServices";
import useObserver from "@/app/hooks/useObserver";

export default function MyServices() {
  const { text } = useLanguage();
  const [sectionRef, entries] = useObserver({
    threshold: 0.25,
  });

  const isIntersecting = true || entries[0]?.isIntersecting;

  const services = ListServices(text);

  return (
    <section
      id="services"
      className={`in-h-[100vh] flex flex-col justify-center items-center gap-6 my-10 relative text-white`}
      ref={sectionRef}
    >
      <div className={isIntersecting ? `text-3xl text-white` : `opacity-0`}>
        <p>{text.services.title}</p>
      </div>

      <div
        className={
          isIntersecting
            ? `animate-animationServices gap-8 grid md:grid-cols-3 mt-50 justify-center items-center opacity-100`
            : `gap-8 grid md:grid-cols-3 opacity-0`
        }
      >
        {services.map((s, i) => (
          <Card
            key={i}
            title={s.title}
            description={s.description}
            icon={s.icon}
          />
        ))}
      </div>
    </section>
  );
}

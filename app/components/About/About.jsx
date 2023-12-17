"use client";
import style from "./About.module.css";
import yoImg from "../../../public/images/byn/ramiro.jpg";
import pdf from "../../../public/cv/RAMIRO FERRADAS - FRONT END DEVELOPER .pdf";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguajeContext";
import useObserver from "@/app/hooks/useObserver";
import useObserver2 from "../../hooks/useObserver2";
import { animated, useSpring, useInView } from "@react-spring/web";
// import { useInView, animated } from "@react-spring/web";

export default function About() {
  const { text } = useLanguage();
  const [ref, inView] = useInView();
  // const [sectionRef, entries] = useObserver({
  //   threshold: 0.25,
  // });
  // const isIntersecting = entries[0]?.isIntersecting;

  const isIntersecting = inView;
  return (
    <animated.section
      id="about"
      ref={ref}
      // style={animationProps}
      className={`flex flex-col h-screen bg-[#191919] overflow-hidden gap-12 md:p-10 p-5`}
    >
      <div className="flex items-center md:justify-center justify-around flex-col md:flex-row tems-center gap-5 h-full">
        <div
          className={`${
            isIntersecting ? style.image_wrapper : `opacity-0`
          } md:h-full w-full overflow-hidden relative flex items-center justify-center h-1/2 z-40 bg-[#191919]`}
        >
          <Image
            src={yoImg}
            width={500}
            height={500}
            alt="ramiro"
            className={style.image1}
          />
          <Image
            src={yoImg}
            width={500}
            height={500}
            alt="ramiro"
            className={style.image2}
          />
          <Image
            src={yoImg}
            width={500}
            height={500}
            alt="ramiro"
            className={style.image3}
          />
          <Image
            src={yoImg}
            width={500}
            height={500}
            alt="ramiro"
            className={style.image4}
          />
        </div>
        <div className="md:w-3/4 h-1/2 md:h-full flex flex-col items-center md:items-start justify-center z-20">
          <p
            className={`md:text-7xl text-5xl text-white relative left-0 ${
              isIntersecting ? `animate-runTitle` : `opacity-0`
            }`}
          >
            {text.about.title}
          </p>
          <p
            className={`text-lg md:text-xl text-white mb-[1rem] relative right-0 ${
              isIntersecting ? `animate-runSubtitle` : `opacity-0`
            }`}
          >
            {text.about.subtitle}
            <span className="text-[#f9004d]"> Front end</span>
          </p>
          <p
            className={`text-[#fcfc] text-md md:text-md my-[1rem] text-sm md:text-md text-center md:text-left leading-7 relative right-0 ${
              isIntersecting ? `animate-runDescription` : `opacity-0`
            }`}
          >
            {text.about.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className={`${
            isIntersecting ? `animate-animationButton` : `opacity-0`
          } bg-[#f9004d] font-bold border-2 border-transparent px-8 py-3 rounded-3xl relative z-10 text-white hover:bg-transparent hover:border-2 hover:border-[#f9004d] transition-[1s]`}
        >
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Ramiro_Ferradas.pdf"
          >
            {text.about.download}
          </a>
        </button>
      </div>
    </animated.section>
  );
}

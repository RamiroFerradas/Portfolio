"use client";
import { useLanguage } from "@/app/context/LanguajeContext";
import FormContact from "./FormContact";
import NetworksIcons from "./NetworksIcons";

export default function Contact() {
  const { text } = useLanguage();

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-2 h-screen"
    >
      <p className="text-3xl text-white">{text?.contact?.title}</p>
      <NetworksIcons />
      <FormContact />
    </section>
  );
}

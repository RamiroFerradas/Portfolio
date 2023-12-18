"use client";

import { useLanguage } from "@/app/context/LanguajeContext";
import FormContact from "./FormContact";
import NetworksIcons from "./NetworksIcons";
import VisibilitySensor from "react-visibility-sensor";

export default function Contact({ handleSectionVisibility }) {
  const { text } = useLanguage();

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-2 h-screen"
    >
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleSectionVisibility(isVisible, "contact")}
      >
        <>
          <p className="text-3xl text-white">{text.contact.title}</p>
          <NetworksIcons />
          <FormContact />
        </>
      </VisibilitySensor>
    </section>
  );
}

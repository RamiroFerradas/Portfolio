import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const ListServices = (text) => {
  return [
    {
      title: text?.services?.webDesign.title,
      description: text?.services?.webDesign.description,
      icon: faGlobe,
    },
    {
      title: text?.services?.uiuxDesing.title,
      description: text?.services?.uiuxDesing.description,
      icon: faPaintBrush,
    },
    {
      title: text?.services?.appDesing.title,
      description: text?.services?.appDesing.description,
      icon: faMobileAlt,
    },
  ];
};

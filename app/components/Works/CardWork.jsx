import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export default function CardWork({ img, title, description, github, link }) {
  return (
    <div className="relative overflow-hidden rounded-xl group text-white ">
      <Image
        src={img}
        alt={title || "trabajo realizado"}
        className="object-contain w-full block transition-transform duration-500"
      />

      <div className="bg-custom-background absolute left-0 bottom-0 overflow-hidden flex flex-col p-0 md:px-10 px-4 h-full mb-[-170px] animate-animationWorksCard transition-all duration-300 rounded-xl group-hover:mb-0 group-hover:animate-none md:gap-4 gap-1 items-center justify-center">
        <FontAwesomeIcon
          icon={faAnglesUp}
          className="text-xl opacity-100 group-hover:hidden block mt-5 duration-300"
        />

        <p className="text-xl">{title}</p>
        <p className="md:text-sm text-xs opacity-0 group-hover:opacity-100">
          {description}
        </p>
        <div className="opacity-0 group-hover:opacity-100 flex gap-3">
          <a target="_blank" href={link} rel="noreferrer">
            <i>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-blue-900 bg-white p-3 text-xl rounded-full"
              />
            </i>
          </a>
          <a target="_blank" href={github} rel="noreferrer">
            <i className="">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-blue-900 bg-white p-3 text-xl rounded-full"
              />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

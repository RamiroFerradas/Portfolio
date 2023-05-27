import { useLanguage } from "@/app/context/LanguajeContext";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const { text } = useLanguage();

  return (
    <footer className=" backdrop-blur-sm bg-opacity-90 bg-gray-800 md:py-6 py-8 text-white relative md:h-48">
      <div className="container mx-auto flex justify-center">
        <div className="text-center">
          <p className="text-lg font-bold mb-2">{text?.footer?.title}</p>
          <p className="mb-4">{text?.footer?.text1}</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} - {text?.footer?.text2}
        </p>
      </div>
      <div className="my-2 absolute right-2">
        <a
          href="https://github.com/RamiroFerradas/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#f9004d]"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/ramiro-ferradas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#f9004d]"
        >
          {/* <FontAwesomeIcon icon={faLinkedin} size="ml-2" /> */}
        </a>
      </div>
    </footer>
  );
}

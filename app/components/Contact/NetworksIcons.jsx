import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NetworksIcons() {
  return (
    <div className="text-[#ababab] mt-10 text-3xl flex gap-4 justify-center">
      <a
        href="https://github.com/RamiroFerradas"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#ff004f] hover:translate-y-[-5px] transition-all"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ramiro-ferradas/"
        rel="noreferrer"
        className="hover:text-[#ff004f] hover:translate-y-[-5px] transition-all"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=543492528404"
        rel="noreferrer"
        className="hover:text-[#ff004f] hover:translate-y-[-5px] transition-all"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}

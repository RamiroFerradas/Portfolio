import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ title, description, icon }) {
  return (
    //className={style.section_servicios}
    <div className="flex text-center flex-col gap-5 hover:bg-[#ff004f] bg-[#262626] p-10 font-light rounded-xl text-white transition duration-500 ease-in-out hover:-translate-y-4 w-96 h-[30rem]">
      <FontAwesomeIcon className="text-2xl" icon={icon} />
      <h2 className="text-3xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

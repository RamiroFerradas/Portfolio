import { useLanguage } from "@/app/context/LanguajeContext";
import useSendEmail from "@/app/hooks/useSendEmail";
import { useRef } from "react";

export default function FormContact() {
  const { text } = useLanguage();
  const form = useRef(null);
  const { sendEmail, mensaje } = useSendEmail(form);

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={sendEmail}
      ref={form}
    >
      <input
        type="text"
        name="user_name"
        placeholder={text?.contact?.placeholder.name}
        className="md:w-[60vw] w-full border-0 outline-none bg-[#262626] py-2 px-4 my-3 text-white text-lg rounded-md"
      />
      <input
        type="text"
        name="user_email"
        placeholder={text?.contact?.placeholder.email}
        // required
        className="md:w-[60vw] w-full border-0 outline-none bg-[#262626] py-2 px-4 my-3 text-white text-lg rounded-md"
      />
      <textarea
        name="user_message"
        id=""
        rows="6"
        cols="30"
        placeholder={text?.contact?.placeholder.msg}
        // required
        className="md:w-[60vw] w-full border-0 outline-none bg-[#262626] py-2 px-4 my-3 text-white text-lg rounded-md"
      />
      <div className="flex flex-col items-center justify-center gap-4 w-full text-">
        <button
          type="submit"
          className={`
             animate-animationButton bg-[#f9004d] font-bold border-2 border-transparent px-8 py-3 rounded-3xl relative z-10 text-white hover:bg-transparent hover:border-2 hover:border-[#f9004d] transition-[1s] w-40`}
        >
          {text?.contact?.send}
        </button>

        {mensaje && (
          <span
            id="msg"
            className={mensaje.error ? `text-red-500` : `text-lime-500`}
          >
            {mensaje.text}
          </span>
        )}
      </div>
    </form>
  );
}

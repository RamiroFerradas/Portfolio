import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function useSendEmail(ref) {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const [mensaje, setMensaje] = useState({
    status: false,
    error: true,
    text: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = ref.current[0].value;
    const email = ref.current[1].value;
    const message = ref.current[2].value;
    const validEmailRegex = /^\S+@\S+\.\S+$/;
    const validNameRegex = /^[a-zA-Z\s]*$/; // Expresión regular para validar solo letras y espacios en el nombre

    if (!validEmailRegex.test(email)) {
      setMensaje({
        ...mensaje,
        status: false,
        error: true,
        text: "Por favor, ingrese una dirección de correo electrónico válida.",
      });
      return;
    }

    if (!validNameRegex.test(name) || name.trim() === "") {
      setMensaje({
        ...mensaje,
        status: false,
        error: true,
        text: "Por favor, ingrese un nombre válido.",
      });
      return;
    }

    if (message.trim() === "") {
      setMensaje({
        ...mensaje,
        status: false,
        error: true,
        text: "Por favor, ingrese un mensaje válido.",
      });
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, ref.current, PUBLIC_KEY);
      // console.log(result);

      setMensaje({
        ...mensaje,
        status: true,
        error: false,
        text: "Su mensaje ha sido enviado con éxito",
      });

      ref.current.reset(); // Restablecer el formulario
    } catch (error) {
      setMensaje({
        ...mensaje,
        status: false,
        error: true,
        text: "Su mensaje no se pudo enviar, vuelve a intentar por favor.",
      });
      console.error(error);
    }
  };

  return { sendEmail, mensaje };
}

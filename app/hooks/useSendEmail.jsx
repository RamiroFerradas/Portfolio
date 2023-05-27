import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function useSendEmail(ref) {
  const [mensaje, setMensaje] = useState({
    status: false,
    error: true,
    text: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(ref.current[1].value)) {
      emailjs
        .sendForm(
          "service_y33pid2",
          "template_4m0h4gc",
          ref.current,
          "uyt1gXq7bZ691wBFC"
        )
        .then(
          (result) => {
            console.log(result);
            setMensaje({
              ...mensaje,
              status: true,
              error: false,
              text: "Su mensaje ha sido enviado con exito",
            });
          },
          (error) => {
            setMensaje({
              ...mensaje,
              status: false,
              error: true,
              mensaje:
                "Su mensaje no se pudo enviar, vuelve a intentar por favor.",
            });
            console.log(error);
          }
        );
    } else {
      setMensaje({
        ...mensaje,
        status: false,
        error: true,
        text: "Escribe correctamente su direccionde mail",
      });
    }
  };
  return { sendEmail, mensaje };
}

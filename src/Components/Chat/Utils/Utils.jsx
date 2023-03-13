export const EXAMPLES = [
  { text: "Hola", label: "Intro" },
  { text: "Como estas?", label: "Intro" },
  { text: "Quien sos?", label: "Intro" },
  { text: "Por donde te puedo contactar", label: "Contacto" },
  { text: "Tengo una duda", label: "Comunidad" },
  { text: "Necesito solucionar algo", label: "Comunidad" },
  { text: "Estas buscando trabajo?", label: "Busqueda" },
  { text: "Donde trabajas?", label: "Comunidad" },
  { text: "Con que tecnologias trabajas?", label: "Intro" },
  { text: "Con que tecnologias tenes experiencia?", label: "Intro" },
  { text: "Estas escuchando propuestas?", label: "Busqueda" },
  { text: "Sabes ingles?", label: "Intro" },
  { text: "Cuantos años de experiencia tenes?", label: "Intro" },
  { text: "Como es tu Linkedin?", label: "Contacto" },
  { text: "Como es tu Github?", label: "Contacto" },
  { text: "Como hiciste este chat?", label: "Intro" },
  { text: "Te puedo hacer una consulta", label: "Intro" },
  { text: "Cual es tu expectativa salarial?", label: "Contacto" },
];

export const ANSWERS = {
  Unknow: (
    <p>
      "En realidad no soy Ramiro, soy una IA preparada para responder solo
      agunas preguntas, intenta reformular, por favor.",
    </p>
  ),
  Intro: (
    <p>
      Soy Ramiro Ferradas, Front end developer, trabajo con el stack de React y
      JavaScript hace 1 año. Actualmente trabajo en TSG System como React
      Developer. Tengo 26 años, vivo en Rafaela, Santa Fe, Argentina y estoy
      abierto a propuestas laborales.
    </p>
  ),
  Contacto: (
    <p>
      Si queres contactarme podes hacerlo a travez de mi{" "}
      <a
        href="https://www.linkedin.com/in/ramiro-ferradas/"
        rel="noopene noreferrer"
        target="_blank"
      >
        Linkedin
      </a>
      .
    </p>
  ),
  Comunidad: (
    <p>
      Podes contactarme por{" "}
      <a
        href="https://www.linkedin.com/in/ramiro-ferradas/"
        rel="noopene noreferrer"
        target="_blank"
      >
        Linkedin
      </a>
      , y te ayudo en lo que necesites puntualmente.
    </p>
  ),
  Busqueda: (
    <p>
      Actualmente estoy abierto a propuestas laborales, si tene salguna, no
      dudes en contactarme, haz click aqui para redactarme un mail, o por medio
      de mi
      <a
        href="https://www.linkedin.com/in/ramiro-ferradas/"
        rel="noopene noreferrer"
        target="_blank"
      >
        Linkedin
      </a>
    </p>
  ),
};

import { useEffect, useRef, useState } from "react";
import s from "./Chat.module.css";
import { ANSWERS, EXAMPLES } from "./Utils/Utils";

const APIKEY = import.meta.env.VITE_APIKEY;

export default function Chat() {
  const container = useRef(null);

  const suspense = <div className={s.suspense}></div>;

  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "bot",
      text: "Hola soy un bot preparado para contestar algunas preguntas sobre Ramiro. haceme tu pregunta.",
    },
    {
      id: "2",
      type: "bot",
      text: suspense,
    },
    {
      id: "3",
      type: "user",
      text: suspense,
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const filter = messages.filter((ele) => ele.id !== 2);
    const filterOff = messages.filter((ele) => ele.id === 2);
    if (loading) {
      setMessages(filter);
    }
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "user",
        text: question,
      })
    );

    setQuestion("");
    if (loading) return;
    const { classifications } = await fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${APIKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [question],
        examples: EXAMPLES,
      }),
    }).then((res) => res.json());

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text: ANSWERS[classifications[0].prediction] || ANSWERS["Unknow"],
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    container.current.scrollTo(0, container.current.scrollHeight);
  }, [messages]);

  return (
    <div className={s.body}>
      <h2>Chat</h2>
      <div className={s.container}>
        <div ref={container} className={s.divMsg}>
          {messages.map((msg, i) => (
            <div
              className={msg.type === "bot" ? s.divMsgBot : s.divMsgHum}
              key={msg.id}
            >
              {/* {console.log(msg.id)} */}
              {loading ? suspense : msg.text}
            </div>
          ))}
        </div>
        <form action="" className={s.form} onSubmit={handleSubmit}>
          <input
            name="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button disabled={loading} type="submit">
            {`↩`}
          </button>
        </form>
      </div>
    </div>
  );
}

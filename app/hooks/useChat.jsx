import { useEffect, useState } from "react";
import { classifyQuestion } from "../components/Chat/Services";
import { ANSWERS } from "../components/Chat/Utils/Utils.js";

export default function useChat(ref) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "bot",
      text: "Hola soy un bot preparado para contestar algunas preguntas sobre Ramiro. haceme tu pregunta.",
    },
    // {
    //   id: "2",
    //   type: "bot",
    //   text: suspense,
    // },
    // {
    //   id: "3",
    //   type: "user",
    //   text: suspense,
    // },
  ]);
  useEffect(() => {
    const filter = messages.filter((ele) => ele.id !== 2);
    const filterOff = messages.filter((ele) => ele.id === 2);
    if (loading) {
      setMessages(filter);
    }
  }, [loading]);

  useEffect(() => {
    ref?.current?.scrollTo(0, ref?.current?.scrollHeight);
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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

      const prediction = await classifyQuestion(question);

      setMessages((messages) =>
        messages.concat({
          id: String(Date.now()),
          type: "bot",
          text: ANSWERS[prediction] || ANSWERS["Unknow"],
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const suspense = (
    <div className="text-3xl relative">
      <div className="inline-block animate-pulse">...</div>
    </div>
  );
  return { question, setQuestion, loading, messages, handleSubmit, suspense };
}

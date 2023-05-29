import { useRef } from "react";
import useChat from "@/app/hooks/useChat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function Chat({ isChatOpen, setIsChatOpen }) {
  const chatRef = useRef(null);

  const {
    question,
    setQuestion,
    loading,
    messages,
    handleSubmit,
    suspense,
    botIsTyping,
  } = useChat(chatRef);

  return !isChatOpen ? (
    <button
      className="fixed float-right right-1 m-3 bottom-0 text-gray-500 hover:text-white z-50"
      onClick={(e) => {
        e.stopPropagation();
        setIsChatOpen(true);
      }}
    >
      <FontAwesomeIcon icon={faHeadset} className="text-4xl" />
    </button>
  ) : (
    <div
      className="fixed right-1 md:w-96 w-80 bottom-0 text-center text-[#ffffff8d] z-50 m-1 transition-all"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>Chat</h2>
      <div className="bg-[#ffffff1e] backdrop-blur-sm border-[3px] border-[#89536d] rounded-xl relative ">
        <button
          onClick={() => setIsChatOpen(false)}
          className="absolute top-1 right-2 text-[#ffffff8d]"
        >
          x
        </button>
        <div
          ref={chatRef}
          className="flex flex-col gap-1 p-1 overflow-y-auto h-64"
        >
          {messages.map((msg) => (
            <div
              className={`p-3 min-w-[20%] max-w-[80%] m-2  ${
                msg.type === "bot"
                  ? "rounded-t-[35px] rounded bg-[#89536d] rounded-br-[35px]  self-start"
                  : "rounded-l-[35px] rounded-tr-[35px] rounded bg-[#5f7ca0] self-end "
              }`}
              key={msg.id}
            >
              {msg.type === "bot" && botIsTyping ? suspense : msg.text}
            </div>
          ))}
        </div>
        <form
          action=""
          className="flex justify-center items-center p-4 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            name="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="rounded-xl border-2 border-[#5f7ca0] bg-[#5f7ca0]/25"
          />
          <button
            className="p-1 w-12 bg-[#5f7ca0] rounded-xl"
            disabled={loading}
            type="submit"
          >
            {`↩`}
          </button>
        </form>
      </div>
    </div>
  );
}

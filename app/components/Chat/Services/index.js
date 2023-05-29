import { EXAMPLES } from "../Utils/Utils";
const APIKEY = process.env.NEXT_PUBLIC_CHAT_APIKEY;
const URL = process.env.NEXT_PUBLIC_CHAT_URL;

export const classifyQuestion = async (question) => {
  try {
    const response = await fetch(URL, {
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
    });

    const { classifications } = await response.json();
    return classifications[0].prediction || "Unknow";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

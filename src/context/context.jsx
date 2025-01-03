import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Delay parameter typing word
  const delayParam = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSending = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    //
    let response;
    if (prompt !== undefined) {
      response = await runChat(input);
      setRecentPrompt(prompt);
    } else {
      // Buat hasil prompt disimpan di sidebar
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    // Buat typing effect agar terlihat rapi hasil dari prompt
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    // let newResponse2 = newResponse.split(" ").join("</br>");
    let newResponseArray = newResponse.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayParam(i, nextWord + " ");
    }

    // setResultData(response);

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSending,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

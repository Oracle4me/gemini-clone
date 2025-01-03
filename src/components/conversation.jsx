import React, { useContext, useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { Context } from "../context/context";
import { BiUser } from "react-icons/bi";
import { SiGooglegemini } from "react-icons/si";

const Conversation = ({ showChat }) => {
  const {
    onSending,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIsTyping(e.target.value.trim() !== "");
    setInput(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSending();
    }
  };

  return (
    <div className="h-full w-full text-center">
      <div className="flex max-h-full px-2 xl:px-32  xl:py-6 py-6 overflow-y-auto transition duration-300">
        <div className="xl:w-[800px] mx-auto max-w-full px-4 ">
          {!showResult ? (
            <>
              <div className="flex justify-center items-center w-full py-48">
                <div className="flex-col">
                  <h5 className="text-3xl font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                    Hallo, How are you today?
                  </h5>
                </div>
              </div>
            </>
          ) : (
            <div className="flex w-full h-[26rem] py-20 text-white">
              <div className="space-y-4 p-4">
                <div className="flex items-center space-x-4">
                  <BiUser className="h-6 w-6" />
                  <p className="text-lg font-medium">{recentPrompt}</p>
                </div>
                <div className="flex space-x-4">
                  <div className="relative inline-block">
                    <SiGooglegemini className="h-6 w-6 text-blue-600" />
                  </div>
                  {loading ? (
                    <div className="max-w-xl animate-pulse">
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[41rem] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[41rem] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[41rem] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[41rem] mb-2.5"></div>
                    </div>
                  ) : (
                    <p
                      dangerouslySetInnerHTML={{ __html: resultData }}
                      className="text-lg text-start font-normal "></p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mx-8">
        <div className="w-[800px] max-w-full flex items-center border text-white border-slate-200/25 rounded-full px-4 py-4 space-x-4">
          <div className="rounded-full hover:bg-slate-200/10 py-2 px-2">
            <LuImagePlus className="h-4 w-4" />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="border-none bg-transparent outline-none w-full"
              placeholder="Minta Gemini"
              onChange={handleInputChange}
              value={input}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="rounded-full hover:bg-slate-200/10 py-2 px-2 cursor-pointer">
            {isTyping ? (
              <div onClick={() => onSending()}>
                <FaPaperPlane className="h-4 w-4" />
              </div>
            ) : (
              <FaMicrophone className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="font-medium text-sm text-slate-200">
          Gemini dapat membuat kesalahan, jadi periksa kembali responsnya
        </p>
      </div>
    </div>
  );
};

export default Conversation;

import React, { useContext, useState } from "react";
import { BiComment } from "react-icons/bi";
import { FaGem } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import { IoMdHelpCircleOutline, IoMdMenu } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { ExtendContext } from "../context/extend";
import { Context } from "../context/context";

export const Sidebar = ({ onNewChat }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { extend, setExtend } = useContext(ExtendContext);
  const { onSending, prevPrompt, setRecentPrompt } = useContext(Context);

  const toggleExtend = () => setExtend(!extend);

  const loadPrompt = async (prompt, index) => {
    setActiveIndex(index);
    setRecentPrompt(prompt);
    await onSending(prompt);
  };

  const MenuItem = ({ icon: Icon, label, onClick }) => (
    <div
      className={`flex w-full items-center space-x-4 py-3 px-3 rounded-full cursor-pointer hover:bg-slate-200/5  ${
        extend ? "mt-1" : ""
      }`}
      onClick={onClick}>
      <Icon className={`h-5 w-5 text-slate-200 `} />
      {!extend && (
        <p
          className={`whitespace-nowrap text-md font-semibold text-slate-200 overflow-hidden transition-all duration-1000`}>
          {label}
        </p>
      )}
    </div>
  );

  return (
    <div
      className={`bg-secondary flex h-screen duration-500 overflow-hidden ${
        extend ? "w-20" : "w-sidebar"
      }`}>
      <div className="text-mute-foreground px-4 w-full">
        {/* Toggle Menu */}
        <div className="py-4 flex justify-start">
          <div
            className="hover:bg-slate-200/10 p-3 rounded-full cursor-pointer"
            onClick={toggleExtend}>
            <IoMdMenu className="w-5 h-5 text-icon" />
          </div>
        </div>
        {/* New Chat */}
        <div className="mt-12" onClick={onNewChat()}>
          <MenuItem
            icon={HiPlus}
            label="Percakapan Baru"
            onClick={() => console.log("Percakapan Baru")}
          />
        </div>
        {/* Recent Prompts */}
        <div
          className={`h-[230px] transition-all duration-300 overflow-y-auto ease-in-out mb-2`}>
          {!extend && (
            <div>
              <p className="text-slate-200 text-base font-semibold mb-3">
                Terbaru
              </p>
              <div className="space-y-1">
                {prevPrompt.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 px-3 py-2 rounded-full cursor-pointer hover:bg-slate-200/5 ${
                      activeIndex === index ? "bg-slate-200/10" : ""
                    }`}
                    onClick={() => loadPrompt(item, index)}>
                    <BiComment className="h-4 w-4 text-slate-200" />
                    <span className="text-sm font-semibold text-slate-200">
                      {item.slice(0, 25)}...
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Settings */}
        <div
          className={`
            w-full 
            ${
              extend
                ? "translate-y-6 transition-transform"
                : "translate-y-0 transition-transform"
            }`}>
          <MenuItem icon={FaGem} label="Pengelola Gem" />
          <MenuItem icon={IoMdHelpCircleOutline} label="Bantuan" />
          <MenuItem icon={GiBackwardTime} label="Aktivitas" />
          <MenuItem icon={MdOutlineSettings} label="Setelan" />
        </div>
        {/* Footer */}
        <div className="mt-8 flex items-center px-2 space-x-4">
          {/* <GoDotFill className="h-2 w-2 text-green-500" /> */}
          {/* {!extend && (
            <p className="text-xs font-semibold text-slate-200">
            Kota Semarang
            </p>
            )} */}
        </div>
      </div>
    </div>
  );
};

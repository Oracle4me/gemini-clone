import React, { useContext, useState } from "react";
import { BiComment } from "react-icons/bi";
import { FaGem } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import { IoMdHelpCircleOutline, IoMdMenu } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { Context } from "../context/context";

export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [extend, setExtend] = useState(false);
  const { onSending, prevPrompt, setRecentPrompt } = useContext(Context);

  const toggleExtend = () => setExtend(!extend);

  const loadPrompt = async (prompt, index) => {
    setActiveIndex(index);
    setRecentPrompt(prompt);
    await onSending(prompt);
  };

  const MenuItem = ({ icon: Icon, label, onClick }) => (
    <div
      className={`flex items-center space-x-4 py-2 px-3 rounded-full cursor-pointer hover:bg-slate-200/5  ${
        extend ? "justify-center" : ""
      }`}
      onClick={onClick}>
      <Icon className="h-5 w-5 text-slate-200" />
      {!extend && (
        <p className="text-sm font-semibold text-slate-200">{label}</p>
      )}
    </div>
  );

  return (
    <div
      className={`bg-secondary h-screen duration-300 ${
        extend ? "xl:w-20 re" : "w-sidebar"
      }`}>
      <div className="text-mute-foreground px-4">
        {/* Toggle Menu */}
        <div className="py-4 flex justify-start">
          <div
            className="hover:bg-slate-200/10 p-2 rounded-full cursor-pointer"
            onClick={toggleExtend}>
            <IoMdMenu className="w-5 h-5 text-icon" />
          </div>
        </div>

        {/* New Chat */}
        <MenuItem
          icon={HiPlus}
          label="Percakapan Baru"
          onClick={() => console.log("Percakapan Baru")}
        />

        {/* Recent Prompts */}
        {!extend && (
          <div className={`mt-6 h-[12rem]`}>
            <p className="text-slate-200 text-base font-semibold mb-3">
              Terbaru
            </p>
            <div className="space-y-2">
              {prevPrompt.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 px-3 py-2 rounded-full cursor-pointer hover:bg-slate-200/5 ${
                    activeIndex === index ? "bg-slate-200/10" : ""
                  }`}
                  onClick={() => loadPrompt(item, index)}>
                  <BiComment className="h-4 w-4 text-slate-200" />
                  <span className="text-sm font-semibold text-slate-200">
                    {item.slice(0, 18)}...
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings */}
        <div className="mt-6">
          <MenuItem icon={FaGem} label="Pengelola Gem" />
          <MenuItem icon={IoMdHelpCircleOutline} label="Bantuan" />
          <MenuItem icon={GiBackwardTime} label="Aktivitas" />
          <MenuItem icon={MdOutlineSettings} label="Setelan" />
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center px-2 space-x-4">
          {/* <GoDotFill className="h-2 w-2 text-green-500" /> */}
          {!extend && (
            <p className="text-xs font-semibold text-slate-200">
              Kota Semarang
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { FaPhoneVolume, FaComments } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { MdCall } from "react-icons/md";
import CallBackPopup from "./CallBackPopUp";
import ChatBot from "./ChatBot";

const Help = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [chatBotOpen, setChatBotOpen] = useState(false);

  return (
    <>
      {callbackOpen && <CallBackPopup setCallbackOpen={setCallbackOpen} />}
      {chatBotOpen && <ChatBot setChatBotOpen={setChatBotOpen} />}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/* Floating Help Button */}
        <div className="relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <div className="absolute bottom-14 right-0 flex flex-col gap-2 rounded-lg w-[175px]">
              {/* Chat with us */}
              <button
                className="flex items-center justify-between gap-2 text-white rounded-md  transition"
                onClick={() => setChatBotOpen(true)}
              >
                <p className="bg-[#152347] text-white p-1 px-3 rounded-xl">
                  Chat with us
                </p>
                <FaComments className="shadow-lg  text-5xl p-3 bg-[#152347] text-white rounded-full cursor-pointer" />
              </button>

              {/* Call Me Back */}
              <button
                className="flex items-center justify-between gap-2  text-white rounded-md  transition"
                onClick={() => setCallbackOpen(true)}
              >
                <p className="bg-[#152347] text-white p-1 px-3 rounded-xl">
                  Call Me Back
                </p>
                <MdCall className="shadow-lg  text-5xl p-3 bg-[#152347] text-white rounded-full cursor-pointer" />
              </button>
            </div>
          )}

          {/* Toggle Button */}
          {isOpen ? (
            <ImCancelCircle className="text-5xl p-3 bg-[#152347] text-white rounded-full shadow-lg cursor-pointer" />
          ) : (
            <FaPhoneVolume className="text-5xl p-3 bg-[#152347] text-white rounded-full shadow-lg cursor-pointer" />
          )}
        </div>
      </div>
    </>
  );
};

export default Help;

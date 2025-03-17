import React, { useState } from "react";
import { FaPhoneVolume, FaComments } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { MdCall } from "react-icons/md";
import CallBackPopup from "./CallBackPopup";
import ChatBot from "./ChatBot";
import { motion, AnimatePresence } from "framer-motion";

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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-14 right-0 flex flex-col gap-2 rounded-lg w-[175px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Chat with us */}
                <motion.button
                  className="flex items-center justify-between gap-2 text-white rounded-md transition"
                  onClick={() => setChatBotOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="bg-[#152347] text-white p-1 px-3 rounded-xl">
                    Chat with us
                  </p>
                  <FaComments className="shadow-lg text-5xl p-3 bg-[#152347] text-white rounded-full cursor-pointer" />
                </motion.button>

                {/* Call Me Back */}
                <motion.button
                  className="flex items-center justify-between gap-2 text-white rounded-md transition"
                  onClick={() => setCallbackOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="bg-[#152347] text-white p-1 px-3 rounded-xl">
                    Call Me Back
                  </p>
                  <MdCall className="shadow-lg text-5xl p-3 bg-[#152347] text-white rounded-full cursor-pointer" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <ImCancelCircle className="text-5xl p-3 bg-[#152347] text-white rounded-full shadow-lg cursor-pointer" />
            ) : (
              <FaPhoneVolume className="text-5xl p-3 bg-[#152347] text-white rounded-full shadow-lg cursor-pointer" />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Help;
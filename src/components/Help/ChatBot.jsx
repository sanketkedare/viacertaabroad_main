import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMessage3Fill, RiRobot3Fill } from "react-icons/ri";
import { BiSend } from "react-icons/bi";

const ChatBot = ({ setChatBotOpen }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-20 right-5 z-50 w-[400px] h-[500px] bg-gray-200 border rounded-xl shadow-2xl flex flex-col">
      {/* Close Button */}
      <button
        className="absolute -top-9 p-1 right-3 bg-white rounded-full text-gray-600 hover:text-black"
        onClick={() => setChatBotOpen(false)}
      >
        <IoMdClose size={24} />
      </button>

      {/* Chat Header */}
      <div className="bg-[#152347] w-full p-4 text-[#fff] rounded-t-xl flex flex-col items-start">
        <RiMessage3Fill className="bg-white p-2 rounded-full text-[#f8b62d] text-3xl my-2" />
        <b className="text-sm">ViaCerta Abroad</b>
        <small className="text-gray-300">Typically replies within a minute</small>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 bg-white overflow-y-auto  rounded-b-xl">
        <div className="sticky top-0 left-0 p-2 flex items-center gap-2 border-b border-[#152347] w-full bg-gray-500">
          <RiRobot3Fill className="bg-white text-[#2c31b6] rounded-full border text-2xl p-1" />
          <small className="font-bold text-white">Bot</small>
        </div>

        {/* Display messages */}
        <div className="mt-2 space-y-2 px-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg w-fit max-w-[75%] ${
                msg.sender === "user" ? "ml-auto bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="flex items-center border-t bg-white p-2 rounded-b-xl">
        <input
          type="text"
          className="flex-1 outline-none px-2 py-1 rounded-lg border"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="ml-2 bg-blue-500 text-white p-2 rounded-lg" onClick={handleSendMessage}>
          <BiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
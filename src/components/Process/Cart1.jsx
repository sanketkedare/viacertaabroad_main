import React from "react";

const Message = ({ isUser, text }) => {
  return (
    <div className={`flex gap-4 items-center ${isUser ? "justify-end" : ""}`}>
      {!isUser && <img src="/profile_icon.png" className="w-14" />}
      <div
        className={`text-[14px] flex items-center flex-wrap text-left rounded-xl p-4 ${
          isUser ? "bg-[#1E1E8C3B]" : "bg-[#FF87911C]"
        }`}
      >
        {text}
      </div>
      {isUser && <img src="/profile_icon.png" className="w-14" />}
    </div>
  );
};

const ChatSection = () => {
  return (
    <div className="w-1/3 p-4 flex flex-col justify-center gap-10">
      <Message text="How do I start my study abroad process?" />
      <Message
        text="Book a counseling session with us—we’ll guide you through every step."
        isUser
      />
      <Message text="Can I choose more than one country?" />
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="w-2/3 p-10 text-left flex flex-col gap-10 justify-center">
      <h1 className="text-[50px] font-semibold">
        Let’s Have <span className="text-[#E00012]">a Chat</span> (2- Stage
        Counselling)
      </h1>
      <p className="text-[28px]">
        First, we understand you — your goals, dreams, and confusions. Then, we
        give you clear direction and guidance that fits you best.
      </p>
      <button className="bg-[#E00012] w-[191px] h-[50px] text-white text-[20px] rounded-[4px]">
        Let's chat now
      </button>
    </div>
  );
};

const Cart1 = () => {
  return (
    <div className="sticky top-10 w-[1366px] h-[634px] m-auto bg-white mt-10 mb-0 flex items-center">
      <div className="absolute bg-gradient-to-r from-[#E00012] to-[#14247C] w-full h-[420px] z-0"></div>
      <div className="h-[634px] w-10/12 bg-white  m-auto rounded-xl z-10 shadow-[0_0_30px_rgba(0,0,0,0.2)] flex">
        <InfoSection />
        <ChatSection />
      </div>
    </div>
  );
};

export default Cart1;

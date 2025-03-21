import React from "react";

const Message = ({ isUser, text }) => {
  return (
    <div className={`flex gap-4 items-center ${isUser ? "justify-end" : ""}`}>
      {!isUser && <img src="/profile_icon.png" className="w-14" />}
      <div
        className={`lg:text-[14px] text-xs flex items-center flex-wrap text-left rounded-xl p-4 ${
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
    <div className="lg:w-1/3 p-4 flex flex-col justify-center lg:gap-10 gap-5">
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
    <div className="lg:w-2/3 p-10 text-left flex flex-col gap-10 justify-center">
      <h1 className="lg:text-[50px] text-xl lg:text-left text-center  font-semibold">
        Let’s Have <span className="text-[#E00012]">a Chat</span> (2- Stage
        Counselling)
      </h1>
      <p className="lg:text-[28px] text-lg">
        First, we understand you — your goals, dreams, and confusions. Then, we
        give you clear direction and guidance that fits you best.
      </p>
      <button className="bg-[#E00012] lg:w-[191px] w-full h-[50px] m-auto lg:m-0 text-white lg:text-[20px] rounded-[4px]">
        Let's chat now
      </button>
    </div>
  );
};

const Cart1 = () => {
  return (
    <div className="bg-white sticky top-10 lg:w-[1366px] lg:h-[634px] h-[950px] m-auto lg:mt-10 mt-0 mb-0 flex items-center">
      <div className="absolute bg-gradient-to-r from-[#E00012] to-[#14247C] w-full h-[420px] z-0"></div>
      <div className="relative lg:h-[634px] h-[700px] w-10/12  bg-white  m-auto rounded-xl z-10 shadow-[0_0_30px_rgba(0,0,0,0.2)] lg:flex">
        <InfoSection />
        <ChatSection />
        <img src="/slider/lines.png" className="absolute top-0 right-0 rotate-180" />

      </div>

    </div>
  );
};

export default Cart1;

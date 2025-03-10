import React from "react";
import ApplyNow from "./ApplyNow";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* // keep one image in background */}
      <div className="absolute inset-0 w-full h-full  overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQj9fqAvzcQMhJFe6uLDDYUkTNGZA_jO_MYw&s"
          alt="Background"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white to-10% opacity-30"></div>
      <div className="w-9/12  m-auto z-10 py-5">
        <img src="/viaCerta-logo.png" className="w-[150px] m-auto bg-white " />
        <div className="flex flex-col items-center justify-center gap-10 py-10 pb-14  rounded-xl">
          <h1 className="text-5xl font-extrabold text-[#2c21b6] text-center">
            ViaCerta National Talent Scholarship Program 2025
          </h1>
          <h2 className="text-2xl font-bold text-[#010a1f]">
            Scholarships Worth ₹80 Lakhs | Laptops | Free FMGE Preparation |
            Mentorship
          </h2>
          <ApplyNow />
          <b>
            Don’t Just Dream It, Earn It with ViaCerta Introducing the ViaCerta
            National Talent Scholarship- Your Ticket to Studying Medicine Abroad
          </b>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center  gap-6 px-10">
        <b className="block w-full border-t-2 border-[#2c21b6]"></b>
        <button className="bg-white w-full p-2 font-bold flex justify-center items-center gap-3  text-sm border border-[#2c21b6] rounded-full shadow-lg">
          🔷 <p>Fulfill your dream to study abroad </p>🔷
        </button>
        <b className="block border-t-2 border-[#2c21b6] w-full"></b>
      </div>

      <div className="w-9/12 m-auto mt-10 flex flex-col items-center justify-center gap-5">
        <p className="font-extrabold text-4xl text-center text-[#152347]">
          Your Medical Dream, Our Support!{" "}
        </p>
        <b className="text-center w-4/5">
          Are you a 12th-class student or a NEET dropper aiming for a top
          medical college? ViaCerta is here to help you succeed! This is your
          golden chance to win scholarships, a brand-new laptop, free FMGE
          preparation, and exclusive mentorship—all designed to give you a head
          start in your medical journey.
        </b>
      </div>
    </div>
  );
};

export default HeroSection;

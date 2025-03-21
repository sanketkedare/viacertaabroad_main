import React from "react";

const OurServices = () => {
  return (
    <div className="w-11/12 m-auto grid lg:grid-cols-2 gap-20 min-h-screen mt-20">
      <div className=" h-[300px]  bg-[#F7FAFE] shadow-md border-b-6 border-r-6 border-[#E00012] rounded-xl p-6 flex flex-col gap-10">
        <h1 className="lg:text-[30px] text-xl font-bold mt-10">
          Admission
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
            Counselling
          </span>
        </h1>

        <p className="text-[#000000] lg:text-[24px] text-lg">
          Personalized counseling to help you pick the right university. From
          forms to follow-ups — we make the process easy.
        </p>
      </div>
      <div className=" h-[300px] bg-[#F7FAFE] shadow-md  rounded-xl p-6 flex flex-col gap-10">
        <h1 className="lg:text-[30px] text-xl font-bold mt-10">
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
            University
          </span>
          Selection
        </h1>

        <p className="text-[#000000] lg:text-[24px] text-lg">
          Personalized counseling to help you pick the right university. From
          forms to follow-ups — we make the process easy.
        </p>
      </div>{" "}
      <div className="h-[300px]  bg-[#F7FAFE] shadow-md  rounded-xl p-6 flex flex-col gap-10">
        <h1 className="lg:text-[30px] text-xl font-bold mt-10">
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
            Visa
          </span>
          & Documentation Support
        </h1>

        <p className="text-[#000000] lg:text-[24px] text-lg">
          Get a curated list of top NMC, WHO-approved universities. We help you
          compare, choose, and apply hassle-free.
        </p>
      </div>{" "}
      <div className=" h-[300px]  bg-[#F7FAFE] shadow-md  rounded-xl p-6 flex flex-col gap-10">
        <h1 className="lg:text-[30px] text-xl font-bold mt-10">
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
            Pre-Departure
          </span>
          Briefing
        </h1>

        <p className="text-[#000000] lg:text-[24px] text-lg">
          Pre-Departure Briefing All the essential info about travel, living,
          and safety. So you land confident and ready for the new journey.
        </p>
      </div>{" "}
      <div className=" h-[300px] bg-[#F7FAFE] shadow-md  rounded-xl p-6 flex flex-col gap-10">
        <h1 className="lg:text-[30px] text-xl font-bold mt-10">
          On-Arrival
          <span className=" text-[#14247C] bg-clip-text px-2">Assistance</span>
          in Georgia
        </h1>

        <p className="text-[#000000] lg:text-[24px] text-lg">
          Airport pickup, accommodation help, and city orientation.We’re with
          you — from the moment you land in Georgia!
        </p>
      </div>{" "}
    </div>
  );
};

export default OurServices;

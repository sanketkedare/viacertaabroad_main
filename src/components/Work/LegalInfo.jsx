import React from "react";
import { FaHourglassHalf, FaMoneyBillWave } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const LegalInfo = ({ workData }) => {
  const visaInfo = [
    {
      icon: <FaHourglassHalf size={20} color="white" />,
      title: "Work Hour Limits",
      info: "Many countries allow students to work up to 20 hours per week during term time and full-time during vacations.",
    },
    {
      icon: <FaFileAlt size={20} color="white" />,
      title: "Visa Requirements",
      info: "Some countries require students to have a work permit along with their study visa.",
    },
    {
      icon: <FaMoneyBillWave size={20} color="white" />,
      title: "Tax Rules",
      info: "Depending on the country, you might need to register for a tax number before starting work.",
    },
  ];
  return (
    <div className="py-10">
      <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
        Why Work{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
          Abroad?
        </span>
      </p>
      <div className="w-10/12 m-auto lg:text-[24px] text-xl text-center my-10">
        {workData.content}
      </div>

      {/* Legal Info */}
      <div className="relative py-10 bg-[#1E1E8C] text-white">
        <div className="w-full h-full absolute z-0 bottom-0 overflow-hidden opacity-15">
          <img src={workData.image} className="w-full" />
        </div>
        <div className="relative z-10">
          <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
            Work Visa & Legal Info
          </p>
          <p className="text-center text-xl py-2 pb-8">
            Before taking a job abroad it is essential to know the work culture
            of that country. Some key points you should consider:
          </p>
          <div className="w-9/12 m-auto gap-8 p-2 grid lg:grid-cols-3 justify-center my-10">
            {visaInfo.map((i) => (
              <div
                className=" flex flex-col items-center gap-4 p-3"
                key={i.title}
              >
                <p className=" p-3 rounded-full bg-[#E00002] text-white">
                  {i.icon}
                </p>
                <p className="font-semibold text-xl">{i.title}</p>
                <p className="text-center">{i.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;

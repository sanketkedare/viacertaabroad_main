import React from "react";

const HowHelp = () => {
  const steps = [
    "We guide you on the best part-time jobs and internships based on your skills and visa rules.",
    "We will help you with your resume, cover letter, and job search strategy, which has a high success rate.",
    "We will help you apply confidently, prepare you to ace the interview, and start working abroad.",
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl lg:text-5xl font-bold mb-6">
        How ViaCerta{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
          Helps You Get a Job?
        </span>
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
        At ViaCerta, we don’t just help you study abroad — we make sure you’re
        prepared for the real world too! Our 3-step process ensures you land the
        right job while studying.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-[#14247C] to-[#E00012] text-white"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black  text-lg font-bold mb-4 mx-auto">
              {index + 1}
            </div>
            <p className="text-center font-medium">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowHelp;

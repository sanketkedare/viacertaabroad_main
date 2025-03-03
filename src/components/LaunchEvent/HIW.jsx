import React from "react";

const HIW = ({setFormOpen}) => {
  return (
    <section className="relative py-16 px-8 text-center min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="lg:text-4xl text-2xl font-extrabold text-[#2c31b6] mb-8 drop-shadow-lg">
        How It Works: 3-Step Process
      </h1>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-[#152347]">🔹 Step 1: Apply Online</h2>
          <p className="mt-2 text-gray-700">
            Submit your details & academic background in less than 60 seconds.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-[#152347]">🔹 Step 2: Get Shortlisted</h2>
          <p className="mt-2 text-gray-700">
            Our expert panel will review applications and shortlist top candidates.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-[#152347]">🔹 Step 3: Receive Your Scholarship</h2>
          <p className="mt-2 text-gray-700">
            If selected, we will cover your tuition fees and guide you for visa & job placement.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button
      onClick={()=> setFormOpen(true)}
        className="mt-8 bg-[#f8b62d] text-[#152347] py-3 px-8 rounded-lg font-bold shadow-lg hover:bg-[#f6a61d] transition-all duration-300"
        aria-label="Apply for scholarship now"
      >
        📩 Apply Now
      </button>

      {/* Additional Info */}
      <p className="mt-6 text-lg font-bold text-gray-800">
        🎯 Limited to <strong>100 Students</strong> Only – Apply Now!
      </p>
      <p className="mt-2 font-semibold text-gray-700">
        📌 <time dateTime="2025-03-15">Deadline: 15 March 2025</time>
      </p>
    </section>
  );
};

export default HIW;

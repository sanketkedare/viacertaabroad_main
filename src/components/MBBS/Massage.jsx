import React from 'react';

const Massage = () => {
  return (
    <div className="w-11/12 max-w-6xl bg-[#1E1E8CDB] text-white m-auto border rounded-2xl p-6 md:p-10 flex flex-col gap-5 mt-10">
      <p className="text-2xl md:text-4xl font-bold text-center">
        Start Your{' '}
        <span className="bg-gradient-to-r from-[#FFDD55] to-[#5fb1d2] text-transparent bg-clip-text">
          MBBS Journey
        </span>{' '}
        Today!
      </p>

      <p className="text-md md:text-xl text-center w-full md:w-3/4 m-auto">
        Thinking about studying MBBS abroad? We’ll guide you every step of the way!
      </p>

      <div className="flex justify-center mt-4">
        <button className="bg-[#E00002] hover:bg-[#b80002] transition duration-300 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-lg">
          Book a Free Consultation or Apply Now
        </button>
      </div>
    </div>
  );
};

export default Massage;

import React from "react";

const HeroSection = ({setFormOpen}) => {
  return (
    <section className="relative py-16 bg-[#2c31b6] text-white px-4 sm:px-8 text-center min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <img
          src="/homeimage.jpg"
          className="w-full h-full object-cover"
          alt="Study abroad scholarship opportunity"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 w-full ">
        <h1 className="text-white lg:text-3xl sm:text-4xl font-bold text-center">
          TURN YOUR STUDY ABROAD DREAM INTO REALITY
        </h1>

        <h2 className="lg:text-5xl text-3xl font-extrabold leading-tight drop-shadow-lg my-6 sm:my-12">
          🎓 100 STUDENTS | 100% SCHOLARSHIP CHALLENGE 🌍
        </h2>

        <p className="text-lg sm:text-2xl mt-4 sm:w-2/3 w-full m-auto font-medium">
          📢 Apply Now & Get a Chance to Study in the UK, Germany, Australia, or Canada on a 100% Scholarship!
        </p>

        <button
        onClick={()=> setFormOpen(true)}

          className="mt-6 cursor-pointer w-full sm:w-1/3 m-auto bg-[#f8b62d] text-[#152347] py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-[#f6a61d] transition-all duration-300"
          aria-label="Apply for 100% scholarship"
        >
          📩 Apply Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

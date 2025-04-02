"use client";

import React from "react";
import StudyAbroadHero from "./StudyAbroadHero";
import { LuNotebookText } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";

const studyAbroadContent = {
  heroParagraphs: [
    "Studying in a new country, meeting people from all over the world, and experiencing life in a whole new way sounds exciting, right? Studying abroad isn’t just about the classrooms, it’s about stepping out of your comfort zone and giving your life the biggest turn ever.",
    "But as exciting as it sounds, it can be overwhelming with a lot of uncertainty. That’s where we step in to help you simplify the lengthy, boring process to make your dream a reality. Now, if you’re wondering, 'Where should I go?' or even if you have a country in mind, this guide is for you—we’ll lead you step by step.",
  ],
  title: "Why Study Abroad?",
  subtitle: "Get access to world-class education.",
  benefits: [
    {
      icon: <LuNotebookText size={40} className="" />,
      title: "Global Education, Limitless Opportunities",
      description: "Get access to world-class universities and globally recognized degrees for career prospects worldwide.",
    },
    {
      icon: <FaUniversity  size={40} className="" />,
      title: "Work & Study for a Brighter Future",
      description: "Our experts analyze eligibility criteria, job opportunities, and scholarships to find your best fit.",
    },
    {
      icon: <MdDownloading  size={40} className="" />,
      title: "Decision Support",
      description: "Performance analysis to help you identify gaps and make steady progress toward your target score.",
    },
  ],
};

const StudyAbroad = () => {
  return (
    <div className="min-h-screen">
      <StudyAbroadHero />

      {/* Hero Paragraphs */}
      <section className="w-10/12 m-auto my-16 text-center">
        {studyAbroadContent.heroParagraphs.map((para, index) => (
          <p key={index} className="text-xl lg:text-[24px] leading-relaxed mt-4">
            {para}
          </p>
        ))}
      </section>

      {/* Why Study Abroad Section */}
      <section className="w-10/12 m-auto my-16">
        <h2 className="lg:text-[50px] text-2xl font-bold text-center">
          {studyAbroadContent.title}
        </h2>
        <p className="text-center lg:text-2xl p-3">{studyAbroadContent.subtitle}</p>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-3 gap-10 py-10">
          {studyAbroadContent.benefits.map((benefit, index) => (
            <div key={index} className={`p-6   ${index % 2 === 0 ? 'bg-[#FDF3E7]' : 'bg-[#F7FAFE]'} shadow-2xl flex flex-col gap-4`}>
              <span className="bg-[#E00002] text-white p-4 w-15 h-15 flex justify-center items-center rounded-full">{benefit.icon}</span>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;

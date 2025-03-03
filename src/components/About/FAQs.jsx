"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "./utils";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5); // Show 5 FAQs initially

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMore = () => {
    setVisibleCount(faqs.length); // Show all questions
  };

  const showLess = () => {
    setVisibleCount(5); // Collapse back to 5 questions
  };

  return (
    <section className="bg-white py-16 min-h-screen">
      <div className="container mx-auto lg:px-10 px-4 lg:w-9/12">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="lg:text-4xl text-xl font-bold text-[#2c31b6]">Frequently Asked Questions</h2>
          <p className="lg:text-lg text-sm text-gray-600 mt-4">
            Here are some common questions students ask before starting their study abroad journey.
          </p>
        </div>

        {/* FAQs List */}
        <div className="mx-auto">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-sm text-left flex justify-between items-center p-4 bg-[#152347] text-[#fff] font-semibold rounded-t-lg"
              >
                {faq.question}
                {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </button>
              {openIndex === index && (
                <div className="bg-gray-100 text-sm p-4 text-gray-800 rounded-b-lg">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="text-center mt-6">
          {visibleCount < faqs.length ? (
            <button
              onClick={showMore}
              className="px-6 py-2 text-sm bg-[#f8b62d] text-[#152347] rounded-lg font-semibold hover:bg-[#e09e26] transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-6 py-2 text-sm bg-gray-300 text-[#152347] rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

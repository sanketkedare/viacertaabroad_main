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
      <div className="container mx-auto px-10 w-9/12">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#152347]">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mt-4">
            Here are some common questions students ask before starting their study abroad journey.
          </p>
        </div>

        {/* FAQs List */}
        <div className="mx-auto">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-4 bg-[#f8b62d] text-[#152347] font-semibold rounded-t-lg"
              >
                {faq.question}
                {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </button>
              {openIndex === index && (
                <div className="bg-gray-100 p-4 text-gray-800 rounded-b-lg">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="text-center mt-6">
          {visibleCount < faqs.length ? (
            <button
              onClick={showMore}
              className="px-6 py-2 bg-[#2c31b6] text-white rounded-lg font-semibold hover:bg-[#152347] transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
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

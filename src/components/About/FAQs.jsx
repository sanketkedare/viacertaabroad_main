"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./utils";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMore = () => {
    setVisibleCount(faqs.length);
  };

  const showLess = () => {
    setVisibleCount(5);
  };

  return (
    <section className="min-h-screen py-16 bg-gray-100 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] bg-cover opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4FF] via-white to-[#E0ECFF] opacity-90"></div>
      
      <div className="container mx-auto lg:px-10 px-4 lg:w-9/12 relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="lg:text-4xl text-2xl font-bold text-[#2c31b6] tracking-wide mb-2">Frequently Asked Questions</h2>
          <p className="lg:text-lg text-sm text-gray-600 w-3/4 mx-auto">
            Here are some common questions students ask before starting their study abroad journey.
          </p>
        </div>

        {/* FAQs List */}
        <div className="mx-auto space-y-4">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-4 bg-[#152347] text-white font-semibold text-lg"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-gray-800 p-4 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
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

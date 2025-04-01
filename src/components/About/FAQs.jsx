"use client";
import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./utils";

const FAQs = ({faqArray}) => 
{
  console.log(faqArray)
  const [questions, setQuestions] = useState();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(()=>
  {
    if(faqArray)
    {
      setQuestions(faqArray);
    }
    else{
      setQuestions(faqs)
    }

  },[faqArray])

 

  return (
    <section className=" mb-10 lg:mb-10  relative">
      <div className="py-10">
        <h1 className="lg:text-[40px] text-2xl font-bold mt-10 text-center lg:flex gap-4 justify-center">
          Everything You
          <span className="bg-gradient-to-r px-2 from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Wanted To Ask!
          </span>
        </h1>
        <h3 className="lg:text-[24px]  lg:w-auto w-9/12 m-auto text-md mt-2 text-center">
          Get answers to all your study abroad questions and make informed
          decisions with confidence!
        </h3>
      </div>

      <div className="container mx-auto lg:px-10 px-4 lg:w-10/12  relative z-10">
        {/* FAQs List */}
        <div className="mx-auto space-y-4 flex flex-wrap justify-between">
          {questions && questions.map((faq, index) => (
            <div
              key={index}
              className="relative border border-[#E0001269]  shadow-lg bg-white lg:w-[45%] w-full"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-4 bg-[#fff] text-black font-semibold lg:text-lg text-sm"
              >
                <span>{faq.question || faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </button>

              {/* Show the answer directly below the question */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-14 z-20 bg-white border border-[#E0001269] text-gray-800 p-4 text-sm"
                  >
                    {faq.answer || faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

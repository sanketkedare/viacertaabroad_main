"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyViaCerta = () => {
  const benefits = [
    { title: "Expert Guidance", desc: "Get personalized counseling from industry experts to choose the right course and university." },
    { title: "Top University Tie-Ups", desc: "Partnered with 500+ globally recognized universities to provide the best education opportunities." },
    { title: "Visa & Admission Assistance", desc: "Seamless visa processing and end-to-end support for application documentation." },
    { title: "Scholarships & Financial Aid", desc: "Exclusive access to scholarships and funding options to reduce study costs." },
    { title: "Global Career Support", desc: "Connect with international job opportunities through our strong alumni and placement network." },
  ];

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="container mx-auto lg:px-10 lg:w-9/12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl text-3xl font-bold text-[#2c31b6] tracking-wide">
            Why Choose ViaCerta Abroad?
          </h2>
          <p className="lg:text-lg text-base mt-4 w-3/4 mx-auto text-gray-600">
            We make your study abroad journey smooth and stress-free by providing complete 
            support from university selection to career opportunities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#f8b62d] px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#152347] p-6 rounded-2xl shadow-2xl flex items-start gap-4 hover:bg-[#1b294a] transition-colors duration-300"
            >
              <CheckCircle className="text-[#FACC15] w-8 h-8" />
              <div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyViaCerta;

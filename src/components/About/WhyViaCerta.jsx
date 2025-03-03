"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyViaCerta = () => {
  const benefits = [
    { title: "Expert Guidance", desc: "Get personalized counseling from industry experts to choose the right course and university." },
    { title: "Top University Tie-Ups", desc: "Partnered with 500+ globally recognized universities to provide the best education opportunities." },
    { title: "Visa & Admission Assistance", desc: "Seamless visa processing and end-to-end support for application documentation." },
    { title: "Scholarships & Financial Aid", desc: "Exclusive access to scholarships and funding options to reduce study costs." },
    { title: "Global Career Support", desc: "Connect with international job opportunities through our strong alumni and placement network." },
  ];

  return (
    <section className="bg-[#152347] py-16 min-h-screen">
      <div className="container mx-auto lg:px-10 lg:w-9/12 m-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-xl font-bold text-[#f8b62d]">Why Choose ViaCerta Abroad?</h2>
          <p className="lg:text-lg text-gray-300 mt-4 w-3/4 mx-auto">
            We make your study abroad journey smooth and stress-free by providing complete 
            support from university selection to career opportunities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white px-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#2c31b6] p-6 rounded-xl shadow-lg flex items-start gap-4"
            >
              <CheckCircle className="text-[#f8b62d] w-8 h-8" />
              <div>
                <h3 className="lg:text-2xl  font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-200 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyViaCerta;

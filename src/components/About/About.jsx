"use client";
import React from "react";

const AboutUs = () => 
{
    let CEO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNvb2osNhWCWsB_6PJoUSCJ6G7Bit0H4fiQ&s"

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-10 lg:w-9/12">
        {/* Company Info */}
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-xl font-bold text-[#2c31b6]">About ViaCerta Abroad</h2>
          <p className="lg:text-lg text-justify text-gray-600 mt-4 w-3/4 mx-auto">
            ViaCerta Abroad is your trusted partner in international education, 
            connecting students with top universities worldwide. With expert guidance, 
            visa assistance, and personalized career counseling, we ensure a seamless 
            transition to global education.
          </p>
        </div>

        {/* Company Services */}
        <div className="grid md:grid-cols-3 gap-10 text-white">
          {/* Service 1 */}
          <div className="bg-[#152347] p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#f8b62d]">Global University Access</h3>
            <p className="mt-3 text-gray-300">
              Get admissions to top-ranked universities in the USA, UK, Canada, Australia, 
              and more with our expert consultation.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#152347] p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#f8b62d]">Scholarships & Funding</h3>
            <p className="mt-3 text-gray-300">
              Unlock exclusive scholarships and funding opportunities to make 
              studying abroad more affordable.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#152347] p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#f8b62d]">Visa & Application Support</h3>
            <p className="mt-3 text-gray-300">
              Our team assists with hassle-free visa applications, documentation, 
              and university applications.
            </p>
          </div>
        </div>

        {/* CEO Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          {/* CEO Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src={CEO_URL}
              alt="CEO"
              className="w-full object-cover"
            />
          </div>

          {/* CEO Info */}
          <div>
            <h3 className="text-3xl font-bold text-[#2c31b6]">John Doe</h3>
            <p className="text-lg text-[#152347] font-semibold">Founder & CEO, ViaCerta Abroad</p>
            <p className="mt-4 text-gray-600">
              John Doe, an industry expert with 15+ years of experience in global education, 
              founded ViaCerta Abroad to bridge the gap between students and world-class 
              universities. His vision is to empower students with seamless access to 
              international education opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

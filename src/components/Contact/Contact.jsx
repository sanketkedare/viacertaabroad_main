import React from "react";
import { Mail, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  const COMPANY_EMAIL = "info@viacertaabroad.com";
  const COMPANY_MOBILE = "+91 83768 95692";
  const COMPANY_ADDRESS = "Gurugram, Haryana, India";

  return (
    <div className=" flex flex-col items-center justify-center bg-[#f0f4ff] py-20">
      <div className="lg:w-7/12 w-11/12 m-auto text-center mb-10">
        <p className="text-3xl text-[#152347] font-bold mb-6">
          Want to <b className="text-[#2c21b6]">Contact Us?</b>
        </p>
        <p className="text-lg text-gray-700">
          We are here to assist you with all your queries and concerns. Feel
          free to reach out to us through the contact details below or drop us a
          message. We would be delighted to help you on your journey to studying
          abroad!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center w-full lg:w-7/12 justify-around">
        {/* Email */}
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl w-full lg:w-1/3">
          <Mail size={40} className="text-[#2c21b6]" />
          <p className="text-xl text-[#152347] font-bold mt-4">Email Us</p>
          <p className="text-gray-700 mt-2">{COMPANY_EMAIL}</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl w-full lg:w-1/3">
          <PhoneCall size={40} className="text-[#2c21b6]" />
          <p className="text-xl text-[#152347] font-bold mt-4">Call Us</p>
          <p className="text-gray-700 mt-2">{COMPANY_MOBILE}</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl w-full lg:w-1/3">
          <MapPin size={40} className="text-[#2c21b6]" />
          <p className="text-xl text-[#152347] font-bold mt-4">Visit Us</p>
          <p className="text-gray-700 mt-2">{COMPANY_ADDRESS}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

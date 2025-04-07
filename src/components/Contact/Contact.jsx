import React from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  const COMPANY_EMAIL = "info@viacertaabroad.com";
  const COMPANY_MOBILE = "+918376895692";
  const COMPANY_ADDRESS = "Gurugram, Haryana, India";

  const handleEmailClick = () => {
    window.open(`mailto:${COMPANY_EMAIL}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${COMPANY_MOBILE}`);
  };

  const handleAddressClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS)}`, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="lg:w-7/12 w-11/12 m-auto text-center mb-10">
        <p className="text-3xl text-[#152347] font-bold mb-6">
          Want to <b className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">Contact Us?</b>
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex flex-col items-center border border-[#E00002]  text-black p-8 rounded-xl shadow-xl w-full lg:w-1/3 cursor-pointer"
          onClick={handleEmailClick}
        >
          <Mail size={45} className="absolute -top-5 p-2 rounded-full bg-white text-[#E00002] border border-[#E00002] " />
          <p className="text-xl  font-bold mt-4">Email Us</p>
          <p className=" mt-2 text-[#E00002] font-bold ">{COMPANY_EMAIL}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex flex-col border border-[#E00002]  items-center  p-8 rounded-xl shadow-xl w-full lg:w-1/3 cursor-pointer"
          onClick={handlePhoneClick}
        >
          <PhoneCall size={45} className="absolute -top-5 p-3 rounded-full bg-white text-[#E00002] border border-[#E00002]" />
          <p className="text-xl font-bold mt-4">Call Us</p>
          <p className="text-[#E00002] font-bold mt-2">{COMPANY_MOBILE}</p>
        </motion.div>

        {/* Address */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex flex-col items-center border border-[#E00002] p-8 rounded-xl shadow-xl w-full lg:w-1/3 cursor-pointer"
          onClick={handleAddressClick}
        >
          <MapPin size={45} className="absolute -top-5 p-2 rounded-full bg-white text-[#E00002] border border-[#E00002]" />
          <p className="text-xl  font-bold mt-4">Visit Us</p>
          <p className=" mt-2 text-[#E00002] font-bold ">{COMPANY_ADDRESS}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { destinations, mastersPrograms, supportLinks } from "./utils";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:h-[450px] bg-[#B9C4FF3B] mt-5 relative overflow-hidden py-10">
      {/* Background Outlined Text */}

      <div className="relative flex flex-col lg:flex-row justify-between gap-5 lg:w-9/12 w-11/12 m-auto lg:pt-10 z-30">
        {/* Support Section */}
        <div className="">
          <h1 className="font-bold text-xl mb-4">Support</h1>
          {supportLinks.map((link, index) => (
            <p key={index} className="mb-1">
              {link.text}
            </p>
          ))}
        </div>

        {/* Destinations Section */}
        <div>
          <h1 className="font-bold text-xl mb-4">Destinations</h1>
          {destinations.map((destination, index) => (
            <p key={index} className="mb-1">
              {destination.text}
            </p>
          ))}
        </div>

        {/* Master’s Program Section */}
        <div>
          <h1 className="font-bold text-xl mb-4">Master’s Program</h1>
          {mastersPrograms.map((program, index) => (
            <p key={index} className="mb-1">
              {program.text}
            </p>
          ))}
        </div>

        {/* Connect With Us Section */}
        <div>
          <h1 className="font-bold text-xl mb-4">Connect With Us</h1>
          <div className="flex items-center mb-2">
            <FaPhoneAlt />
            <span className="ml-2">+91 83768 95692</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope />
            <span className="ml-2">info@viacertaabroad.com</span>
          </div>
          <h1 className="font-bold text-xl mb-4">Follow Us</h1>

          <div className="flex space-x-4 z-30">
            <Link
              href="https://www.facebook.com/viacertaabroad"
              target="_blank"
            >
              <img
                className="w-10 rounded-full cursor-pointer"
                src="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/105932660/admin/dashboard/"
              target="_blank"
            >
              <img
                className="w-10 rounded-xl cursor-pointer"
                src="https://cdn-icons-png.freepik.com/256/2496/2496097.png?semt=ais_hybrid"
              />
            </Link>

            <a
              href="https://www.instagram.com/viacerta.abroad/"
              target="_blank"
            >
              <img
                className="w-10 rounded-xl cursor-pointer"
                src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="z-10 absolute text-[300px] w-full h-full bottom-0 flex opacity-5 justify-center items-center">
        <span className="">VIACERTA</span>
      </div>
    </footer>
  );
};

export default Footer;

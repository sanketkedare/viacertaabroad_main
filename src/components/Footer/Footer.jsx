import React from "react";
import { destinations, supportLinks } from "./utils";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:h-[450px] bg-[#B9C4FF3B] mt-5 relative overflow-hidden py-10">
      {/* Background Outlined Text */}

      <div className="relative flex flex-col lg:flex-row justify-between lg:justify-evenly   gap-5 lg:w-9/12 w-11/12 m-auto lg:pt-10 z-30">
        {/* Support Section */}
        <div className="">
          <h1 className="font-bold text-xl mb-4">Support</h1>
          {supportLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <p  className="mb-1">
                {link.text}
              </p>
            </Link>
          ))}
        </div>

        {/* Destinations Section */}
        <div>
          <h1 className="font-bold text-xl mb-4">Destinations</h1>
          {destinations.map((destination, index) => (
            <Link href={destination.href} key={index} >
              <p className="mb-1">
                {destination.text}
              </p>
            </Link>
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
                title="fb link"
                alt="facebook"
                loading="lazy"
                src="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/105932660/admin/dashboard/"
              target="_blank"
            >
              <img
                className="w-10 rounded-xl cursor-pointer"
                title="linkedIn link"
                alt="LinkedIn"
                loading="lazy"
                src="https://cdn-icons-png.freepik.com/256/2496/2496097.png?semt=ais_hybrid"
              />
            </Link>

            <a
              href="https://www.instagram.com/viacerta.abroad/"
              target="_blank"
            >
              <img
                className="w-10 rounded-xl cursor-pointer"
                title="Insta link"
                alt="Instagram"
                loading="lazy"
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

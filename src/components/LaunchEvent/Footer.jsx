import React from "react";
import Link from "next/link";

const Footer = ({setFormOpen}) => {
  return (
    <footer className="py-16 bg-[#152347] text-white lg:px-8 text-center flex flex-col gap-2">
      <h2 className="lg:text-4xl text-2xl  font-bold uppercase tracking-wide">
        🚨 Hurry! Applications Close Soon! 🚨
      </h2>
      <p className="mt-4 text-lg font-medium">
        📌 Last Date to Apply: <strong>15 March 2025</strong>
      </p>
      <p className="mt-4 lg:text-xl font-semibold">
        🎯 Limited to 100 Students – Don’t Miss Out!
      </p>

      <button
        onClick={()=>setFormOpen(true)}
        className="mt-8 bg-[#f8b62d] text-[#152347] lg:w-full m-auto w-1/2 py-3 lg:px-8 rounded-lg font-bold shadow-lg 
        hover:bg-[#f6a61d] hover:scale-110 transition duration-300"
        aria-label="Apply now for ViaCerta Abroad"
      >
        📩 APPLY NOW
      </button>
      <div className="flex gap-10 justify-center items-center text-gray-400 ">
        <Link href="/TermsAndCondition">
          <button className="text-sm  cursor-pointer my-5">
            Privacy Policy
          </button>
        </Link>
        <p>|</p>
        <Link href="/TermsAndCondition">
          <button className="text-sm  cursor-pointer my-5">
            Terms and Conditions
          </button>
        </Link>
      </div>

      <small className="mt-8 block text-gray-300 text-sm">
        © 2025 ViaCerta Abroad | All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;

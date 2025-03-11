import React from "react";
import Image from "next/image";
import ApplyNow from "./ApplyNow";

const Footer = () => {
  return (
    <div className="bg-[#152347] text-white py-10 text-sm">
      <div className="flex flex-col items-center justify-center gap-5 w-10/12 m-auto">
        <Image src="/viaCerta-logo.png" alt="ViaCerta Logo" width={150} height={50} className="bg-white rounded-full" />
        <div className="text-center ">
          📞 Need Help? Contact us at <a href="mailto:support@viacerta.com" className="underline">Info@viacertaabroad.com</a> or call +91 83768 95692.
        </div>
        <div className="text-center font-bold">
          🚀 Don’t Miss Out! Limited Slots Available
        </div>
        <ApplyNow/>
        <div className="text-center">
          Transform your medical career today – apply now and claim your scholarship!
        </div>
      </div>
    </div>
  );
};

export default Footer;

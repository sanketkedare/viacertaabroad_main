import React from "react";
import ServicesForm from "./ServicesForm";

const ServiceHero = () => {
  return (
    <div className="relative h-[75vh] bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/services/banner.jpg"
          className="w-full h-full object-cover opacity-30"
          alt="Service Banner"
        />
      </div>
      
      <div className="relative flex flex-col items-start w-11/12 h-full z-10 space-y-4 p-4 lg:p-8">
      <div className="text-[#fff]  h-full flex flex-col lg:justify-center justify-start gap-14">
      <h1 className=" text-3xl lg:text-5xl font-bold lg:w-2/3 lg:text-left text-center">Your Doctor Journey Starts Here – <b className="text-[#E00012]">Georgia</b> is Waiting</h1>
        <h3 className="text-lg lg:text-2xl w-3/5">
          Study MBBS in Georgia with top universities, low fees, and payment plans your parents will thank you for.
        </h3>
      </div>
       
        <ServicesForm />
      </div>

     
    </div>
  );
};

export default ServiceHero;

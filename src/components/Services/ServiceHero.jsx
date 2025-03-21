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

      <div className="flex flex-col lg:grid lg:grid-cols-3  w-11/12  h-full z-10 space-y-4 p-4 lg:p-8">
        <div className="col-span-2  text-[#fff] w-full  h-full flex flex-col lg:justify-center justify-start gap-10 lg:gap-14">
          <h1 className=" text-3xl lg:text-5xl font-bold  lg:text-left text-center">
            Your Doctor Journey Starts Here –
            <b className="px-2 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMn1T2oZhgq-DFLdq3frStPIEXl7gEOabU6g&s')] bg-cover bg-center text-transparent bg-clip-text">
              Georgia
            </b>
             is Waiting
          </h1>
          <h3 className="text-sm lg:text-2xl lg:w-4/5 lg:text-left text-center">
            Study MBBS in Georgia with top universities, low fees, and payment
            plans your parents will thank you for.
          </h3>
        </div>

        <ServicesForm />
      </div>
    </div>
  );
};

export default ServiceHero;

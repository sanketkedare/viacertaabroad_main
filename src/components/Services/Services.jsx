import React from "react";
import ServiceHero from "./ServiceHero";
import OurServices from "./OurServices";

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      {/*
       */}
      <h1 className="lg:text-[40px] text-2xl font-bold my-10 text-center">
        We’re With
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
          You
        </span>
        At{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
          Every
        </span>
        Step:
      </h1>
      <OurServices />
    </div>
  );
};

export default Services;

import React, { useState } from "react";
import QA from "./QA.json";
import { whyChoose } from "./utils";
import { Quote } from "lucide-react";
import SuccessStories from "../LaunchEvent/SuccessStories";
import SignIn from "../SignIn-Pop-Up/SignIn";
import ApplicationForm from "../HeroSection/ApplicationForm";

const AboutPage = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const COMPANY_IMAGE_URL =
    "https://manchtech.com/en/wp-content/uploads/elementor/thumbs/iStock-1134390372-min-q7pkp7npp8844l8q95aexutvzqchsu9zlcuy24ldgw.jpg";

  return (
    <div className="lg:w-9/12 w-11/12 py-10 m-auto flex flex-col gap-20">
      {/* Welcome to ViaCerta Abroad */}
      <section className="lg:min-h-screen ">
        <p className="lg:text-3xl text-2xl text-[#152347]">
          <b className="text-[#2c21b6]">ViaCerta Abroad</b> Welcomes You!{" "}
        </p>
        <div className="flex flex-col justify-center items-center gap-10 lg:w-3/5 w-4/5 m-auto mt-10">
          <h1 className="lg:text-4xl text-3xl font-extrabold">
            <b className="text-[#2c21b6]">About</b> Us
          </h1>
          <p className="text-center text-gray-700 text-lg">
            We help you unlock exclusive scholarships and funding opportunities
            to make studying abroad more affordable. Our dedicated team provides
            seamless assistance with visa applications, documentation, and
            university admissions.
          </p>
        </div>
        <img
          src={COMPANY_IMAGE_URL}
          alt="Company Overview"
          className="mt-10 border rounded-xl shadow-lg"
        />
      </section>

      {/* What We Do */}
      <section>
        <p className="lg:text-3xl text-2xl text-[#152347]">
          <b className="text-[#2c21b6]">What </b> We Do?{" "}
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          {QA.map((i) => (
            <div className=" bg-[#152347] lg:p-10 p-5 mt-10 shadow-2xl lg:w-1/3 rounded-xl lg:text-xl">
              <p className="py-4 text-[#f8b62d] lg:text-2xl text-xl mb-1 font-bold">
                {i.q}
              </p>
              <p className="text-[#fff]">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Students Choose ViaCerta */}
      <section className="lg:min-h-screen">
        <p className="lg:text-3xl text-2xl text-[#152347]">
          <b className="text-[#2c21b6]">Why </b> Students Choose ViaCerta?
        </p>
        <div className="lg:w-4/5 m-auto text-center lg:p-10 p-4 rounded-xl lg:mt-20 mt-10 shadow-xl bg-[#f0f4ff]">
          <div className="flex flex-col gap-4 items-center">
            <Quote  className="text-[#2c21b6]" />
            {whyChoose.map((i, index) => (
              <p key={index} className="lg:text-xl  text-[#152347] p-2 italic">
                {i}
              </p>
            ))}
            <Quote className="text-[#2c21b6]" />
          </div>
        </div>
      </section>

      {/* Our Philosophy and Goals */}
      <section>
        <p className="lg:text-3xl text-2xl text-[#152347] mb-10">
        Our <b className="text-[#2c21b6]">Philosophy </b> and Goals
        </p>
        <div className="flex flex-col lg:flex-row  gap-4 my-auto  lg:p-10 p-5 shadow-2xl ">
          <img
            src="https://manchtech.com/en/wp-content/uploads/2023/06/iStock-1262283524-min-1024x683.jpg"
            className="object-contain lg:w-1/2"
          />
          <div className="flex flex-col lg:gap-0 gap-4 lg:w-1/2  lg:text-lg text-sm justify-between text-center">
            <p>
              At <b className="text-[#2c21b6]">ViaCerta Abroad</b>, our
              philosophy revolves around providing equitable access to quality
              education for all aspiring students. We believe that every student
              deserves the opportunity to pursue their academic dreams
              regardless of financial or geographical constraints.
            </p>
            <p>
              Our goal is to bridge the gap between students and world-class
              educational institutions. We aim to simplify the process of
              studying abroad by offering expert guidance, reliable support, and
              exclusive scholarships, making the dream of global education
              attainable and affordable.
            </p>
            <p>
              With integrity, excellence, and empathy at our core, we
              continuously strive to enhance our services, ensuring that every
              student’s journey towards international education is both
              successful and fulfilling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Succesfull Students */}
      <section className="">
        <SuccessStories />
      </section>

      {/* Join Us - Register/Login */}
      <section>
        <p className="lg:text-3xl text-2xl text-[#152347] mb-10 text-center">
          Book Your <b className="text-[#2c21b6]">Seat</b>
        </p>

        <ApplicationForm />

      </section>
      <section className="flex flex-col lg:flex-row lg:gap-20 gap-5 justify-center items-center">
        <p className="lg:text-3xl text-[#152347] text-center">
          <b className="text-[#2c21b6]">Want to Join?</b> Register/Login
        </p>
        <button
          className="lg:text-xl p-2 px-4 bg-[#2c21b6] text-[#fff] font-bold rounded-xl cursor-pointer"
          onClick={() => setSignInOpen(true)}
        >
          Sign in / Log in
        </button>
        {signInOpen && <SignIn setSignInOpen={setSignInOpen} />}

      </section>
    </div>
  );
};

export default AboutPage;

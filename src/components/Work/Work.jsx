"use client";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SingleHero from "../Services/SigleService/SingleHero";
import FAQs from "../About/FAQs";

import workFAQ from "./workFAQ.json";
import LegalInfo from "./LegalInfo";
import HowHelp from "./HowHelp";

const Work = () => {
  const workData = {
    bannerHeading: "Why Just Spend? Start Earning!",
    image:
      "https://s3-alpha-sig.figma.com/img/95b8/a90a/de7392e7d357cf1ec9abc89fa605dce1?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YN-Rxdsx-nL9uwaEw6jiZilihuBKjniJ5K1lJxK1QAdjeEFG6fl62ykx90NP28KOeK3qwQb8Yi771e1knbMKVKbNuc8LNUa2FcLbDd6iYL3zaqcUs45E-UaqxvXLiyA5uIQAAr4fVg2504~k6XyQDeL7DsnWAR59oFPhhCdxXgwZ36zrTLbFWAd8WAxF4bZ7S9Ky70JW3i6R7eG2ahZezcDyEEuVFTQDIyohIibqKJc4JVa9dnsdwEZwsbUabYhYQIM6okxywbUelfBiHl1dsb9My2w2kjopatG3LG4ARjPGXMX1t7r5CamdXGuez~rZnYI3a5-T19xfsAWXQUE4Hw__",

    bannerInfo:
      "Make the most of studying abroad—work part-time, gain experience, and boost your resume!",
    isForm: false,
    buttonText: "Find Jobs & Internships",
    content:
      "Studying abroad is more than just earning a degree, it’s about gaining real-world experience and preparing for a successful future. At ViaCerta, we don’t just help you study abroad, we’re also the only place that offers expert job abroad counseling to help you find the right part-time jobs and internships while studying. Whether you want to gain hands-on experience, earn extra income, or build a strong career foundation, we’ve got you covered. With our guidance, you can find flexible work opportunities that fit your schedule and set you up for long-term success.",
  };

  return (
    <Provider store={store}>
      <Navbar />
      <div className="min-h-screen">
        <SingleHero serviceData={workData} />

        {/* Work Visa  & Legal info */}
        <LegalInfo workData={workData} />

        {/* How Viacerta Helps you */}
        <HowHelp />

        {/* Final */}
        <div className="py-10 flex flex-col items-center gap-5 w-9/12 m-auto">
          <p className="text-center text-xl lg:text-5xl font-bold">
            Ready to Work in your Dream Destination?
          </p>
          <p className="lg:text-2xl ">
            Let ViaCerta help you land the perfect part-time job, internship, or
            full-time job while you study!
          </p>
          <button className="bg-[#E00002] p-3 lg:w-[350px] font-bold rounded-[4px] cursor-pointer lg:m-0 m-auto text-white my-10">
            Find Jobs & Internships Now
          </button>
        </div>
      </div>
      <FAQs faqArray={workFAQ} />
      <Footer />
    </Provider>
  );
};

export default Work;

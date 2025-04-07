"use client";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeroMBBS from "./HeroMBBS";
import IntroMBBS from "./IntroMBBS";
import KeyBenifits from "./KeyBenifits";
import FAQs from "../About/FAQs";
import faq from "./mbbsFaq.json";
import BlogSlider from "../Slider/BlogSlider";
import EligibilityCriteria from "./EligibilityCriteria";

const MBBS = () => {
  const commonData = {
    heroSection: {
      banner:
        "https://res.cloudinary.com/dyp3hukiu/image/upload/v1743841238/viacertaabroad/vumre6w12bku0f2wgave.png",
      flag: "",
      page: {
        banner_text: "Your Gateway to a Global Medical Career!",
        description:
          "Pursue an internationally recognized MBBS degree at top universities worldwide.",
      },
      button: "Start Your MBBS journey ",
    },
    intro: {
      heading: "Why Study MBBS Abroad?",
      content:
        "Studying MBBS abroad is an excellent choice for students who want a high-quality medical education at an affordable cost. Many countries offer medical programs that are globally recognized, ensuring that students have access to international career opportunities.\nAt ViaCerta Abroad, we simplify the entire admission process, making it easier for you to secure a seat in top medical universities without unnecessary stress.",
    },
    benifits: {
      heading: "Key Benefits of Studying MBBS Abroad",
      items: [
        "No Entrance Exams - Many universities accept direct admissions.",
        "Affordable Tuition Fees - Get a world-class education at a fraction of the cost.",
        "Globally Recognized Degree - Accredited by WHO, MCI, ECFMG, and more.",
        "Modern Medical Infrastructure - Advanced labs, research facilities, and practical training.",
        "International Exposure - Diverse student community and global career prospects.",
        "Modern Facilities & Research Opportunities - Advanced laboratories, hospital training, and innovative learning environments.",
      ],
    },
  };
  return (
    <Provider store={store}>
      <Navbar />
      <HeroMBBS obj={commonData.heroSection} />
      <IntroMBBS obj={commonData.intro} />
      <KeyBenifits obj={commonData.benifits} />

      {/* -------- Destinations Here -------------- */}

      {/* Eligibility Criteria */}
      <EligibilityCriteria/>
      
      <FAQs faqArray={faq} />
      <BlogSlider />
      <Footer />
    </Provider>
  );
};

export default MBBS;

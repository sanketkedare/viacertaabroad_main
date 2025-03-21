"use client";

import Head from "next/head";
import FAQs from "@/components/About/FAQs";
import Footer from "@/components/Footer/Footer";
import Frame1 from "@/components/Frames/Frame1";
import Frame2 from "@/components/Frames/Frame2";
import Frame3 from "@/components/Frames/Frame3";
import Frame4 from "@/components/Frames/Frame4";
import Help from "@/components/Help/Help";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Process from "@/components/Process/Process";
import BlogSlider from "@/components/Slider/BlogSlider";
import Testimonials from "@/components/Slider/Testimonials";
import UniversitySlider from "@/components/Slider/UniversitySlider";
import store from "@/Redux/appStore";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full lg:overflow-hidden relative">
        {/* <Head>
          <title>
          Study Abroad & Land Jobs– The ViaCerta Way
        </title>
          <meta name="title" content="Study Abroad & Land Jobs– The ViaCerta Way" />
          <meta
            name="description"
            content="Build your future with ViaCerta! Ace IELTS, TOEFL, GRE. Explore top courses, secure scholarships, get visa guidance & global job opportunities."
          />
        </Head> */}
        <Help />
        <Navbar />
        <HeroSection />
        <Process />
        <UniversitySlider />
        <Frame1 />
        <Testimonials />
        <Frame2 />
        <BlogSlider />
        <Frame3 />
        <FAQs />
        <Frame4 />
        <Footer />
      </div>
    </Provider>
  );
}

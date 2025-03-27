"use client";
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
import Practice from "@/components/Practice/Practice";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full lg:overflow-hidden relative">
        <Help />
        <Navbar />
        <HeroSection />
        {/* <Practice/> */}
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

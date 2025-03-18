"use client"

import FAQs from "@/components/About/FAQs";
import WhyViaCerta from "@/components/About/WhyViaCerta";
import Coundown from "@/components/Coundown/Coundown";
import Footer from "@/components/Footer/Footer";
import Help from "@/components/Help/Help";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Testimonials from "@/components/Slider/Testimonials";
import UniversitySlider from "@/components/Slider/UniversitySlider";
import store from "@/Redux/appStore";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full lg:overflow-hidden relative">
        <Help/>
        <Navbar />
        <HeroSection />
        <Coundown/>
        <Testimonials/>
        <UniversitySlider/>
        <WhyViaCerta />
        <FAQs />
        <Footer />
      </div>
    </Provider>
  );
}

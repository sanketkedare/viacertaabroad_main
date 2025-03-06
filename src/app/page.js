"use client"

import About from "@/components/About/About";
import FAQs from "@/components/About/FAQs";
import WhyViaCerta from "@/components/About/WhyViaCerta";
// import AdSense from "@/components/Ads/AdSense";
import Footer from "@/components/Footer/Footer";
import Help from "@/components/Help/Help";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full lg:overflow-hidden relative">
        <Help/>
        <Navbar />
        <HeroSection />
        {/* <AdSense/> */}
        <About />
        <WhyViaCerta />
        <FAQs />
        <Footer />
      </div>
    </Provider>
  );
}

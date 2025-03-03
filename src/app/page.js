import About from "@/components/About/About";
import FAQs from "@/components/About/FAQs";
import WhyViaCerta from "@/components/About/WhyViaCerta";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full lg:overflow-hidden relative">
      <Navbar/>
      <HeroSection/>
      <About/>
      <WhyViaCerta/>
      <FAQs/>
      <Footer/>
    </div>
  );
}

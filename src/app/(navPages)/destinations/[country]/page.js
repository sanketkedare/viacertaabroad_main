"use client";

import store from "@/Redux/appStore";
import FAQs from "@/components/About/FAQs";
import IndiviualCountry from "@/components/Destination/IndiviualCountry";
import Footer from "@/components/Footer/Footer";
import Frame4 from "@/components/Frames/Frame4";
import Navbar from "@/components/Navbar/Navbar";
import destinations from "@/components/Destination/destinations.json";
import Testimonials from "@/components/Slider/Testimonials";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { X } from "lucide-react";
import ServicesForm from "@/components/Services/ServicesForm";

const page = () => {
  const [countryData, setContryData] = useState(null);
  const { country } = useParams();
  const countryName = country.split("-").join(" ");
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFormOpen(true);
    }, 10000);
  }, []);

  useEffect(() => {
    if (countryName) {
      const data = destinations.find((i) => i.name === countryName);
      console.log(data);
      setContryData(data);
    }
  }, [countryName]);

  return (
    <Provider store={store}>
      {formOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 lg:backdrop-blur-sm">
          <div className="w-[500px]">
            <X
              size={30}
              onClick={() => setFormOpen(false)}
              className="bg-white border rounded-full m-auto"
            />

            <ServicesForm />
          </div>
        </div>
      )}
      <Navbar />
      <div>
        {countryData ? (
          <IndiviualCountry country={countryData} />
        ) : (
          <div className="min-h-screen w-full flex justify-center items-center">
            <p>Please Wait...</p>
          </div>
        )}
      </div>

      <Testimonials />
      <FAQs />
      <Frame4 />
      <Footer />
    </Provider>
  );
};

export default page;

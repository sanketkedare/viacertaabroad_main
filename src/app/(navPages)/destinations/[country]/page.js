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

const page = () => {
  const [countryData, setContryData] = useState(null);
  const { country } = useParams();
  const countryName = country.split("-").join(" ");

  useEffect(() => {
    if (countryName) {
      const data = destinations.find((i) => i.name === countryName);
      console.log(data)
      setContryData(data);
    }
  }, [countryName]);

  return (
    <Provider store={store}>
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
     
      <Testimonials/>
      <FAQs/>
      <Frame4/>
      <Footer />
    </Provider>
  );
};

export default page;

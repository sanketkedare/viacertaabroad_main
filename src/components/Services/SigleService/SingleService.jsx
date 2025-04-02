"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";
import { useParams } from "next/navigation";
import Counseling from "./Counseling";
import UniversitySelection from "./UniversitySelection";
import Addmision from "./Addmision";
import Scollership from "./Scollership";

const SingleService = () => {
  const { service } = useParams();

  console.log(service);

  return (
    <Provider store={store}>
      <Navbar />
      {service === "counselling" ? (
        <Counseling />
      ) : service === "university-selection" ? (
        <UniversitySelection />
      ) : service.includes("application") ? (
        <Addmision />
      ) : service === "scholarship" ? (
        <Scollership />
      ) : (
        <div className="flex h-screen w-full justify-center items-center">
          Not Found
        </div>
      )}
      <Footer />
    </Provider>
  );
};

export default SingleService;

"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";
import { useParams } from "next/navigation";
import Counseling from "./Counseling";
import UniversitySelection from "./UniversitySelection";

const SingleService = () => {
  const { service } = useParams();

  return (
    <Provider store={store}>
      <Navbar />
      {service === "counselling" ? (
        <Counseling />
      ) : service === "university-selection" ? (
        <UniversitySelection />
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

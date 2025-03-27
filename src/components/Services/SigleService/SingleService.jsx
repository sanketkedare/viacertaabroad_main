"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";
import SingleHero from "./SingleHero";

const SingleService = () => {
  
  return (
    <Provider store={store}>
      <Navbar />
      <SingleHero />

      <Footer />
    </Provider>
  );
};

export default SingleService;

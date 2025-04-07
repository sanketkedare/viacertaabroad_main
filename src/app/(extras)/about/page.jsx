"use client"

import AboutPage from "@/components/About/AboutPage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <AboutPage />
      <Footer />
    </Provider>
  );
};

export default page;

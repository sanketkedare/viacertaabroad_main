"use client";

import Exams from "@/components/Exams/Exams";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const Examspage = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Exams />
      <Footer />
    </Provider>
  );
};

export default Examspage;

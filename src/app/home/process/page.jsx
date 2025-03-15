"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Process from "@/components/Process/Process";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Process />
      <Footer />
    </Provider>
  );
};

export default page;

'use client'

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="min-h-screen">[Under Developement]</div>
      <Footer />
    </Provider>
  );
};

export default page;

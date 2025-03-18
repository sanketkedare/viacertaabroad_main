"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const mbbsPage = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="min-h-screen w-9/12 m-auto py-10">
      <p>MBBS Page</p>

      </div>

      <Footer />
    </Provider>
  );
};

export default mbbsPage;

"use client";

import Explore from "@/components/Explore/Explore";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Explore />
        <Footer />
      </div>
    </Provider>
  );
};

export default page;

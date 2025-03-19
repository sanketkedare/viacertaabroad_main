'use client'

import Destinations from "@/components/Destination/Destinations";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const Destinationpage = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Destinations />
      <Footer />
    </Provider>
  );
};

export default Destinationpage;

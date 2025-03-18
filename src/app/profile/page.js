"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import SideProfile from "@/components/Profile/SideProfile";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const ProfilePage = () => 
{
  return (
    <Provider store={store}>
      <Navbar />
      <div className="lg:w-9/12 m-auto mt-10 flex gap-10">
        <SideProfile />
        <ProfileInfo />
      </div>
      <Footer />
    </Provider>
  );
};

export default ProfilePage;

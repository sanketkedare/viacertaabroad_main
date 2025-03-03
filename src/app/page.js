"use client";
import ApplicationForm from "@/components/LaunchEvent/ApplicationForm";
import Eligibility from "@/components/LaunchEvent/Eligibility";
import FAQ from "@/components/LaunchEvent/FAQ";
import Footer from "@/components/LaunchEvent/Footer";
import HeroSection from "@/components/LaunchEvent/HeroSection";
import HIW from "@/components/LaunchEvent/HIW";
import SuccessStories from "@/components/LaunchEvent/SuccessStories";

import Head from "next/head";
import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const ScholarshipLandingPage = () => {
  const [formOpen, setFormOpen] = useState(false);

  const phoneNumber = "+918376895692";
  const WHATSAPP_URL = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <Head>
        <title>100% Scholarship Challenge | ViaCerta Abroad</title>
        <meta
          name="description"
          content="Apply for the 100% Scholarship Challenge and fulfill your study abroad dreams in the UK, Germany, Australia, or Canada."
        />
        <meta
          name="keywords"
          content="scholarship, study abroad, 100% scholarship, international education"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative bg-white text-[#152347] font-sans">
        {formOpen && <ApplicationForm setFormOpen={setFormOpen}/>}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed lg:bottom-10 bottom-4 lg:right-10 right-4 z-50"
        >
          <IoLogoWhatsapp className="text-green-400 text-6xl p-3 bg-white border border-black rounded-full" />
        </a>

        {/* Header with Logo */}
        <header className="flex  justify-center items-center py-4 bg-[#2c31b6] gap-4 md:gap-10 px-4">
          <img
            className="h-16 md:h-24 rounded-xl border bg-white"
            src="/viaCerta-logo.png"
            alt="ViaCerta Logo"
          />
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              ViaCerta Abroad
            </h1>
            <small className="text-white italic  md:text-base">
              Your Study Abroad Dream, We'll Make It Happen
            </small>
          </div>
        </header>

        {/* Main Sections */}
        <HeroSection setFormOpen={setFormOpen} />
        <HIW setFormOpen={setFormOpen} />
        <SuccessStories />
        <Eligibility setFormOpen={setFormOpen} />
        <FAQ setFormOpen={setFormOpen} />
        <Footer setFormOpen={setFormOpen} />
      </div>
    </>
  );
};

export default ScholarshipLandingPage;

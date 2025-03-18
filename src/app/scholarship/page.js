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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "100% Scholarship Challenge",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ViaCerta Abroad",
      "url": "https://yourwebsite.com",
      "logo": "https://yourwebsite.com/viaCerta-logo.png"
    },
    "educationalProgramMode": "Online and Offline",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validThrough": "2025-12-31"
    },
    "hasCourse": [
      {
        "@type": "Course",
        "name": "Bachelor’s Scholarships",
        "description": "100% tuition coverage for Bachelor’s students.",
      },
      {
        "@type": "Course",
        "name": "Master’s Scholarships",
        "description": "Fully funded scholarships for Master's programs."
      }
    ]
  };

  return (
    <>
      <Head>
        <title>100% Scholarship Challenge | Study Abroad with ViaCerta</title>
        <meta
          name="description"
          content="Apply for the 100% Scholarship Challenge and fulfill your study abroad dreams in the UK, Germany, Australia, or Canada. Get a fully-funded education with ViaCerta Abroad."
        />
        <meta
          name="keywords"
          content="scholarship, study abroad, 100% scholarship, international education, tuition-free study, abroad scholarships"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="100% Scholarship Challenge | Study Abroad with ViaCerta" />
        <meta
          property="og:description"
          content="Join the ViaCerta Abroad 100% Scholarship Challenge and get a fully funded education in top universities worldwide."
        />
        <meta property="og:image" content="https://yourwebsite.com/scholarship-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/scholarship" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="100% Scholarship Challenge | Study Abroad with ViaCerta" />
        <meta
          name="twitter:description"
          content="Apply now for a fully-funded scholarship in the UK, Germany, Australia, and Canada."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/scholarship-banner.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <div className="relative bg-white text-[#152347] font-sans">
        {formOpen && <ApplicationForm setFormOpen={setFormOpen} />}

        {/* WhatsApp Floating Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed lg:bottom-10 bottom-4 lg:right-10 right-4 z-50"
        >
          <IoLogoWhatsapp className="text-green-400 text-6xl p-3 bg-white border border-black rounded-full" />
        </a>

        {/* Header */}
        <header className="flex justify-center items-center py-4 bg-[#2c31b6] gap-4 md:gap-10 px-4">
          <img
            className="h-16 md:h-24 rounded-xl border bg-white"
            src="/viaCerta-logo.png"
            alt="ViaCerta Abroad - Study Abroad Scholarships"
          />
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              ViaCerta Abroad
            </h1>
            <small className="text-white italic md:text-base">
              Your Study Abroad Dream, We'll Make It Happen
            </small>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <HeroSection setFormOpen={setFormOpen} />
          <HIW setFormOpen={setFormOpen} />
          <SuccessStories />
          <Eligibility setFormOpen={setFormOpen} />
          <FAQ setFormOpen={setFormOpen} />
        </main>

        {/* Footer */}
        <Footer setFormOpen={setFormOpen} />
      </div>
    </>
  );
};

export default ScholarshipLandingPage;

import React from "react";
import Head from "next/head";

const Eligibility = ({setFormOpen}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "Eligibility Criteria",
    "description": "Find out who can apply for international study programs through ViaCerta Abroad. Check eligibility requirements for Bachelor's, Master's, and Ph.D. programs.",
    "educationalLevel": ["Bachelor's Degree", "Master's Degree", "Ph.D."],
    "applicableCountry": ["India"],
    "eligibleRegion": ["UK", "Germany", "Australia", "Canada", "USA", "France"],
    "identifier": "eligibility-criteria-via-certa",
  };

  return (
    <>
      <Head>
        <title>Eligibility Criteria | Study Abroad with ViaCerta</title>
        <meta
          name="description"
          content="Check the eligibility criteria for studying abroad with ViaCerta. Find out if you qualify for Bachelor's, Master's, or Ph.D. programs in top universities worldwide."
        />
        <meta name="keywords" content="study abroad, eligibility criteria, international education, scholarships, student visa requirements" />
        <meta property="og:title" content="Eligibility Criteria | Study Abroad with ViaCerta" />
        <meta
          property="og:description"
          content="Find out who can apply for international study programs through ViaCerta Abroad. Check eligibility for Bachelor's, Master's, and Ph.D. programs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/eligibility" />
        <meta property="og:image" content="https://yourwebsite.com/images/eligibility-banner.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <section
        className="py-12 px-6 sm:px-12 lg:px-20 xl:px-32 text-center bg-gradient-to-r from-[#152347] to-[#1d2951] text-white"
        aria-labelledby="eligibility-title"
      >
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 id="eligibility-title" className="text-3xl sm:text-4xl font-bold tracking-wide">
            🎓 Eligibility Criteria
          </h1>
          <h2 className="mt-4 text-md sm:text-lg font-medium text-gray-300">📌 Who Can Apply?</h2>

          {/* Eligibility List */}
          <ul className="mt-6 space-y-3 sm:space-y-4 text-base sm:text-lg font-semibold text-left sm:grid sm:grid-cols-2 gap-4">
            {[
              "Indian students aged 18-35 years",
              "Planning to study Bachelor’s, Master’s, or Ph.D. abroad",
              "Must have completed higher secondary education (12th grade) for undergraduate applications",
              "For Master’s & Ph.D.: A bachelor’s/master’s degree in a relevant field",
              "Strong academic performance (minimum 75% or equivalent GPA)",
              "Valid English proficiency test scores (IELTS, TOEFL, PTE, or equivalent)",
              "Clear career goals and a well-written Statement of Purpose (SOP)",
              "No previous visa rejection for the chosen study destination",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                ✅ <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Additional Info */}
          <div className="mt-8 bg-[#1f3a60] p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">🌍 Countries Eligible</h3>
            <p className="mt-2 text-gray-300">UK, Germany, Australia, Canada, USA, France, and more.</p>
          </div>

          {/* CTA Button */}
          <button
           onClick={()=>setFormOpen(true)}
            className="mt-8 bg-[#f8b62d] text-[#152347] py-3 px-6 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-lg font-bold shadow-lg hover:bg-[#f6a61d] hover:scale-105 transition duration-300"
            aria-label="Check your eligibility now"
          >
            📩 Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Eligibility;

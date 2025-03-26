import React from "react";

const TermsAndConditions = () => {
  return (
    <>
     {/* Header with Logo */}
     <header className="flex flex-col md:flex-row justify-center items-center py-4 bg-[#2c31b6] gap-4 md:gap-10 px-4">
          <img
            className="h-16 md:h-24 rounded-xl border bg-white"
            src="/viaCerta-logo.png"
            alt="ViaCerta Logo"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-white">ViaCerta Abroad</h1>
            <p className="text-white italic text-sm md:text-base">Your Study Abroad Dream, We'll Make It Happen</p>
          </div>
        </header>

    <section className="py-16 px-8 bg-gray-100 text-gray-800 text-center" aria-labelledby="terms-title">
      <h1 id="terms-title" className="text-3xl font-bold text-[#2c31b6] mb-6">📜 Terms & Conditions</h1>
      
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <ul className="space-y-4">
          {[
            { title: "Eligibility", text: "Open to students aged 18 to 35 applying for bachelor's, master's, or Ph.D. programs abroad." },
            { title: "Application Process", text: "Participants must register via the official Acromy Abroad platform and submit required documents." },
            { title: "Scholarship Coverage", text: "Covers full/partial tuition fees; other costs depend on university policies." },
            { title: "Selection Criteria", text: "Academic excellence, test scores, and an exceptional Statement of Purpose (SOP)." },
            { title: "Commitments", text: "Students must maintain academic performance and adhere to university policies." },
            { title: "Fraud Prevention", text: "False information leads to disqualification; the selection committee's decision is final." }
          ].map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#152347]">{index + 1}️⃣ {item.title}</h3>
              <p className="mt-1">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
};

export default TermsAndConditions;

import React from "react";
import ApplyNow from "./ApplyNow";

const WhatUnique = () => {
  const whyUniqueAns = [
    "🔥 Beyond Just a Scholarship – Get laptops, free FMGE prep, and mentorship",
    "🔥 Personalized Career Guidance – Not just money, but expert help in planning your future",
    "🔥 100% Transparency – Fair selection process based on merit",
    "🔥 Real-Life Success Stories – Join the growing community of successful scholars",
  ];

  const faqs = [
    {
      question: "Who can apply for this scholarship?",
      answer:
        "✅ Any 12th-class student or NEET dropper preparing for medical entrance exams.",
    },
    {
      question: "Is there any refund if I don’t clear the test?",
      answer:
        "🚫 No, the registration fee is non-refundable as it covers administrative costs.",
    },
    {
      question: "How will I receive my scholarship?",
      answer:
        "🎓 Scholarships will be directly credited to your tuition fees or provided as financial aid.",
    },
    {
      question: "When will the test be conducted?",
      answer: "📅 The exact date will be announced after registration closes.",
    },
  ];

  const termsConditions = [
    "✔ The registration fee is non-refundable under any circumstances.",
    "✔ Students must provide accurate details during registration.",
    "✔ The scholarship is non-transferable and can only be used by the selected student.",
    "✔ ViaCerta reserves the right to change scholarship terms if necessary.",
    "✔ Selection decisions are final and cannot be challenged.",
  ];

  const privacyPolicy = [
    "✔ Your personal details are 100% safe & secure.",
    "✔ We DO NOT share your data with third parties.",
    "✔ The information collected is only used for the scholarship program.",
  ];

  return (
    <div className="min-h-screen w-10/12 py-10 m-auto">
      <div className="flex flex-col justify-center items-center h-full gap-10">
        <p className="text-4xl font-bold text-center mb-5">
          🌟 What Makes This Program Unique?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium">
          {whyUniqueAns.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              {item}
            </div>
          ))}
        </div>

        <div className="text-xl font-bold text-center mt-10">
          📍 Register Now – Take Control of Your Future!
        </div>
        <ApplyNow />

        <div className="w-full mt-10">
          <p className="text-4xl font-bold text-center mb-5">
            🤔 Frequently Asked Questions (FAQs)
          </p>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                <p className="font-bold">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 my-20">
          <div>
            <p className="text-3xl font-bold mb-5">📜 Terms & Conditions</p>
            <div className="space-y-3">
              {termsConditions.map((term, index) => (
                <div key={index}>{term}</div>
              ))}
            </div>
          </div>

          <div>
          

          <p className="text-3xl font-bold mb-5">📜 Terms & Conditions</p>
          <div className="space-y-3">
              {privacyPolicy.map((policy, index) => (
                <div key={index}>{policy}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatUnique;

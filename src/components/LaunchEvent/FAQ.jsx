import React from "react";

const FAQ = ({setFormOpen}) => {
  return (
    <section className="py-16 px-8 text-center" aria-labelledby="faq-title">
      <h1 id="faq-title" className="text-3xl font-bold text-[#2c31b6]">FAQs</h1>
      
      <div className="mt-6 space-y-6 max-w-3xl mx-auto text-left">
        {[
          { question: "Who can apply?", answer: "🎯 Anyone between 18 to 35 years applying for higher education abroad." },
          { question: "Does this cover all expenses?", answer: "🎯 Mostly tuition fees; other costs depend on university policies." },
          { question: "Is there an application fee?", answer: "🎯 No, applying is free, but universities may have fees." },
          { question: "Do I need IELTS/TOEFL?", answer: "🎯 Yes, unless eligible for an exemption." },
          { question: "Can I choose my university?", answer: "🎯 We provide a list of partnered universities." },
          { question: "What happens if I don't win?", answer: "🎯 We assist in finding partial scholarships and loans." },
          { question: "Will I get a guaranteed job?", answer: "🎯 We provide post-graduation job assistance." }
        ].map((faq, index) => (
          <details key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <summary className="font-bold cursor-pointer">❓ {faq.question}</summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>

      <button
      onClick={()=>setFormOpen(true)}
        className="mt-8 bg-[#f8b62d] text-[#152347] py-3 lg:px-8 px-5 rounded-lg font-bold shadow-lg hover:bg-[#f6a61d]"
        aria-label="Get a free consultation now"
      >
        📩 Apply Now
      </button>
    </section>
  );
};

export default FAQ;

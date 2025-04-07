import React from 'react';
import { CheckCircle } from 'lucide-react';

const criteriaList = [
  "Minimum 17 years of age",
  "60% or above marks in Physics, Chemistry, and Biology",
  "NEET qualification proof (mandatory)",
  "English Proficiency proof",
  "University application form"
];

const EligibilityCriteria = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Prepared to have that white coat and a stethoscope around your neck?
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-6">
        Alright then, let’s see a list of eligibility criteria to make sure you’re all set for your MBBS journey abroad. You must fulfill these requirements if you want your name on that international degree.
      </p>

      <ul className="space-y-4">
        {criteriaList.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 text-base md:text-lg">
            <CheckCircle className="text-green-600 mt-1" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mt-8 rounded-md">
        <strong>Note:</strong> Many universities have their separate eligibility criteria as well. Make sure that you do proper research about that university and your destination for your higher studies.
      </div>
    </div>
  );
};

export default EligibilityCriteria;

import React from 'react';

const ApplicationProcess = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md w-10/12 mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Application Process
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-6">
        Now that you have checked that you are eligible, let’s help you fill out the application form.
        This might sound like a complex thing, but we’ll make it easy for you. Just follow the steps below:
      </p>

      <ol className="list-decimal list-inside space-y-4 text-gray-700 text-base md:text-lg">
        <li>
          <strong>Research & Select a University:</strong> Explore top universities based on tuition fees and eligibility criteria.
        </li>
        <li>
          <strong>Check Admission Requirements:</strong> Make sure you meet all the requirements, academic and entrance criteria.
        </li>
        <li>
          <strong>Prepare and Submit Documents:</strong> Common required documents include:
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full border border-gray-200 text-sm md:text-base mt-2">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="border px-4 py-2 text-left">#</th>
                  <th className="border px-4 py-2 text-left">Document</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Academic Transcripts (10th & 12th grade certificates)',
                  'NEET qualification proof',
                  'Passport (valid for at least 18 months)',
                  'Recent passport-sized photographs',
                  'Medical fitness certificate',
                ].map((doc, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{doc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <strong>Admission Confirmation:</strong> Once accepted, you’ll receive an admission confirmation letter from the university.
        </li>
        <li>
          <strong>Apply for a Student Visa:</strong> Submit the required visa application documents to the respective country's embassy.
        </li>
        <li>
          <strong>Travel & Accommodation:</strong> Book flights, confirm housing arrangements, and get pre-departure guidance.
        </li>
        <li>
          <strong>Start Your Medical Journey:</strong> Fly abroad, complete university formalities, and begin your medical education.
        </li>
      </ol>
    </div>
  );
};

export default ApplicationProcess;

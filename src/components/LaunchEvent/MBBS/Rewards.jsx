import React from "react";
import ApplyNow from "./ApplyNow";

const Rewards = () => {
  return (
    <div className="min-h-screen bg-[#152347]">
      <div className="flex justify-center items-center lg:w-10/12 h-full m-auto py-10 ">
        <div className="w-full lg:p-10 p-2 bg-white rounded-2xl shadow-2xl">
          <p className="lg:text-3xl text-xl pt-10 text-center font-bold text-[#152347] mb-10">
            🏆 Scholarship Rewards
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-800 border-collapse">
              <thead>
                <tr className="bg-[#4F46E5] text-white lg:text-xl font-bold">
                  <th className="p-4">Rank</th>
                  <th className="p-4">Scholarship Benefits</th>
                  <th className="p-4">Extra Perks</th>
                </tr>
              </thead>
              <tbody className="lg:text-lg">
                <tr className="border-b">
                  <td className="p-4">Top 10</td>
                  <td className="p-4">100% Scholarship on tuition fees</td>
                  <td className="p-4">
                    Laptop + FMGE Preparation + Mentorship
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Rank 11-50</td>
                  <td className="p-4">50% Scholarship</td>
                  <td className="p-4">FMGE Prep + Career Guidance</td>
                </tr>
                <tr>
                  <td className="p-4">Rank 51-100</td>
                  <td className="p-4">25% Scholarship</td>
                  <td className="p-4">Career Roadmap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 text-center lg:text-xl font-bold">
            <p>📍 Register Now – Don’t Miss This Opportunity!</p>
            <div className="mt-5">
              <ApplyNow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;

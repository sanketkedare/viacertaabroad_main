import React from 'react';
import ApplyNow from './ApplyNow';

const Eligibility = () => {
  return (
    <div className='m-auto p-6 min-h-screen '>
      <div className='w-10/12 m-auto mt-10 p-10 bg-white rounded-2xl shadow-2xl'>
        <p className='text-3xl text-center font-bold text-[#152347] mb-10 py-10'>🎯 Eligibility & Registration</p>

        <div className='text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <p className='font-bold text-2xl mb-4 text-[#4F46E5]'>✅ Who Can Apply?</p>
            <ul className='space-y-3 text-gray-800'>
              <li>✔️ 12th-class students preparing for NEET</li>
              <li>✔️ Medical aspirants who have taken a drop year</li>
            </ul>
          </div>

          <div>
            <p className='font-bold text-2xl mb-4 text-[#4F46E5]'>✅ How to Apply?</p>
            <ul className='space-y-3 text-gray-800'>
              <li>✔️ Click on Register Now</li>
              <li>✔️ Fill in your details and complete the payment</li>
              <li>✔️ Appear for the Online Test & Interview</li>
            </ul>
          </div>

          <div>
            <p className='font-bold text-2xl mb-4 text-[#4F46E5]'>✅ Registration Fee:</p>
            <p className='text-gray-800 text-xl'>✔️ ₹4,999/-</p>
          </div>

          <div>
            <p className='font-bold text-2xl mb-4 text-[#4F46E5]'>✅ Last Date to Apply:</p>
            <p className='text-gray-800 text-xl'>[Deadline Date]</p>
          </div>

          <div>
            <p className='font-bold text-2xl mb-4 text-[#4F46E5]'>✅ Mode of Exam:</p>
            <p className='text-gray-800 text-xl'>Online & Offline</p>
          </div>
        </div>
        <div className='mt-10 text-center'>
            <p className='text-xl p-2 font-extrabold'>📍 Register Now – Secure Your Spot!,</p>

          <ApplyNow />
        </div>
      </div>
    </div>
  );
};

export default Eligibility;

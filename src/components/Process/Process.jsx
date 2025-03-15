import React from 'react';

const steps = [
  { step: '1', title: 'Consultation', description: 'Discuss your study abroad goals and get expert guidance.' },
  { step: '2', title: 'Application', description: 'Submit applications to top universities with our assistance.' },
  { step: '3', title: 'Visa Processing', description: 'Get help with visa documentation and approval.' },
  { step: '4', title: 'Accommodation & Travel', description: 'Secure housing and plan your journey.' },
  { step: '5', title: 'Arrival & Support', description: 'Get settled with job assistance and local guidance.' }
];

const Process = () => {
  return (
    <div className='min-h-screen py-16 bg-gray-100'>
      <div className='w-10/12 mx-auto text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6'>Our Process</h2>
        <p className='text-lg text-gray-600 mb-10'>A step-by-step guide to your study abroad journey.</p>
      </div>
      
      <div className='w-10/12 mx-auto flex flex-col gap-8 md:gap-12'>
        {steps.map((item, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all'>
            <div className='w-12 h-12 flex items-center justify-center bg-blue-600 text-white text-xl font-bold rounded-full'>{item.step}</div>
            <div>
              <h3 className='text-xl font-semibold text-gray-700'>{item.title}</h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className='mt-12 text-center'>
        <a href='/contact' className='px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all'>Start Your Journey</a>
      </div>
    </div>
  );
};

export default Process;

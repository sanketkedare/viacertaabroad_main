import React from 'react';

const services = [
  { title: 'Visa Assistance', description: 'Guiding you through the visa process with expert support.' },
  { title: 'University Admissions', description: 'Helping you get into top global universities.' },
  { title: 'Scholarships', description: 'Finding the best scholarships to reduce your study costs.' },
  { title: 'Accommodation', description: 'Helping you find comfortable and affordable housing.' },
  { title: 'Job Assistance', description: 'Providing part-time and full-time job support.' }
];

const Services = () => {
  return (
    <div className='min-h-screen py-16 '>
      <div className='w-10/12 mx-auto text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6'>Our Services</h2>
        <p className='text-lg text-gray-600 mb-10'>We provide end-to-end support to help students achieve their study abroad dreams.</p>
      </div>
      
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all'>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>{service.title}</h3>
            <p className='text-gray-600'>{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className='mt-12 text-center'>
        <a href='/contact' className='px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all'>Get Started</a>
      </div>
    </div>
  );
};

export default Services;
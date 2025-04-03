import React from 'react'

const Benefits = ({studyAbroadContent}) => {
  return (
    <section className="w-10/12 m-auto my-16">
    <h2 className="lg:text-[50px] text-2xl font-bold text-center">
      {studyAbroadContent.title}
    </h2>
    <p className="text-center lg:text-2xl p-3">{studyAbroadContent.subtitle}</p>

    {/* Benefits Section */}
    <div className="grid lg:grid-cols-3 gap-10 py-10">
      {studyAbroadContent.benefits.map((benefit, index) => (
        <div key={index} className={`p-6   ${index % 2 === 0 ? 'bg-[#FDF3E7]' : 'bg-[#F7FAFE]'} shadow-2xl flex flex-col gap-4`}>
          <span className="bg-[#E00002] text-white p-4 w-15 h-15 flex justify-center items-center rounded-full">{benefit.icon}</span>
          <h3 className="text-xl font-semibold">{benefit.title}</h3>
          <p className="mt-2 text-gray-600 text-justify">{benefit.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Benefits

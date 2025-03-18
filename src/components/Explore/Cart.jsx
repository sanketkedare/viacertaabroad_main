import React from 'react'

const Cart = ({program}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white grid grid-cols-3 p-6">
    {/* Left Section - Image & Basic Details */}
    <div className="col-span-1 flex flex-col gap-3">
      <div className="h-40 w-full rounded-lg overflow-hidden bg-gray-100">
        <img
          src={program.imageUrl}
          alt="Course"
          className="object-contain h-full w-full"
        />
      </div>
      <p className="text-2xl text-[#152347] font-bold">{program.name}</p>
      <p className="text-gray-600">Online: {program.duration.online}</p>
      <p className="text-gray-600">On-campus: {program.duration.onCampus}</p>
    </div>

    {/* Right Section - Course Info */}
    <div className="col-span-2 flex flex-col justify-between">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5">
        {[
          { label: "University Name", value: program.universityName },
          { label: "Destination Country", value: program.destinationCountry },
          { label: "Post Study Work Visa", value: program.postStudyWorkVisaEligibility },
          { label: "On-campus Tuition Fee", value: program.tuitionFees.onCampus },
          { label: "Online Tuition Fee", value: program.tuitionFees.online },
        ].map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="text-lg font-semibold text-[#152347]">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-end mt-4">
        <button className="border cursor-pointer border-[#2c31b6] text-[#2c31b6] py-2 px-4 rounded-lg hover:bg-[#e5e5ea] font-bold transition">
          Check Availability
        </button>
        <button className="bg-[#2c31b6] cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-[#1f2687] transition">
          Know More
        </button>
      </div>
    </div>
  </div>
  )
}

export default Cart

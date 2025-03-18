import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Explore() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const API = "/api/courses";
    const response = await fetch(API);
    const JSON = await response.json();
    JSON && setData(JSON);
  };

  const program = {
    name: "Master of Business Administration",
    admissionClosingDate: "15th March",
    imageUrl:
      "https://ik.imagekit.io/upgrad1/abroad-images/pathway/169/bannerImages/ESDES20Y2DAF.png?tr=f-jpg,pr-true,q-100,w-360",
    universityName: "D'Amore McKim School of Business, Northeastern University",
    destinationCountry: "USA",
    postStudyWorkVisaEligibility: "Up to 12 Months",
    tuitionFees: {
      onCampus: "~ USD 83,536",
      online: "INR 5,25,000",
    },
    duration: {
      online: "11 Months",
      onCampus: "1 Year 6 Months",
    },
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col items-center gap-6 w-10/12 m-auto p-6">
      <h1 className="text-center text-4xl font-bold mt-6 text-[#152347]">
        Accelerated Pathway Programs
      </h1>

      {/* Filters */}
      <p className="text-lg font-medium text-gray-600 cursor-pointer hover:text-[#2c31b6]">
        Change Preferences
      </p>

      {/* Courses List */}
      <div className="flex flex-col w-full gap-6">
        {data.length > 0 ? (
          <div>Data is available</div>
        ) : (
          <Cart program={program} />
        )}
      </div>
    </div>
  );
}

export default Explore;

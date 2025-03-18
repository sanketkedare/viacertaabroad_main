import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const DashBoard = () => {
  const [studentsData, setStudentsData] = useState([]);

  const STUDENTS_API = "/api/our_students/";

  const getdata = async () => {
    try {
      const response = await fetch(STUDENTS_API);
      const JSON = await response.json();
      console.log(JSON);
      setStudentsData(JSON?.ourStudent || []);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="min-h-screen px-4 w-full md:w-4/5 flex flex-col gap-10 mb-10">
      
      {/* Profile Notification */}
      <div className="bg-gradient-to-b from-[#152347] to-[#4520b3] text-white flex flex-col gap-3 p-5 rounded-xl shadow-lg">
        <strong className="text-lg">Complete your profile</strong>
        <p>Your profile is still pending. Complete now to get recommended courses.</p>
        <button className="p-2 flex gap-3 items-center justify-center hover:bg-gray-200 px-4 rounded-xl bg-white text-[#152347] w-[200px] font-bold cursor-pointer transition-all">
          Start now
          <FaAngleRight />
        </button>
      </div>

      {/* University Slider */}
      <div className="shadow-xl rounded-xl overflow-hidden bg-white">
        {/* Heading */}
        <div className="flex justify-between p-4 items-center border-b">
          <strong className="text-lg">View Popular Universities</strong>
          <button className="flex gap-2 items-center text-blue-600 hover:underline">
            View all <FaAngleRight />
          </button>
        </div>

        {/* Slider Placeholder */}
        <div className="p-5 min-h-[300px] flex items-center justify-center text-gray-500">
          [University Slider Coming Soon]
        </div>
      </div>

      {/* Our Students */}
      <div className="shadow-xl rounded-xl overflow-hidden bg-white">
        {/* Heading */}
        <div className="flex justify-between p-4 items-center border-b">
          <strong className="text-lg">Our Students</strong>
          <button className="flex gap-2 items-center text-blue-600 hover:underline">
            View all <FaAngleRight />
          </button>
        </div>

        {/* Slider */}
        <div className="p-5">
          {studentsData.length > 0 ? (
            <div className="overflow-x-auto scrollbar-hide my-5">
              <div className="flex gap-5 snap-x snap-mandatory">
                {studentsData.map((student) => (
                  <div
                    key={student?._id}
                    className="border min-w-[250px] min-h-[250px] rounded-xl shadow-lg flex flex-col snap-center bg-white"
                  >
                    {/* Student Image */}
                    <div className="w-full h-40 overflow-hidden rounded-t-xl">
                      <img
                        src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg"
                        className="object-cover w-full h-full"
                        alt="Student"
                      />
                    </div>

                    {/* Student Info */}
                    <div className="p-4 text-sm">
                      <p className="font-bold text-lg text-gray-800">{student?.name}</p>
                      <p className="text-md text-gray-600">{student?.university}</p>
                      <p className="text-gray-500">{student?.country}</p>
                      <p className="mt-2 text-gray-700 text-sm">
                        {student?.message ? student?.message.slice(0, 100) + "..." : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-5 text-gray-500 text-center">Data is not available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

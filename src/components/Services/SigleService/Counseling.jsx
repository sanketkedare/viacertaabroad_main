import React from "react";
import SingleHero from "./SingleHero";
import { FaUniversity } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { MdAutoMode } from "react-icons/md";

const Counseling = () => {
  const image =
    "https://res.cloudinary.com/dyp3hukiu/image/upload/v1743146472/viacertaabroad/qwxttg68dbkosppvxd89.png";
  const counsalingData = {
    bannerHeading: "Tell Us Your Dreams, And We’ll Show You The Best Path",
    bannerInfo:
      "Find the right university, course, and destination with personalized counselling.",
    formTitle: "Get FREE Counselling Today!",
    buttonTest: "Book Your free Session",
    isForm: true,
    content:
      "Choosing the right course, study destination, and university is a crucial decision, and we make sure you get it right! Our 2-Stage Counseling process ensures you not only explore your dream choices but also get expert advice based on your profile and future goals. No generic suggestions—just personalized guidance that aligns with your ambitions.",
  };
  return (
    <div>
      <SingleHero serviceData={counsalingData} />
      <div className="w-10/12 m-auto text-[24px] text-center my-16">
        {counsalingData.content}
      </div>
      <div>
        <h1 className="lg:text-[50px] text-3xl font-bold mt-10 text-center">
          Key{" "}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Benifits
          </span>
        </h1>
        <p className="text-center my-5 mb-10 text-2xl">
          Navigate the complex admission process with ease and confidence.
        </p>
        <div className="flex h-[400px] lg:grid-cols-4 gap-0">
          <div className=" relative w-1/4 flex flex-col gap-3 p-10 bg-black text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145519/viacertaabroad/kghh3e970j9hcbjzyndv.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <FaUniversity
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold">
                <span className="text-[#E00002]">Personalized</span> University
                & Course Selection
              </p>

              {/* Description */}
              <p className="text-xl">
                110 hours of focused learning. A study plan as unique as your
                dream score.
              </p>
            </div>
          </div>
          <div className=" relative w-1/4 flex flex-col gap-3 p-10 bg-[#E00002] text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145518/viacertaabroad/enx5jchsphiqiqinyvcx.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <FaRegUser
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold w-3/5">Profile-Based Guidance</p>

              {/* Description */}
              <p className="text-xl">
                We analyze your academics, preferences, and career goals before
                giving suggestions.
              </p>
            </div>
          </div>
          <div className=" relative w-1/4 flex flex-col gap-3 p-10 bg-black text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145519/viacertaabroad/kghh3e970j9hcbjzyndv.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <RiPresentationFill
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold">One-On-One Expert Session</p>

              {/* Description */}
              <p className="text-xl">
                Get personal counselling with our seasoned educational experts.
              </p>
            </div>
          </div>
          <div className=" relative w-1/4 flex flex-col gap-3 p-10 bg-[#E00002] text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145518/viacertaabroad/enx5jchsphiqiqinyvcx.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <MdAutoMode
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold w-3/5">Hassle-Free Process</p>

              {/* Description */}
              <p className="text-xl">
                Skip the confusion, leave the hard part for us, and focus on
                what’s best for you.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full h-screen bg-[#1E1E8C] relative text-white py-4">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="9/12 m-auto relative  z-10">
            <p className="text-center lg:text-[50px] py-5 font-bold">
              Our 2-Stage Counselling
            </p>

            <p className="text-center text-[20px] w-2/3 m-auto">
              Seamlessly navigate the intricate admission process with clarity
              and confidence. Our expert guidance ensures a smooth journey from
              application to acceptance.
            </p>

            <div className="flex w-10/12 mx-auto mt-10">
              <div className="w-2/5 flex">
                <div className="border p-4 rounded-full">
                  <div className="w-80 h-80 border rounded-full flex justify-center items-center overflow-hidden">
                    <img
                      src={image}
                      className="object-cover w-full h-full"
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section - Content */}
              <div className="w-3/5  p-4 flex flex-col items-center gap-4">
                <div className="flex border w-full p-4 gap-3 rounded-xl">
                  <FaUniversity className="bg-[#E00012] text-white rounded-full p-4 shadow-md w-15 h-15" />
                  <div>
                    <p className="text-[30px] font-bold">
                      Understanding Your Choices{" "}
                    </p>
                    <p className="w-4/5">
                      We first listen to YOU. Tell us your dream university,
                      preferred country, and study plans.
                    </p>
                  </div>
                </div>
                <div className="flex border w-full p-4 gap-3 rounded-xl">
                  <FaRegUser className="bg-[#E00012] text-white rounded-full p-4 shadow-md  w-20 h-15" />
                  <div>
                    <p className="text-[30px] font-bold">
                      Profile Assessment & Expert Advice{" "}
                    </p>
                    <p className="w-4/5">
                      Our experts analyze your academic profile, career goals,
                      and eligibility to suggest the best possible course,
                      university, and country for your future success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;

import React from "react";
import SingleHero from "./SingleHero";
import { FaRegUser } from "react-icons/fa6";
import {FileBadge2, LaptopMinimalCheck } from "lucide-react";
import { GiShinyPurse } from "react-icons/gi";
import Frame4 from "@/components/Frames/Frame4";

const UniversitySelection = () => {
  const counsalingData = {
    bannerHeading: "Wondering Which University Is Right For You?",
    banner:
      "https://res.cloudinary.com/dyp3hukiu/image/upload/v1743154506/viacertaabroad/nkyjf4f6ulfrpptefan9.png",
    bannerInfo:
      "We’ll match you with the best options, based on your goals, budget, and what feels right for you.",
    isForm: false,
    content:
      "With thousands of universities worldwide, choosing the right fit for you can be a little overwhelming. That’s where we come in! Our expert-driven university selection ensures you get the best options tailored to your academic background, career goals, and financial plan. Whether you have a dream university in mind or need recommendations, we help you make an informed choice—no guesswork, just smart decisions!",
  };
  return (
    <div>
      <SingleHero serviceData={counsalingData} />
      <div className="w-10/12 m-auto lg:text-[24px] text-xl text-center my-16">
        {counsalingData.content}
      </div>
      <div>
        <h1 className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
          What Makes{' '}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            This Easier For You?
          </span>
        </h1>
        <p className="text-center my-5 mb-10 lg:text-2xl">
          Navigate the complex admission process with ease and confidence.
        </p>
        <div className="lg:flex lg:h-[400px] gap-0">
          <div className=" relative lg:w-1/4 flex flex-col gap-3 p-10 bg-black text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145519/viacertaabroad/kghh3e970j9hcbjzyndv.png"
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
              <p className="text-2xl font-bold w-2/3">
                Personalized Shortlisting
              </p>

              {/* Description */}
              <p className="text-xl">
                We filter the universities that match your profile and
                preferences.
              </p>
            </div>
          </div>
          <div className=" relative lg:w-1/4 flex flex-col gap-3 p-10 bg-[#E00002] text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145518/viacertaabroad/enx5jchsphiqiqinyvcx.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <FileBadge2
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold w-3/5">Smart Recommendations</p>

              {/* Description */}
              <p className="text-xl">
                Get insights on rankings, job prospects, and acceptance rates.
              </p>
            </div>
          </div>
          <div className=" relative lg:w-1/4 flex flex-col gap-3 p-10 bg-black text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145519/viacertaabroad/kghh3e970j9hcbjzyndv.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <GiShinyPurse
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold w-2/3">
                Budget-friendly Options
              </p>

              {/* Description */}
              <p className="text-xl">
                Get personal counselling with our seasoned educational experts.
              </p>
            </div>
          </div>
          <div className=" relative lg:w-1/4 flex flex-col gap-3 p-10 bg-[#E00002] text-white  overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743145518/viacertaabroad/enx5jchsphiqiqinyvcx.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Background"
            />

            {/* Content Wrapper */}
            <div className="relative flex flex-col gap-4 z-10">
              {/* Icon */}
              <LaptopMinimalCheck
                className="text-[#E00012] bg-white rounded-full p-4 shadow-md"
                size={55}
              />

              {/* Title */}
              <p className="text-2xl font-bold w-3/5">Maximised Success Rate</p>

              {/* Description */}
              <p className="text-xl">
                We suggest the universities where you have the highest chance of
                admission.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <p className="lg:text-[50px] text-3xl font-bold mt-10 text-center">
            How{" "}
            <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
              Will We Help?
            </span>
          </p>
          <p className="text-center my-5 mb-10 lg:text-2xl">
            Three easy and interactive steps to make your selection process
            easy.
          </p>

          <div className=" w-10/12 m-auto grid lg:grid-cols-3 gap-4 py-5">
            <div className=" h-[400px] rounded-xl shadow-2xl overflow-hidden">
              <div className="h-[200px] flex flex-col gap-2">
                <img
                  src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743157697/viacertaabroad/wlnh4f9h9hfrnqantabr.png"
                  className="object-cover lg:h-full w-full"
                />
                <div className="p-2 px-4">
                  <p className="text-[28px] text-[#1E1E8C] font-bold">
                    Understanding Your Preferences
                  </p>
                  <p className="text-xl">
                    We discuss your academic background, budget, preferred
                    country, and career goals.
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-[400px] rounded-xl shadow-2xl overflow-hidden">
              <div className="h-[200px]">
                <img src={counsalingData.banner} className=" h-full" />
                <div className="p-2 px-4 flex flex-col gap-3">
                  <p className="text-[28px] text-[#1E1E8C] font-bold">
                    University Shortlisting
                  </p>
                  <p className="text-xl">
                    Our experts will analyse the eligibility criteria, job
                    opportunities, and scholarships for your best fit.
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-[400px] rounded-xl shadow-2xl overflow-hidden">
              <div className="h-[200px] w-full ">
                <img
                  src="https://res.cloudinary.com/dyp3hukiu/image/upload/v1743157697/viacertaabroad/zjlwzmt2kgzz9o1mbo72.png"
                  className="object-cover h-full w-full"
                />
                <div className="p-2 px-4 flex flex-col gap-3">
                  <p className="text-[28px] text-[#1E1E8C] font-bold">
                    Decision Support
                  </p>
                  <p className="text-xl">
                    Compare your top choices with our experts' advice and make
                    the correct decision with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame4 heading={"Take This Small Step Towards Your Dreams!"} info={"Your correct option is just a click away. Let’s find your perfect choice."} />

    </div>
  );
};

export default UniversitySelection;

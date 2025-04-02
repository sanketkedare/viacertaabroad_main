import React from "react";
import SingleHero from "./SingleHero";
import { FaRegUser } from "react-icons/fa6";
import { FileBadge2 } from "lucide-react";
import { GiShinyPurse } from "react-icons/gi";

const Addmision = () => {
  const addmisionData = {
    bannerHeading:
      "Stressed About University Applications? Let’s Make It Effortless",
    banner:
      "https://res.cloudinary.com/dyp3hukiu/image/upload/v1743154506/viacertaabroad/nkyjf4f6ulfrpptefan9.png",
    bannerInfo:
      "All the way from perfecting your application to securing an admission– it’s all on us! \nStart Your Application",
    isForm: false,
    buttonText: "Start Your Application",
    content:
      "The University application process can be overwhelming, we know– Essays, SOPs, deadlines, and so much paperwork. But don’t worry, we’ll simplify it for you. Our expert admission support will ensure your application is polished, error-free, and submitted on time. We make the stressful task easy for you.",
  };
  return (
    <div>
      <SingleHero serviceData={addmisionData} />
      <div className="w-10/12 m-auto lg:text-[24px] text-xl text-center my-16">
        {addmisionData.content}
      </div>
      <div>
        <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
          Why This Process{" "}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Is Simple With Us?
          </span>
        </p>
        <p className="text-center my-5 mb-10 lg:text-2xl">
          Navigate the complex admission process with ease and confidence.
        </p>

        <div className="lg:flex lg:h-[400px] gap-0">
          <div className=" relative lg:w-1/3 flex flex-col gap-3 p-10 bg-black text-white  overflow-hidden">
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
                University Application Strategy
              </p>

              {/* Description */}
              <p className="text-xl">
                We guide you through the entire application process step by
                step.
              </p>
            </div>
          </div>

          <div className=" relative lg:w-1/3 flex flex-col gap-3 p-10 bg-[#E00002] text-white  overflow-hidden">
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
              <p className="text-2xl font-bold w-3/5">Error-Free Submissions</p>

              {/* Description */}
              <p className="text-xl">
                Avoid common mistakes in the documents that could cost you
                admission.
              </p>
            </div>
          </div>

          <div className=" relative lg:w-1/3 flex flex-col gap-3 p-10 bg-black text-white  overflow-hidden">
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
              <p className="text-2xl font-bold w-2/3">Deadline Tracking</p>

              {/* Description */}
              <p className="text-xl">
                Get personal counselling with our seasoned educational experts.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
            How{" "}
            <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
              Will We Help?
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Addmision;

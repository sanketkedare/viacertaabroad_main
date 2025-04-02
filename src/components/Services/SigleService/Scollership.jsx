import React from "react";
import SingleHero from "./SingleHero";
import FAQs from "@/components/About/FAQs";

const Scollership = () => {
  const scollershipData = {
    bannerHeading:
      "Worried About Study Abroad Expenses? \nLet’s Make It Affordable.",
    banner:
      "https://res.cloudinary.com/dyp3hukiu/image/upload/v1743154506/viacertaabroad/nkyjf4f6ulfrpptefan9.png",
    bannerInfo:
      "Get expert guidance on finding and applying for the best scholarships.",
    isForm: false,
    buttonText: "Find My Scholarship",
    content:
      "Studying abroad doesn’t have to drain your savings! Scholarships can help you ease your financial burden. But finding the right one and applying for it successfully can be a tricky and tough job. Get merit-based, need-based, country-specific scholarships that align with your profile so you can focus on your future, not the expenses.",
  };

  const availableScholarships = [
    {
      name: "DAAD Scholarship",
      country: "USA",
      info: "A highly sought-after German scholarship covering tuition, living costs, and sometimes travel expenses. Enquire Now! for postgraduate students in various fields.",
      image:
        "https://www.historyhit.com/app/uploads/bis-images/5150130/Statue-of-Liberty-e1632495792514-1576x1074.jpg",
    },
    {
      name: "Eiffel Excellence Scholarship",
      country: "France",
      info: "Funded by the French government, this scholarship is designed for top international students pursuing master's and PhD programs in France, covering tuition and living expenses. Enquire Now!",
      image:
        "https://www.frenchclass.in/wp-content/uploads/2024/01/cities-in-france-paris-laforet.webp",
    },
    {
      name: "Australia Awards Scholarship",
      country: "Australia",
      info: "A prestigious scholarship funded by the Australian government, providing full tuition, living expenses, and travel allowances for international students. Enquire Now!",
      image:
        "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    },
  ];

  return (
    <div className="min-h-screen">
      <SingleHero serviceData={scollershipData} />
      <div className="w-10/12 m-auto lg:text-[24px] text-xl text-center my-16">
        {scollershipData.content}
      </div>

      {/* Explore Scollerships */}
      <div className="my-10">
        <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
          Explore{" "}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Top Scholarships
          </span>{" "}
          Here!
        </p>
        <p className="text-center my-5 mb-10 lg:text-2xl">
          Navigate the complex admission process with ease and confidence.
        </p>

        <div className="py-10 w-9/12 grid lg:grid-cols-3 gap-4 m-auto">
          {availableScholarships.map((i) => (
            <div
              key={i.name}
              className=" p-5 min-h-[500px] rounded-xl shadow-xl shadow-[#E000122E] text-center relative"
            >
              <div className="h-[200px] w-full overflow-hidden relative">
                <p className="absolute z-10 top-5 p-2 px-4 bg-[#F8C600] rounded-r-xl font-bold text-sm">
                  {i.country}
                </p>
                <img
                  src={i.image}
                  alt={i.name}
                  loading="lazy"
                  title={i.name}
                  className="h-full w-full rounded-xl"
                />
              </div>
              <div className="py-5 flex flex-col gap-2 items-start">
                <p className="text-xl text-[#14247C] font-bold">{i.name}</p>
                <p className="text-left">{i.info}</p>
              </div>

              <button className="absolute bottom-5 left-16 border hover:bg-[#E00002] hover:text-[#ffff] border-[#E00002] w-2/3 m-auto p-2 px-4 font-semibold text-[#E00002] cursor-pointer">
                Enquiry Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Scollership Guide */}
      <div className="py-10">
        <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
          The Ultimate{" "}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Scholarship Guide
          </span>
        </p>
        <p className="text-center my-5 mb-10 lg:text-2xl">
          Study Abroad for Less: Discover Top Scholarships!
        </p>
        <div className="py-5 flex flex-col gap-5 w-10/12 m-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="shadow-2xl">
              <div className="flex items-center gap-2 p-4 w-full bg-[#DCEBFFAD] text-xl font-bold">
                <span className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    title="USA Flag"
                    alt="USA Flag"
                    loading="lazy"
                    src="https://flagpedia.net/data/flags/h80/us.png"
                    className="object-cover w-full h-full"
                  />
                </span>
                USA
              </div>

              <div className="items-center">
                <div className=" grid lg:grid-cols-4 my-5">
                  <div className="col-span-3 p-4 w-10/12">
                    <p className="text-xl text-[#14247C] font-bold">
                      DAAD Scholarship
                    </p>
                    <p>
                      A highly sought-after German scholarship covering tuition,
                      living costs, and sometimes travel expenses. Enquire Now!
                      for postgraduate students in various fields.
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <button className=" border hover:bg-[#E00002] hover:text-[#ffff] border-[#E00002] w-2/3 m-auto p-2 px-4 font-semibold text-[#E00002] cursor-pointer">
                      Enquiry Now
                    </button>
                  </div>
                </div>

                <div className=" grid lg:grid-cols-4 my-5">
                  <div className="col-span-3 p-4 w-10/12">
                    <p className="text-xl text-[#14247C] font-bold">
                      DAAD Scholarship
                    </p>
                    <p>
                      A highly sought-after German scholarship covering tuition,
                      living costs, and sometimes travel expenses. Enquire Now!
                      for postgraduate students in various fields.
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <button className=" border hover:bg-[#E00002] hover:text-[#ffff] border-[#E00002] w-2/3 m-auto p-2 px-4 font-semibold text-[#E00002] cursor-pointer">
                      Enquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQs />
    </div>
  );
};

export default Scollership;

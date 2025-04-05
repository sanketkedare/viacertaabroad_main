import HeroSection from "./HeroSection";
import Table from "./Table";
import { ChevronRight } from "lucide-react";
import React from "react";

const BlogCart = ({ artical }) => {
  return (
    <div className="mb-10 ">
      <div className="flex items-center gap-4 mb-5 lg:w-full w-11/12 m-auto">
        <div className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9] overflow-hidden">
          {/* Optionally insert an image here */}
          {/* <img src="/sachin.jpg" alt="Sachin Chauhan" className="w-full h-full object-cover" /> */}
        </div>
        <div className="">
          <p className="font-semibold">{Number(artical.id)% 2 ===0 ? "Saleen, Sr. Content Writer": "ViaCerta Abroad Editorial Team" }</p>
          <p className="text-sm text-gray-600">viaCerta Abroad</p>
        </div>
      </div>
      <HeroSection artical={artical} />
      <div className="lg:w-full w-11/12 lg:px-2  min-h-screen m-auto lg:mt-10 mt-5 flex flex-col lg:gap-5 gap-2">
        {/* Introduction */}
        {artical.intro && (
          <h3 className="lg:text-[18px] mb-5 text-justify">
            {artical.intro.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h3>
        )}

        {/* Subtopics */}
        <div className="flex flex-col gap-5 mb-10">
          {artical.subtopics &&
            artical.subtopics.map((sub, index) => (
              <div key={index} className="flex flex-col gap-2">
                {/* Subtopic Title */}
                {sub?.title && (
                  <div className="flex items-center gap-2">
                    <h2
                      className={`lg:text-[30px] text-[20px] font-bold ${
                        sub.title === "Conclusion" &&
                        "bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text"
                      }`}
                    >
                      ⚡{sub.title}
                    </h2>
                  </div>
                )}

                {/* Subtopic Intro & Info */}
                {sub?.intro && (
                  <h5 className="lg:text-[18px] text-justify">
                    {sub.intro.split("\n").map((line, index) =>
                      line.includes("<a") || line.includes("<i") ? (
                        <span
                          key={index}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ) : (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      )
                    )}
                  </h5>
                )}

                {sub?.info && <h5 className="lg:text-[18px] text-justify">{sub.info}</h5>}

                {sub?.table && <Table table={sub?.table} />}

                {/* Bullet Points */}
                {sub.bulletpoints && (
                  <ol className="pl-10">
                    {sub.bulletpoints.map((bullet, idx) => (
                      <li key={idx} className="mb-2 flex items-start gap-2">
                        <ChevronRight className="mt-1 text-primary" size={20} />
                        <div>
                          {bullet.title && (
                            <h4 className="font-semibold">{bullet.title}</h4>
                          )}
                          {bullet.info && (
                            <h4 className={`${!bullet.title && "font-bold"} text-justify`}>
                              {bullet.info.split("\n").map((line, index) =>
                                line.includes("<a") || line.includes("<i") ? (
                                  <span
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: line }}
                                  />
                                ) : (
                                  <span key={index} className="my-1">
                                    {line}
                                    <br />
                                  </span>
                                )
                              )}
                            </h4>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                )}

                {sub?.ending && (
                  <p className="text-justify lg:text-[18px] ">
                    {sub.ending.split("\n").map((line, index) =>
                      line.includes("<a") || line.includes("<i") ? (
                        <span
                          key={index}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ) : (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      )
                    )}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCart;

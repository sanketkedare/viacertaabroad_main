import HeroSection from "./HeroSection";
import Table from "./Table";
import { ChevronRight } from "lucide-react";
import React from "react";

const BlogCart = ({ artical }) => {
  return (
    <div className="mb-10 ">
      <HeroSection artical={artical} />
      <div className="lg:w-10/12 px-2 lg:px-0 min-h-screen m-auto lg:mt-20 mt-10 flex flex-col lg:gap-10 gap-5">
        {/* Main Title */}
        <div className="flex items-center gap-2">
          <h1 className="lg:text-[40px] text-[20px] font-bold">
            {artical.title}
          </h1>
        </div>

        {/* Introduction */}
        {artical.intro && <h3 className="lg:text-[18px] text-sm">
          {
            artical.intro.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
        </h3>}

        {/* Subtopics */}
        <div className="flex flex-col gap-5">
          {artical.subtopics &&
            artical.subtopics.map((sub, index) => (
              <div key={index} className="flex flex-col gap-2">
                {/* Subtopic Title */}
                {sub?.title && (
                  <div className="flex items-center gap-2">
                    <h2
                      className={`lg:text-[30px]  font-bold ${
                        sub.title === "Conclusion" &&
                        "bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text"
                      }`}
                    >
                      🔷 {sub.title}
                    </h2>
                  </div>
                )}

                {/* Subtopic Intro & Info */}
                {sub?.intro && (
                  <h5 className="lg:text-[18px]">
                    {sub.intro.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h5>
                )}
                {sub?.info && <h5 className="lg:text-[18px]">{sub.info}</h5>}

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
                            <h4 className={`${!bullet.title && "font-bold"}`}>
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

                {sub?.ending && <p> {sub.ending.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}</p>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCart;

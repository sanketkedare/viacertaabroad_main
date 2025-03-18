import React from "react";
import { blogs } from "./utils";

const BlogsLog = () => {
  return (
    <div className="bg-[#152347] text-white py-12 text-[10px] ">
      <div className="container mx-auto px-6 lg:px-20 lg:w-9/12 lg:text-left text-center">
        <div className="my-12  border-gray-600 ">
          <h3 className="text-lg font-semibold mb-6 underline">
            Study Abroad Important Blogs
          </h3>
          <div className="flex flex-col items-start gap-3">
            {blogs.map(({ title, links }, idx) => (
              <div key={idx} className="">
                <span className="font-semibold mb-4 text-left ">
                  {title} :{" "}
                </span>
                <p className="flex gap-2 flex-wrap">
                  {links.map(({ text, href }, i) => (
                    <span key={i}>
                      <a href={href} className="hover:text-[#f8b62d]">
                        {" "}
                        {text} |
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsLog;

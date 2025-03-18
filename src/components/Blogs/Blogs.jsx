import React from "react";
import dummyData from "../../Utils/blog.json";
import Link from "next/link";

const Blogs = () => {
  const createUrl = (name) => name.split(" ").join('-');
  return (
    <div className="w-9/12 mt-10 m-auto">
      <p className="text-lg font-semibold mb-4">Search Blogs and Articles</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <Link href={`/blogs/${createUrl(dummyData?.title)}`}>
            <div key={index} className=" p-4 rounded-lg shadow-md">
              <img
                src={dummyData.imageUrl}
                alt={dummyData.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-2">{dummyData.title}</h2>
              <p className="text-gray-500 text-sm">By {dummyData.author}</p>
              <p className="mt-2 text-sm">{dummyData.intro}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

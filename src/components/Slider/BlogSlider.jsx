import createUrl from "@/Utils/createUrl";
import blogs from "../Blogs/_blogs.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const BlogSlider = ({ name = "Blogs" }) => {
  const { id } = useParams();

  const reverseArray = blogs
    .sort((a, b) => b.id - a.id)
    .filter((i) => i.id !== id);
  const image =
    "https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg";
  return (
    <div className="lg:my-10 my-28">
      <h1 className="text-center lg:text-[40px] text-2xl font-bold">{name}</h1>
      <p className="lg:w-[800px] w-11/12 text-center m-auto lg:text-[20px] text-xl py-3">
        Our Champions started with just a dream and look where they are now!
        Success stories you would want to be the part of
      </p>

      <div className="overflow-x-scroll lg:w-10/12 w-full m-auto scrollbar-hide">
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center py-6 w-max  m-auto">
          {reverseArray.map((blog, index) => (
            <Link href={`/blogs/${createUrl(blog?.title)}`} key={index}>
              <div className="relative lg:w-[350px] w-[400px] h-[300px] pt-4 px-4 cursor-pointer hover:scale-105 transition-all rounded-md overflow-hidden bg-white shadow-[#E000122E] shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                <div
                  className={`relative h-1/2 w-full ${
                    !blog.thumbnail && "bg-black"
                  }`}
                >
                  {blog.thumbnail && (
                    <img
                      src={blog.thumbnail ? blog.thumbnail : image}
                      alt={blog.title}
                      title={blog.title}
                      className={` lg:w-auto w-full object-cover  ${
                        blog.thumbnail.length === 0 && "opacity-15"
                      } rounded-[12px]`}
                      loading="lazy"
                    />
                  )}
                 
                </div>
                <div className="p-4">
                  <p className="text-blue-900 text-lg font-medium mb-4">
                    {blog.title.slice(0, 60)}...
                  </p>
                  <p className="text-[#E00012] text-sm absolute bottom-2  ">
                    {blog.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;

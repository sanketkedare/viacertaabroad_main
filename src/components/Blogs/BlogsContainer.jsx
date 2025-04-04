"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import blogs from "./_blogs.json";
import BlogCart from "@/components/Blogs/BlogCart";
import BlogSlider from "@/components/Slider/BlogSlider";
import Link from "next/link";
import createUrl from "@/Utils/createUrl";
import BlogFilters from "./BlogFilters";

const BlogsContainer = () => {
  const { id } = useParams();
  const [artical, setArtical] = useState("");

  const findData = () => {
    const data = blogs.find((blog) => createUrl(blog.title) === id);
    setArtical(data);
  };

  useEffect(() => {
    findData();
  }, [id]);

  return (
    <Provider store={store}>
      <Navbar />
      {/* Main Title */}
      <div className="w-10/12 m-auto grid lg:grid-cols-4  gap-10">
        {artical && (
          <div className="col-span-3 py-10">
            <h1 className="lg:text-[45px] text-[25px] font-bold ">
              {artical.title}
            </h1>
            <p className="text-[#000000]">Updated On : {artical.date}</p>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-4  gap-10 lg:w-10/12 m-auto relative">
        <div className="lg:col-span-3 lg:mb-10">
          {!artical ? (
            <div className="w-full h-screen flex items-center justify-center text-3xl font-bold">
              Please Wait...
            </div>
          ) : (
            
            <BlogCart artical={artical} />
          )}
        </div>
        {/* <BlogFilters /> */}
      </div>
      <hr className="w-1/2 shadow shadow-[#E00] m-auto my-10" />
      <BlogSlider name={"Related Blogs"} />

      <div className="flex justify-center w-full my-3">
        <Link href={"/blogs"}>
          <button className="m-auto p-3 px-5 bg-[#E00] text-[#fff] rounded-[14px] font-bold cursor-pointer hover:bg-[#ee6700]">
            View All blogs
          </button>
        </Link>
      </div>

      <Footer />
    </Provider>
  );
};

export default BlogsContainer;

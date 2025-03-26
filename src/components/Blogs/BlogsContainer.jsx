"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import blogs from "./_blogs.json";
import BlogCart from "@/components/Blogs/BlogCart";
import BlogSlider from "@/components/Slider/BlogSlider";
import Link from "next/link";

const BlogsContainer = () => {
  const [artical, setArtical] = useState("");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const pathname = usePathname();

  const findData = () => {
    const arr = pathname.split("/");
    const title = arr[arr.length - 1].split("-").join(" ");
    const artical = blogs.find((i) => i.title === title);
    setArtical(artical);
  };

  useEffect(() => {
    findData();
  }, [currentUrl]);

  return (
    <Provider store={store}>
      <Navbar />
      {!artical ? (
        <div className="w-full h-screen flex items-center justify-center text-3xl font-bold">
          Please Wait...
        </div>
      ) : (
        <BlogCart artical={artical} />
      )}
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

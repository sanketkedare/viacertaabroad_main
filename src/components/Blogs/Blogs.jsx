import React from "react";
import Link from "next/link";
import blogs from "../Blogs/_blogs.json"

const Blogs = () => {
  const createUrl = (name) => name.split(" ").join('-');
  const image = 'https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg'

  return (
    <div className="w-9/12 mt-10 m-auto">
      <p className="text-lg font-semibold mb-4">Search Blogs and Articles</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {blogs.map((blog, index) => (
          <Link href={`/blogs/${blog.id}/${createUrl(blog?.title)}`}>
          <div key={index} className='relative w-full h-[300px] cursor-pointer hover:scale-105 transition-all rounded-md overflow-hidden bg-white shadow-[#E000122E] shadow-[0_0_30px_rgba(0,0,0,0.2)]'>
              <div className='relative h-1/2 w-full'>
                  <img src={blog.thumbnail ? blog.thumbnail : image} alt='Blog' className='h-full object-cover'/>
              </div>
              <div className='p-4'>
                  <p className='text-blue-900 text-lg font-medium mb-4'>{blog.title.slice(0,60)}...</p>
                  <p className='text-[#E00012] text-sm absolute bottom-2  '>{blog.date}</p>
              </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

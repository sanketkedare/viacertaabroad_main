import React from 'react';
import blogs from "../Blogs/_blogs.json"
import Link from 'next/link';



const BlogSlider = ({name = "Blogs"}) => {
    const createUrl = (title) =>title.split(" ").join('-') 
    const image = 'https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg'
    return (
        <div className='lg:my-10 my-28'>
            <h1 className='text-center text-[40px] font-bold'>{name}</h1>
            <p className='lg:w-[800px] w-11/12 text-center m-auto text-[20px] py-3'>Our Champions started with just a dream and look where they are now! Success stories you would want to be the part of</p>
           
           <div className='overflow-x-scroll lg:w-10/12 w-full m-auto scrollbar-hide'>
           <div className='flex flex-col lg:flex-row gap-6 justify-center items-center py-6 w-max  m-auto'>
                {blogs.reverse().map((blog, index) => (
                    <Link href={`/blogs/${createUrl(blog?.title)}`}  key={index}>
                    <div className='relative lg:w-[280px] w-[400px] h-[300px] cursor-pointer hover:scale-105 transition-all rounded-md overflow-hidden bg-white shadow-[#E000122E] shadow-[0_0_30px_rgba(0,0,0,0.2)]'>
                        <div className='relative h-1/2 w-full'>
                            <img src={blog.image ? blog.image : image} alt='Blog' className='h-full object-cover'/>
                            <div className='absolute top-2 right-2 bg-[#E00012] text-white text-xs px-3 py-1 rounded-md'>{blog.country}</div>
                        </div>
                        <div className='p-4'>
                            <p className='text-blue-900 text-lg font-medium mb-4'>{blog.title.slice(0,60)}...</p>
                            <p className='text-[#E00012] text-sm absolute bottom-2  '>{blog.date}</p>
                        </div>
                    </div></Link>
                ))}
            </div>
           </div>
        </div>
    );
};

export default BlogSlider;

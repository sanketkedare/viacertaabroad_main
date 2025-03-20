import React from 'react';

const BlogSlider = () => {
    const image = 'https://s3-alpha-sig.figma.com/img/3202/d7bb/cb82dc39ec39c2b4ab76fe441687bac6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gh4g~VJkoq-TR4DphZwLIWtL0jOOZxdnK9QtUu1KYcOtntNhISZ4TqXnzV9QIJp~23teaa~X8Akoki4dRPVZnykPnUfAklYjOOcmNum9o0AS-qFB7yREWz7cCxwUr8t3ZZ4ueNfMmGxO6TKPEwWrdt9QkRrTqBItZhcKMmyzhvcIGVin7U~yb7wgVkHWbpFC5LcIkIzl-vBPbkh08TBShYozBtxRyj07iIbXKfUjYqVKxzqWxKtiRRtBa~MP7EYFMFPmzZ4ghl6uZGG6jb7DNyiThrugnm3iqQuwbC4eWBB98Gcan8LlTk6sKK639oaXUqGIzRpkxKEi76TXGsjnlA__'
    const blogs = [
        {
            name: 'Take a peek at the world-class universities on your future roadmap.',
            date: '12 Jan 2025',
            image: '/path/to/image.jpg', // Replace with your image path
            country: 'Study In UK'
        },
        {
            name: 'Discover the best programs for your bright future.',
            date: '20 Feb 2025',
            image: '/path/to/image.jpg',
            country: 'Study In USA'
        },
        {
            name: 'Top institutions to enhance your learning experience.',
            date: '15 Mar 2025',
            image: '/path/to/image.jpg',
            country: 'Study In Canada'
        },
        {
            name: 'Explore the best opportunities around the globe.',
            date: '10 Apr 2025',
            image: '/path/to/image.jpg',
            country: 'Study In Australia'
        },
        {
            name: 'Take a peek at the world-class universities on your future roadmap.',
            date: '12 Jan 2025',
            image: '/path/to/image.jpg', // Replace with your image path
            country: 'Study In UK'
        },
        {
            name: 'Discover the best programs for your bright future.',
            date: '20 Feb 2025',
            image: '/path/to/image.jpg',
            country: 'Study In USA'
        },
        {
            name: 'Top institutions to enhance your learning experience.',
            date: '15 Mar 2025',
            image: '/path/to/image.jpg',
            country: 'Study In Canada'
        },
        {
            name: 'Explore the best opportunities around the globe.',
            date: '10 Apr 2025',
            image: '/path/to/image.jpg',
            country: 'Study In Australia'
        },
    ];

    return (
        <div className='my-10'>
            <h1 className='text-center text-[40px] font-bold'>Blogs</h1>
            <p className='w-[800px] text-center m-auto text-[20px] py-3'>Our Champions started with just a dream and look where they are now! Success stories you would want to be the part of</p>
           
           <div className='overflow-x-scroll w-10/12 m-auto scrollbar-hide'>
           <div className='flex gap-6 justify-center py-6 w-max'>
                {blogs.map((blog, index) => (
                    <div key={index} className='w-[280px] h-[354px] rounded-md overflow-hidden bg-white shadow-[#E000122E] shadow-[0_0_30px_rgba(0,0,0,0.2)]'>
                        <div className='relative'>
                            <img src={image} alt='Blog' className='w-full object-cover'/>
                            <div className='absolute top-2 right-2 bg-[#E00012] text-white text-xs px-3 py-1 rounded-md'>{blog.country}</div>
                        </div>
                        <div className='p-4'>
                            <p className='text-blue-900 text-lg font-medium mb-4'>{blogs[0].name}</p>
                            <p className='text-[#E00012] text-sm'>{blog.date}</p>
                        </div>
                    </div>
                ))}
            </div>
           </div>
           
        </div>
    );
};

export default BlogSlider;

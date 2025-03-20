import React from 'react'

const Frame2 = () => {
  return (
    <div className='lg:w-[90%] lg:h-[427px] h-[700px] bg-[#14247C] rounded-[12px] m-auto relative overflow-hidden'>
      {/* Background Outlined Text */}
      <div className='absolute text-[250px] w-full h-full bottom-0 flex items-end  opacity-10'>
        <span className='outlined-text'>VIACERTA</span>
      </div>
      <div className='text-[#fff] flex flex-col lg:justify-center h-full lg:w-3/5 p-10 lg:px-16 gap-5'>
        <h1 className='text-[48px] lg:text-left text-center'>Abroad isn’t Just a Place, It’s a Mindset.</h1>
        <h3 className='text-[24px]'>Live Bigger! Live Your Dreams</h3>
        <button className="bg-[#E00012] lg:w-[250px] h-[50px] text-white text-[20px] rounded-[4px] z-10 cursor-pointer">
        Let's Get you Abroad.
      </button>
      </div>
      <img className='absolute bottom-0 right-0  w-[600px]' src='/frame/image2.png' />
    </div>
  )
}

export default Frame2

import React from 'react'

const Frame1 = () => {
  return (
    <div className='w-[90%] h-[427px] bg-[#14247C] rounded-[12px] m-auto relative overflow-hidden'>
      {/* Background Outlined Text */}
      <div className='absolute text-[250px] w-full h-full bottom-0 flex items-end  opacity-10'>
        <span className='outlined-text'>VIACERTA</span>
      </div>
      <div className='text-[#fff] flex flex-col justify-center h-full w-3/5 p-10 px-16 gap-5'>
        <h1 className='text-[48px]'>Soft Launch Your Best Life With ViaCerta</h1>
        <h3 className='text-[24px]'>We help you go global.</h3>
        <button className="bg-[#E00012] w-[191px] h-[50px] text-white text-[20px] rounded-[4px] z-10 cursor-pointer">
        Explore now
      </button>
      </div>
      <img className='absolute bottom-0 right-0  w-[700px]' src='/frame/image1.png' />
    </div>
  )
}

export default Frame1

import React from 'react' 

const Frame1 = () => {
  return (
    <div className='lg:w-[90%] lg:h-[427px] h-[700px] bg-[#14247C] rounded-[12px] m-auto relative overflow-hidden'>
      {/* Background Outlined Text */}
      <div className='absolute text-[250px]  w-full h-full bottom-0 flex items-end  opacity-10'>
        <span className='outlined-text text-wrap' >VIACERTA</span>
      </div>
      <div className='text-[#fff] flex flex-col lg:justify-center h-full lg:w-3/5 p-10 lg:px-16 lg:gap-5 gap-10'>
        <h1 className='lg:text-[48px] text-4xl lg:text-left text-center'>Soft Launch Your Best Life With ViaCerta</h1>
        <h3 className='text-[24px] lg:text-left text-center'>We help you go global.</h3>
        <button className="bg-[#E00012] lg:w-[191px] h-[50px] text-white text-[20px] rounded-[4px] z-10 cursor-pointer">
        Explore now
      </button>
      </div>
      <img loading='lazy' alt='viacerta students' title='students' className='absolute bottom-0 right-0  w-[700px]' src='/frame/image1.png' />
    </div>
  )
}

export default Frame1

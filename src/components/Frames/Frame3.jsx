import React from 'react'

const Frame3 = () => {
  return (
    <div className='lg:w-[90%] lg:h-[427px] h-[750px] bg-[#14247C] rounded-[12px] m-auto relative overflow-hidden'>
      {/* Background Outlined Text */}
      <div className='absolute text-[250px] w-full h-full bottom-0 flex items-end  opacity-10'>
        <span className='outlined-text'>VIACERTA</span>
      </div>
      <div className='text-[#fff] flex flex-col lg:justify-center h-full lg:w-3/5 p-10 lg:px-16 gap-5'>
        <h1 className='lg:text-[48px] text-3xl lg:text-left text-center'>Learn Smarter. Earn Faster. Ready to Win Both?</h1>
        <h3 className='lg:text-[24px] text-xl lg:w-2/3 lg:text-left text-center'>Gain knowledge, stack your skills, and your wallet — all at once.</h3>
        <button className="bg-[#E00012] lg:w-[251px] h-[50px] text-white text-[20px] rounded-[4px] z-10 cursor-pointer">
        Click Learn Earn Repeat
      </button>
      </div>
      <img className='absolute lg:top-36 top-56 lg:right-1 right-24  lg:w-[400px]' src='/frame/image32.png' />

      <img className='absolute bottom-0 lg:right-2/12 w-[400px]' src='/frame/image31.png' />

    </div>
  )
}

export default Frame3

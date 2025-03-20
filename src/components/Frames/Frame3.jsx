import React from 'react'

const Frame3 = () => {
  return (
    <div className='w-[90%] h-[427px] bg-[#14247C] rounded-[12px] m-auto relative overflow-hidden'>
      {/* Background Outlined Text */}
      <div className='absolute text-[250px] w-full h-full bottom-0 flex items-end  opacity-10'>
        <span className='outlined-text'>VIACERTA</span>
      </div>
      <div className='text-[#fff] flex flex-col justify-center h-full w-3/5 p-10 px-16 gap-5'>
        <h1 className='text-[48px]'>Learn Smarter. Earn Faster. Ready to Win Both?</h1>
        <h3 className='text-[24px] w-2/3'>Gain knowledge, stack your skills, and your wallet — all at once.</h3>
        <button className="bg-[#E00012] w-[251px] h-[50px] text-white text-[20px] rounded-[4px] z-10 cursor-pointer">
        Click Learn Earn Repeat
      </button>
      </div>
      <img className='absolute top-28 right-1  w-[400px]' src='/frame/image32.png' />

      <img className='absolute bottom-0 right-2/12 w-[400px]' src='/frame/image31.png' />

    </div>
  )
}

export default Frame3

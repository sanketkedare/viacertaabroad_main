import React from 'react'
import ApplicationForm from '../HeroSection/ApplicationForm'

const Frame4 = () => {
  return (
    <div className='w-[90%] h-[427px] bg-[#14247C] rounded-[12px] m-auto relative overflow-hidden'>
      {/* Background Outlined Text */}
      <div className='absolute text-[250px] w-full h-full bottom-0 flex items-end  opacity-10'>
        <span className='outlined-text'>VIACERTA</span>
      </div>
      <div className='text-[#fff] flex flex-col justify-normal h-full w-3/5 p-10 px-16 gap-5'>
        <h1 className='text-[48px]'>Hey You, Your Future Is Calling–Let’s Get You Abroad</h1>
        <h3 className='text-[24px] w-2/'>Answer the Call, your future shouldn’t be on hold.</h3>
      </div>

      <ApplicationForm />
    

    </div>
  )
}

export default Frame4

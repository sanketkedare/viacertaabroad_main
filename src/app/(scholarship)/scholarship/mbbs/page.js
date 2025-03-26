'use client'

import Eligibility from '@/components/LaunchEvent/MBBS/Eligibility'
import Footer from '@/components/LaunchEvent/MBBS/Footer'
import HeroSection from '@/components/LaunchEvent/MBBS/HeroSection'
import Rewards from '@/components/LaunchEvent/MBBS/Rewards'
import SelectionProcess from '@/components/LaunchEvent/MBBS/SelectionProcess'
import WhatUnique from '@/components/LaunchEvent/MBBS/WhatUnique'
import WhyApply from '@/components/LaunchEvent/MBBS/WhyApply'
import React from 'react'

const MedicalScolership = () => {
  return (
    <div className=' min-h-screen bg-[#fff]'>
      <HeroSection/>
      <WhyApply/>
      <Eligibility/>
      <Rewards/>
      <SelectionProcess/>
      <WhatUnique/>
      <Footer/>
    </div>
  )
}

export default MedicalScolership

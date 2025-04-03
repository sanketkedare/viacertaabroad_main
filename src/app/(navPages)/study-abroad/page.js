'use client'

import FAQs from '@/components/About/FAQs'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import BlogSlider from '@/components/Slider/BlogSlider'
import Testimonials from '@/components/Slider/Testimonials'
import StudyAbroad from '@/components/Study-Abroad/StudyAbroad'
import store from '@/Redux/appStore'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return (
    <Provider store={store}>
    <Navbar />
    <StudyAbroad/>
    <Testimonials />
    <BlogSlider/>
    <FAQs />
    <Footer />
  </Provider>
  )
}

export default page

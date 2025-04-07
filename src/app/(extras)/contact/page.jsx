'use client'

import FAQs from '@/components/About/FAQs'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import BlogSlider from '@/components/Slider/BlogSlider'
import store from '@/Redux/appStore'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <Contact/>
      <BlogSlider/>
      <FAQs/>
      <Footer/>
    </Provider>
  )
}

export default page

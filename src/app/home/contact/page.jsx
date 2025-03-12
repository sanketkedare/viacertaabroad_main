'use client'

import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import store from '@/Redux/appStore'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <Contact/>
      <Footer/>
    </Provider>
  )
}

export default page

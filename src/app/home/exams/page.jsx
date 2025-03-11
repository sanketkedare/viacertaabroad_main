'use client'

import Navbar from '@/components/Navbar/Navbar'
import store from '@/Redux/appStore'
import React from 'react'
import { Provider } from 'react-redux'

const Examspage = () => {
  return (
    <Provider store={store}>
        <Navbar/>
      Exam Page
    </Provider>
  )
}

export default Examspage

'use client'
import Artical from '@/components/Exams/Artical'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import store from '@/Redux/appStore'
import { useParams } from 'next/navigation'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => 
{

  
  return (
    <Provider store={store}>
        <Navbar/>
        <Artical/>
       
        <Footer/>
    </Provider>
  )
}

export default page

import React from 'react'

const WhyViaCerta = () => 
{
    const data = [
        {
            title:"",
            info:"",
            image:""
        },
        {
            title:"",
            info:"",
            image:""
        }, {
            title:"",
            info:"",
            image:""
        },
    ]
  return (
    <div className='my-10 py-10 '>
        <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
        Why Choose {" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
        ViaCerta Abroad?
        </span>
      </p>
      <p className="py-4 lg:text-2xl text-center">
      Your study abroad success, our priority.
      </p>
      <div className='w-9/12 m-auto grid lg:grid-cols-3 gap-4'>
      {
        data.map((i)=>(
            <div className='border'></div>
        ))
      }

      </div>
      
    </div>
  )
}

export default WhyViaCerta

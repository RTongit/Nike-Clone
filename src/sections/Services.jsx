import React from 'react'
import { services } from '../constants'
const Services = () => {
  return (
    <div className='padding bg-gray-100 flex lg:flex-row flex-col justify-center items-center gap-10'>

      {services.map((temp,index)=>(
        <div key={index} className='flex flex-col items-start bg-white shadow-2xl padding rounded-xl hover:scale-105 transition-all duration-500 max-h-[388px]'>

          <div className='rounded-full border-8 border-amber-600 p-1.5 bg-amber-600'><img src={temp.imgURL} alt="icons" /></div>
          <h3 className='mt-2 text-3xl font-medium'>{temp.label}</h3>
          <p className='text-gray-600 xl:text-lg mt-6 mb-12'>{temp.subtext}</p>

        </div>))}

    </div> 
  )
} 

export default Services

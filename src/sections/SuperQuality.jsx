import React from 'react'
import Button from '../Components/button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section className='padding bg-gray-100 flex justify-center gap-15'>

     <div className='flex flex-col items-start w-[40%]'>
      <h1 className='text-5xl font-medium'>We Provide You <span className='text-amber-600'>Super</span> <br /> 
     <span className='text-amber-600'> Quality</span> Shoes </h1>
      <p className='text-gray-600 xl:text-lg mt-6'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='text-gray-600 xl:text-lg mt-6 mb-6'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button content="View Details"/>
     </div>

     <div>
      <img src={shoe8} alt="product Detail" />
     </div>
     
    </section>
  )
}

export default SuperQuality

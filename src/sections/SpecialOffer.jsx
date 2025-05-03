import React from 'react'
import Button from '../Components/button'
import offer from '../assets/images/offer.svg'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return ( 
<section className='padding bg-gray-100 flex justify-start gap-15 max-xl:flex-col-reverse'>

<div>
 <img src={offer} alt="offer" />
</div>

<div className='flex flex-col items-start'>
 <h1 className='text-5xl font-medium'><span className='text-amber-600'>Special</span> Offer </h1>
 <p className='text-gray-600 xl:text-lg mt-6'>
Embark on a Shopping journey that redefines your experience with unbeatable deals.From premiere selections to incredible savings we offer unparalled value that sets us apart 
   </p>
   <p className='text-gray-600 xl:text-lg mt-6 mb-6'>
  Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations.Your journey with us is nothing short of exceptional 
   </p>
   <Button content="Shop Now" iconURL={arrowRight}/>
</div>

</section>
  )
}

export default SpecialOffer

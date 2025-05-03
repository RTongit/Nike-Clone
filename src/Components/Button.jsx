import React from 'react'

const Button = ({content,iconURL}) => {
  return (
   <button className='flex bg-amber-600 rounded-full gap-2 px-7 py-4 justify-center items-center text-white text-lg hover:bg-amber-700'>{content} 
      {iconURL && <img src={iconURL} alt="arrow-right-icon" className='h-6 w-6 ml-2'/>}
   </button>

  )
}

export default Button

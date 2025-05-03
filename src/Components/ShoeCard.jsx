import React from 'react'

const ShoeCard = ({ShoeInfo,ShoeURL,setShoeURL}) => {
  function handleClick() {
    if(ShoeURL!=ShoeInfo.bigShoe) {
      setShoeURL(ShoeInfo.bigShoe);
    }
  }
  return (
   <button onClick={handleClick} className='bg-amber-600 focus:border-2 rounded-xl px-1 py-1 focus:border-b-blue-800 cursor-pointer'><img src={ShoeInfo.thumbnail} alt="SmallShoe" /></button>
  )
}

export default ShoeCard

import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <div className='w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-3'>
      <div className='grid w-[4rem] h-[4rem] background rounded-full p-2'>
        <div className='bg-[#f0f2f5] rounded-full w-full h-full'></div>
      </div>

      <p className='text-lg'>Loading ...</p>
    </div>
  )
}

export default Loader
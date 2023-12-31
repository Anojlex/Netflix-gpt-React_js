import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='text-white absolute bg-gradient-to-r from-black pt-72  w-screen aspect-video pl-16  '>
        <div className='font-bold text-4xl m-4'>{title}</div>

        <div className='w-96 m-4'>{overview}</div>

        <div className='flex'>

            <button className='bg-white bg-opacity-80 rounded-md h-10 w-28 mx-4 text-black font-semibold p-2 hover:bg-opacity-20'>Play</button>
 
           <button className='bg-white bg-opacity-40 rounded-md h-10 w-28 mx-1 text-black font-semibold p-2 hover:bg-opacity-20'>More</button>

        </div>

    </div>
  )
}

export default VideoTitle
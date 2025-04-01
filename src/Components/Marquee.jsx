import React from 'react'

const Marquee = ({imageurl}) => {
  return (
    <div className="flex w-full py-5 gap-28 mt-8 whitespace-nowrap overflow-hidden">
      {imageurl.map((url, index) => (
        <img key={index} src={url} alt="marquee image" className='h-6 ' />
      ))} 
      {imageurl.map((url, index) => (
        <img key={index} src={url} alt="marquee image" className='h-6' />
      ))} 
    </div>
  )
}

export default Marquee
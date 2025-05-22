import React from 'react'


const Stripe = ({val}) => {

    var data = [
        {url:"image1" , number:48},
        {url:"image2" , number:2},
        {url:"image3" , number:11},
        {url:"image4" , number:48},
        {url:"image5" , number:2},
        {url:"image1" , number:11},
    ]

  return (
    <div className="w-[16.66%]  px-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center">
        <img src={val.url} className='w-28 h-24'/>
        <span className="font-semibold">{val.number}</span>
    </div>
  )
}

export default Stripe
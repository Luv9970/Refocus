import React from 'react'
import Stripe from './Stripe'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

const Stripes = () => {

    // var data = [
    //     {url:"image1" , number:48},
    //     {url:"image2" , number:2},
    //     {url:"image3" , number:11},
    //     {url:"image4" , number:48},
    //     {url:"image5" , number:2},
    //     {url:"image1" , number:11},
    // ]

  return (
    <div className="flex items-center mt-10">
        {/* {data.map((elem , index)=>(
            <Stripe key={index} val={elem} />
            ))} */}

        <Stripe val={{url:image1 , number:48}} />
        <Stripe val={{url:image2 , number:48}} />
        <Stripe val={{url:image3 , number:48}} />
        <Stripe val={{url:image4 , number:48}} />
        <Stripe val={{url:image5 , number:48}} />
        <Stripe val={{url:image1 , number:48}} />
    </div>
  )
}

export default Stripes
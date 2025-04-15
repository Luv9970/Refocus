import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {

    var data = [
        {url:"https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-239bc41/www.spinxdigital.com/app/uploads/2022/11/TCE.svg" , number:48},
        {url:"https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-239bc41/www.spinxdigital.com/app/uploads/2022/11/RedBarn.svg" , number:2},
        {url:"https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-239bc41/www.spinxdigital.com/app/uploads/2022/11/Lipsmacker2.svg" , number:11},
        {url:"https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-239bc41/www.spinxdigital.com/app/uploads/2022/11/RedBarn.svg" , number:48},
        {url:"https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-239bc41/www.spinxdigital.com/app/uploads/2022/11/QE-white.svg" , number:2},
        {url:"https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-239bc41/www.spinxdigital.com/app/uploads/2022/11/PhysiciansFormula-1.svg" , number:11},
    ]

  return (
    <div className="flex items-center mt-10">
        {data.map((elem , index)=>(
            <Stripe key={index} val={elem} />
            ))}
    </div>
  )
}

export default Stripes
import React from 'react'
import Marquee from './Marquee'

const Marquees = () => {

    var images=[
        ["https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKoq8jQArT0KeI_uber-21.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKmq8jQArT0KeA_apple-111.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKm68jQArT0KeB_arm-logo-2017-11.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKn68jQArT0KeF_logo-amazon1.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKna8jQArT0KeD_Frame4286.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKoa8jQArT0KeH_paypal-31.svg"],
        ["https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKoq8jQArT0KeI_uber-21.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKmq8jQArT0KeA_apple-111.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKm68jQArT0KeB_arm-logo-2017-11.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKn68jQArT0KeF_logo-amazon1.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKna8jQArT0KeD_Frame4286.svg",
          "https://arago-landing-page.cdn.prismic.io/arago-landing-page/ZyjKoa8jQArT0KeH_paypal-31.svg"],
        
    ]

  return (
    <div className="py-20 mt-20 w-full relative overflow-hidden ">
        {images.map((item,index)=>(
          <Marquee imageurl={item} key={index} direction={index === 0 ? 'left' : 'right'}/>
        ))}
    </div>
  )
}

export default Marquees
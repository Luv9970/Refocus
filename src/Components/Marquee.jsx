import React from 'react'
import { motion } from 'framer-motion'
const Marquee = ({imageurl , direction}) => {
  return (
    <div className="flex w-full  overflow-hidden">

      
      <motion.div initial={{x:direction === 'left' ? "0" : "-100%"}} animate={{x:direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear", duration: 8 , repeat:Infinity}} className="flex flex-shrink-0 py-5 gap-28 mt-8 whitespace-nowrap ">
        {imageurl.map((url, index) => (
          <img key={index} src={url} alt="marquee image" className='h-6 ' />
        ))} 
      </motion.div>

      <motion.div initial={{x:direction === 'left' ? "0" : "-100%"}} animate={{x:direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear", duration: 8 , repeat:Infinity}} className="flex flex-shrink-0 py-5 gap-28 mt-8 whitespace-nowrap ">
        {imageurl.map((url, index) => (
          <img key={index} src={url} alt="marquee image" className='h-6 ' />
        ))} 
      </motion.div>

      <motion.div initial={{x:direction === 'left' ? "0" : "-100%"}} animate={{x:direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear", duration: 8 , repeat:Infinity}} className="flex flex-shrink-0 py-5 gap-28 mt-8 whitespace-nowrap ">
        {imageurl.map((url, index) => (
          <img key={index} src={url} alt="marquee image" className='h-6 ' />
        ))} 
      </motion.div>
 
      </div>



   

  )
}

export default Marquee
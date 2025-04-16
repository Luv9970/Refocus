import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus.",
      live: true,
      case: false,
    },
    {
      title: "yahoo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus.",
      live: true,
      case: true,
    },
    {
      title: "rainfall",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus.",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val)=>{
    setpos(val*23)
  }

  return (
    <div className="mt-24 relative">
      {products.map((val, index) => (
        <Product val={val} key={index} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 pointer-events-none w-full h-full">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + 'rem' }}
          transition={{ease:[0.76 , 0 , 0.24 , 1] , duration:.6}}
          className="window absolute left-[45%] w-[32rem] h-[23rem]  bg-white overflow-hidden"
        >
          <motion.div 
                animate={{y: -pos+ `rem`}} 
                transition={{ease:[0.76 , 0 , 0.24 , 1] , duration:.6}}
                className="window w-full h-full  bg-sky-100"> 
        </motion.div>
          <motion.div 
                animate={{y: -pos+ `rem`}} 
                transition={{ease:[0.76 , 0 , 0.24 , 1] , duration:.5}}
                className="window w-full h-full  bg-sky-200"> 
        </motion.div>
          <motion.div 
                animate={{y: -pos+ `rem`}} 
                transition={{ease:[0.76 , 0 , 0.24 , 1] , duration:.5}}
                className="window w-full h-full  bg-sky-300"> 
        </motion.div>
          <motion.div 
                animate={{y: -pos+ `rem`}} 
                transition={{ease:[0.76 , 0 , 0.24 , 1] , duration:.5}}
                className="window w-full h-full  bg-sky-400"> 
        </motion.div>
          <motion.div 
                animate={{y: -pos+ `rem`}} 
                transition={{ease:[0.76 , 0 , 0.24 , 1] , duration:.5}}
                className="window w-full h-full  bg-sky-500"> 
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
    
    const [images, setImages] = useState([
        {
            url: "https://images.unsplash.com/photo-1543312872-6800b9d9e30f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlJTIwY2FyZHN8ZW58MHwyfDB8fHww",
            top: "50%",
            left: "50%",
            isActive: false,
        },
        {
            url: "https://images.unsplash.com/photo-1533557188897-ef2bc7257ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNxdWFyZSUyMGNhcmRzfGVufDB8MnwwfHx8MA%3D%3D",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://images.unsplash.com/photo-1742363018538-1fee321ab5eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNxdWFyZSUyMGNhcmRzfGVufDB8MnwwfHx8MA%3D%3D",
            top: "40%",
            left: "56%",
            isActive: false,
        },
        {
            url: "https://images.unsplash.com/photo-1741041100433-207df1cbbf49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNxdWFyZSUyMGNhcmRzfGVufDB8MnwwfHx8MA%3D%3D",
            top: "60%",
            left: "53%",
            isActive: false,
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1677168797153-fd930b852bad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNxdWFyZSUyMGNhcmRzfGVufDB8MnwwfHx8MA%3D%3D",
            top: "43%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://images.unsplash.com/photo-1691425817624-21bf8d7b3c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNxdWFyZSUyMGNhcmRzfGVufDB8MnwwfHx8MA%3D%3D",
            top: "65%",
            left: "56%",
            isActive: false,
        },
    ]);

  const { scrollYProgress} = useScroll();

scrollYProgress.on("change",(data)=>{
    function imagesShow(arr){
        setImages((prev)=>
            prev.map((item,index) =>
                arr.indexOf(index) === -1
            ? {...item, isActive: false}
            : {...item, isActive: true}
            )
        )
    }




    switch(Math.floor(data*100)){
        case 0:
            imagesShow([])
            break;
        case 1:
            imagesShow([0,1])
            break;
        case 2:
            imagesShow([0,1,2])
            break;
        case 3:
            imagesShow([0,1,2,3])
            break;
        case 4:
            imagesShow([0,1,2,3,4])
            break;
        case 5:
            imagesShow([0,1,2,3,4,5])
            break;
         case 6:
            imagesShow([0,1,2,3,4,5,6])
            break;
    }
})





  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[25vw] leading-none font-medium select-none tracking-tight">
          Work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

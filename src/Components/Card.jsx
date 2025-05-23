import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({width , start , para , hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"26px"}} className={`bg-zinc-800 p-5 rounded-xl ${width}  flex flex-col justify-between min-h-[30rem]`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">Whatever heading it is.</h1>
      </div>
      <div className="down w-full mt-44">
        {
            start === true && (
                <>
                    <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
                    <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">Contact Us</button>
                </>
            )
        }
        {
            para === true && (
                <p className="text-small text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus</p>
            )
        }
      </div>
    </motion.div>
  );
};

export default Card;


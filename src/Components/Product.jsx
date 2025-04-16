import React from 'react'
import Button from './Button'

const Product = ({val, mover,count}) => {

  return (
    <div className="w-full py-20 h-[23rem] text-white">
        <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between ">
            <h1 className="text-6xl capitalise font-medium">{val.title}</h1>
            <div className="dets w-1/3">
                <p className="mb-6">{val.description}</p>
                <div className="flex items-center gap-4">
                    {val.live && <Button title="Live Website" />}
                    {val.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product
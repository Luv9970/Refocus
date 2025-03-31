import React from 'react'
import Product from './Product'

const Products = () => {

    var products = [
        {
            title:"arqitel" , 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus." , 
            live: true , 
            case: false
        },  
        {
            title:"TTR" , 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus." , 
            live: true , 
            case: true
        },
        {
            title:"YIR 2022" , 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus." , 
            live: true , 
            case: false
        },
        {
            title:"yahoo" , 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus." , 
            live: true , 
            case: true
        },
        {
            title:"rainfall" , 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic saepe? Neque officia veritatis, quia alias odio iusto voluptate temporibus." , 
            live: true , 
            case: true
        }
    ]

  return (
    <div>
        {products.map((val , index)=>(
            <Product val={val}/>
        ))}
    </div>
  )
}

export default Products
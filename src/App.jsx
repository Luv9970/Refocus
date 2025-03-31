import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900 text-white '>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  )
}

export default App
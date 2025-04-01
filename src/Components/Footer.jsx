import React from 'react'

const Footer = () => {
  return (
    <div className="w-full">
        <div className='max-w-screen-xl py-10 flex gap-36 mx-auto'>
            <div className="basis-1/2">
                <h1 className="text-[12rem] font-semibold leading-none tracking-tight">Refokus.</h1>
                <div className="flex gap-10 mt-10">
                    {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((item)=>(
                        <div className="text-sm text-zinc-600">{item}</div>
                    ))}

                </div>
            </div>
            <div className="basis-1/2 flex gap-5">
                <div className='basis-1/3'>
                    <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
                    {["Instagram","Twitter (X?)","LinkedIn"].map((item,index)=>(
                        <a className="block mt-2 text-zinc-600 capitalize">{item}</a>
                    ))}
                </div>
                <div className='basis-1/3'>
                    <h4 className="mb-10 text-zinc-500 capitalize">sitemap</h4>
                    {["home","work","Careers","contact"].map((item,index)=>(
                        <a className="block mt-2 text-zinc-300 capitalize">{item}</a>
                    ))}
                </div>
                <div className="basis-1/2 font-semibold">
                    <p>Refocus is a pioneering digital agency driven by design and empowered by technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
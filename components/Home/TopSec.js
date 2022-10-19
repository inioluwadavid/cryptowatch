import Image from 'next/image'
import React from 'react'

export default function TopSec() {
  return (
    <div className=' mb-10 relative'>
     
         <div className=' px-4  mb-10 pt-36 grid md:h-96 text-center place-items-center wow animate__animated animate__fadeInLeft animate__slow'>
        
            <div className=''> 
                <h1 className=' text-center text-5xl md:text-6xl '>Best Place to Monitor all Your <br></br> Coins with Ease.</h1>

                <h5 className=' text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisis <br></br> at tellus tortor, nibh eget. Fringilla in turpis malesuada odio. </h5>
                <button  className="text-white mt-3 bg-blue-700 hover:bg-transparent hover:border-2 hover:border-blue-700  rounded-lg text-sm px-5 py-2.5 text-center  ">
                Get started
                </button>
            </div>
         </div>
         <div className=' hidden md:block absolute top-3 left-1'>
         <Image src='/blur.png' alt='blur' width='759' height='736'  />
         </div>
         
    </div>
  )
}

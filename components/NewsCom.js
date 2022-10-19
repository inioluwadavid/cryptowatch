import Image from 'next/image'
import React from 'react'

export default function NewsCom({image, bName, name}) {
  return (
    <div className=' transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105  wow animate__animated animate__zoomIn  rounded-lg bg-table-col  mb-3 grid  grid-flow-row relative'>
        
            <Image src={image} alt='image' className=' rounded-t-lg' width='368' height='249'/>
       
        <div className='  p-3'>
            <button className=' rounded-xl bg-purple-300  text-white hover:bg-transparent hover:border-2 hover:border-purple-300 px-5 p-1 mb-2'>
                {bName}
            </button>
            <h1 className=' mb-3 text-start'>{name}</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Cursus tortor id sed in. Viverra eu in quis sed  semper. Felis, ultrices nunc, lectus alique....</h5>
        </div>
    </div>
  )
}

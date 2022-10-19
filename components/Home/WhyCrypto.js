import Image from 'next/image'
import React from 'react'

export default function WhyCrypto() {
  return (
    <div className='mt-8 p-6 mb-5'>
            <div>
                <h1 className=' mb-3 text-center text-4xl font-bold wow animate__animated animate__backInLeft '>Why CryptoWatch</h1>
                <h5 className=' text-center  wow animate__animated animate__backInLeft'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisis at tellus tortor, <br></br> nibh eget. </h5>

                <div className=' grid md:grid-cols-3 gap-4 p-10'>
                    <div className=' flex  p-3 '>
                    <div className='grid grid-cols-1 place-items-start  mt-1  mr-3 wow animate__animated animate__fadeInUp animate__slow'>
                        <Image src='/coin.png' alt='coin' height='64'  width='64'/>
                        </div>
                        <div className=' wow animate__animated animate__fadeIn'>
                            <h1 className=' text-start font-bold mb-2 '>Market place to see all coins<br></br> activities</h1>
                            <h5 className=' text-start'> Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Massa facilisis at tellus<br></br> tortor, nibh eget. </h5>
                        </div>
                    </div>
                    <div className=' flex  p-3 '>
                    <div className='grid grid-cols-1 place-items-start  mt-1  mr-3 wow animate__animated animate__fadeInUp animate__slow'>
                        <Image src='/share.png' alt='coin' height='64'  width='64'/>
                        </div>
                        <div className=' wow animate__animated animate__fadeIn'>
                            <h1 className=' text-start font-bold mb-2'>Market place to see all coins<br></br> activities</h1>
                            <h5 className=' text-start'> Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Massa facilisis at tellus<br></br> tortor, nibh eget. </h5>
                        </div>
                    </div>
                    <div className=' flex  p-3 '>
                    <div className='grid grid-cols-1 place-items-start  mt-1  mr-3 wow animate__animated animate__fadeInUp animate__slow'>
                        <Image src='/chartg.png' alt='coin' height='64'  width='64'/>
                        </div>
                        <div className=' wow animate__animated animate__fadeIn'>
                            <h1 className=' text-start font-bold mb-2'>Market place to see all coins<br></br> activities</h1>
                            <h5 className=' text-start'> Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Massa facilisis at tellus<br></br> tortor, nibh eget. </h5>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

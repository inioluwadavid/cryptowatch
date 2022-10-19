import Image from 'next/image'
import React from 'react'

export default function Market() {
  return (
    <div className=' mt-16'>
        <div className=' flex justify-center  '>
                <div className=' grid md:grid-cols-5 gap-6 border-b border-t p-6  border-gray-800'>
                    <Image src='/bit1.png' className=' wow animate__animated animate__fadeIn animate__slow' alt=' bit' width='101' height='31' />
                    <Image src='/coinn.png' className=' wow animate__animated animate__fadeIn animate__slow' alt=' bit' width='70' height='31' />
                    <Image src='/bitcoin1.png' className=' wow animate__animated animate__fadeIn animate__slow' alt=' bit' width='72' height='31' />
                    <Image src='/coin1.png' className=' wow animate__animated animate__fadeIn animate__slow' alt=' bit' width='70' height='31' />
                    <Image src='/binance1.png' className=' wow animate__animated animate__fadeIn animate__slow' alt=' bit' width='101' height='31' />
                </div>
        </div>
    </div>
  )
}

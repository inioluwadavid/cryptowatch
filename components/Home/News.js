import React from 'react'
import NewsCom from '../NewsCom'

export default function News() {
  return (
    <div className=' p-8 md:p-28'>
         <h1 className=' font-bold text-center text-5xl mb-2 wow animate__animated animate__fadeInTopLeft'>Market  Trends</h1> 
       <h5 className=' text-center mb-4 wow animate__animated animate__fadeInTopLeft'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisis at tellus<br></br> tortor, nibh eget.  </h5>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
        <NewsCom 
        image='/new1.png'
        bName='Bitcoin'
        name='IRS sees crypto seizures'
       />
        <NewsCom 
        image='/new2.png'
        bName='Bitcoin'
        name='Bitcoin donations to Ukraine NGO'
       />
        <NewsCom 
        image='/new3.png'
        bName='Ethereum'
        name='ETH 2.0 Surpasses 9 Million'
       />
        <NewsCom 
        image='/new4.png'
        bName='Ethereum'
        name='IRS sees crypto seizures'
       />
        <NewsCom 
        image='/new5.png'
        bName='Dogecoin'
        name='Dogecoin price: $1 target edging'
       />
        <NewsCom 
        image='/news6.png'
        bName='Ripple'
        name='Coinbase to suspend XRP'
       />
        </div>
       
    </div>
  )
}

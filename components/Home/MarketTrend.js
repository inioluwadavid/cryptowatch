import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function MarketTrend() {
    const[data, setData] = useState([])
    useEffect(()=>{
        axios.get('/api/table').
        then(response =>{
            setData(response.data)
            console.log(response.data)
        }).catch(
          error =>{
            console.log(error.message);
          }
        )
    })
  return (
    <div className=' relative'>
    <div className=' p-8'>
       <h1 className=' font-bold text-center text-5xl mb-2 wow animate__animated animate__backInLeft '>Market  Trends</h1> 
       <h5 className=' text-center wow animate__animated animate__backInLeft '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisis at tellus <br></br> tortor, nibh eget. </h5>
       <div className=' md:flex  md:justify-center mt-6 overflow-x-auto wow animate__animated animate__fadeInUp animate__slow  '>
            <table className='table-auto  min-w-max overflow-scroll bg-table-col overflow-x-scroll'>
            <thead className=' border-b border-gray-700'>
                <tr>
                <th className=' p-2 text-start'>NO</th>
                <th className=' p-2  text-start'>Name</th>
                <th className=' p-2 text-start'>Last Price</th>
                <th className=' p-2 text-start'>Change(24h)</th>
                <th className=' p-2 text-start'>Chart</th>
                <th className=' p-2 text-start'>Market Cap </th>
                </tr>
            </thead>
            <tbody>
                {data.map( dataa =>{
                    return(
                        <tr className=' border-b border-gray-700' key={dataa.id}>
                            <td className=' p-2 '>{dataa.id}</td>
                            <td className=' p-2 md:w-72'><Image src={dataa.image} alt='logo' width='13' height='13' /> <span>{dataa.ab}</span>   <span>{dataa.name}</span> </td>
                            <td className=' p-2 md:w-40'> {dataa.latest_price}</td>
                            <td className=' p-2 md:w-40'>{dataa.value === 'positive' ? <span className=' text-green-600'>{dataa.changes}</span>:<span className=' text-red-600'>{dataa.changes}</span> }</td>
                            <td className=' p-2 md:w-40'><Image src={dataa.chart_img} alt='chart' width=' 92' height='33' /></td>
                            <td className=' p-2 md:w-40'>{dataa.market_cap}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
       </div>
    </div>
    <div className=' hidden md:block absolute bottom-0 left-1'>
         <Image src='/blur.png' alt='blur' width='759' height='736'  />
         </div>
    </div>
  )
}

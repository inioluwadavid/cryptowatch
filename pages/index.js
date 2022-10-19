 //author: David Ajibade -- github InioluwaDavid
import Head from 'next/head'
import React, {useEffect} from 'react'
import Market from '../components/Home/Market'
import MarketTrend from '../components/Home/MarketTrend'
import News from '../components/Home/News'
import TopSec from '../components/Home/TopSec'
import WhyCrypto from '../components/Home/WhyCrypto'


export default function Home() {
  useEffect(() => {
    if(typeof window !== 'undefined') {
        window.WOW = require('wowjs');
      }
      new WOW.WOW().init();
    
})
  return (
    <div >
      <Head>
        <title>CryptoWatch</title>
        <meta name="description" content="CryptoWatch is a crypto wallet that support multiple coin" />
        <link rel="icon" href="/logocryp.png" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
      </Head>
      <section id='home'>
      <TopSec />
      </section>
    
      <section >
      <Market />
      </section>
     
      <section id='features'>
      <WhyCrypto />
      </section>
     
      <section id='market'>
      <MarketTrend />
      </section>
   
     <section id='blog'>
     <News />
     </section>
     
    </div>
  )
}

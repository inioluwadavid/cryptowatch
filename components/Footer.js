import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='pl-8 md:pl-32 grid grid-cols-2 md:grid-cols-5 gap-4'>
    
            <div>
                <Link href='/'> 
                <a className=' font-bold block text-start mb-1  text-2xl'> Company</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Home</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Market</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Features</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Blog</a>
                </Link>
            </div>
            <div>
                <Link href='/'> 
                <a className=' font-bold   text-start block mb-1  text-2xl'> Support</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Help Center</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Safety Center</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Community Guidelines</a>
                </Link>
               
            </div>
            <div>
                <Link href='/'> 
                <a className=' font-bold  text-start block mb-1  text-2xl'> Legal</a>
                </Link>
                <Link href='/'>
                 <a className='  text-start block mb-1'>Cookies Policy</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Privacy Policy</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Terms of Service</a>
                </Link>
                <Link href='/'> 
                <a className='  text-start block mb-1'>Law Enforcement</a>
                </Link>
            </div>
            <div>
                <Link href='/'>
                 <a className=' font-bold block  text-start mb-1  text-2xl'> Install App</a>
                </Link>
                <Image src='/gd.png' alt='google download' className=' mb-1' width='162'  height='48' />
                <Image src='/apd.png' alt='Apple Store download' className=' mb-1' width='162'  height='48' />
            </div>
            
        </div>
        <div className='mt-6 border-t border-gray-700 p-2 md:flex md:justify-around'>
            <h5 className=' text-center mb-2 md:mb-0'>© 2022 CryptoWatch. All rights reserved</h5>
            <div className=' flex justify-center '>
                <Image src='/ig.png' alt='Instagram' className=' p-2' width='32' height='32' />
                <Image src='/web.png' alt='Instagram' className=' p-2' width='32' height='32' />
                <Image src='/twi.png' alt='Instagram' className=' p-2' width='32' height='32' />
                <Image src='/play.png' alt='Instagram' className=' p-2' width='32' height='32' />
            </div>
        </div>
    </div>
  )
}

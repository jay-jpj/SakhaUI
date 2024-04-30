
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './pagert.css'
import imager from '@/public/image 15.png'
function page() {
  return (
    <div className='outer22'>
        <div className='inner1'>
            <Image src={imager} alt='No img found' height={577} width={649} sizes="100vw" style={{width: '100%',height: '100%',}}/>
        </div>
        <div className='inner2'>
            <h1>SIGN UP</h1> <br />
            <input className='m1' type="text" placeholder='Your Mail'/> <br />
            <input className='p1' type='text' placeholder='Password'/> <br />
            <input className='p1' type='text' placeholder='Password'/> <br />
            <input type='checkbox' id='checker'/>
            <label htmlFor="checker">I agree to the <Link href='../contentt/terms'>Terms and Conditions</Link></label> <br />
            <span className='ss1'>If you already have an account <Link href='../contentt/signin'>SIGN IN</Link></span> <br />
            <button>SIGN UP</button> <br />
        </div>


    </div>
  )
}

export default page

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './pagert.css'
function page() {
  return (
    <div className='outer33'>
        <div className='inner11'>
            <Image src='/image 15.png' alt='No img found' height={577} width={649} sizes="100vw" style={{width: '100%',height: '100%',}} />
        </div>
        <div className='inner22'>
            <h1>SIGN IN</h1> <br />
            <input className='m1' type="text" placeholder='Your Mail'/> <br />
            <input className='p1' type='password' placeholder='Password'/> <br />
            <span className='f1'><Link  className='liforgor' href='../contentt/forget'>Forgot Password?</Link></span> <br />
            <span className='ss1'>Don't have an account? <Link href='../contentt/signup'>SIGNUP</Link></span> <br />
            <button>SIGN IN</button> <br />
        </div>


    </div>
  )
}

export default page
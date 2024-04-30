
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './pagert.css'
function page() {
  return (
    <div className='outerbox'>
      <div className='inner'>
        <div className='imgcont'>
        <Image className='image1' src='/image14.png' alt='No image found' width={400} height={500}/>
        </div>
        <div className='textcont'>
          <h1>UNLOCK <span className='s1'>YOUR</span> <br /><span className='s2'>DREAM</span> CAREER <br /> WITH <span className='s3'>UDYOGA SAKHA</span></h1>
          <Link href='./contentt/signup'><button className='b1'>Sign Up</button></Link>
        <span className='o1'> or </span>
        <Link href='./contentt/signin'><button className='b2'>Sign In</button></Link>
        </div>
      </div>
    </div>
  )
}

export default page
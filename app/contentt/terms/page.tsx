
import React from 'react'
import './pagert.css'
import Link from 'next/link'
import Image from 'next/image'
function page() {
  return (
    <div className='outerterm'>
        <Link className='li' href='../contentt/signup'><Image src='/icons/back.png' alt='no img found' width={25} height={25}/></Link>
        <h2>Terms and Conditions</h2>
        <p>I hereby agree that the Company will be required to
             collect and store my <br />
              personal data, including sensitive personal
              data and information and <br />
               identity information like
               PAN, AADHAR,SSN etc. ("personal Information"), <br />
                in respect to my application for employment.
                 I agree to furnish such <br />
                  "personal information" to the Company
                  and hereby grant consent to the <br /> Company to furnish such.
        </p>
    </div>
  )
}

export default page
import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
function page() {
  return (
    <div className={styles.outermost}>
        <h1>FORGOT PASSWORD</h1>
        <div>
            <input type="text" placeholder='Enter your email' className={styles.i}/>
            <button className={styles.botp} >Send OTP</button>
        </div>
        <form action="#">
        <div >
            <label  className={styles.lab} htmlFor="mark">ENTER OTP </label>
          <input id={styles.mark} type="number" className={styles.input} min={0} max={9} />
          <input type="number" className={styles.input} min={0} max={9}/>
          <input type="number" className={styles.input} min={0} max={9}/>
          <input type="number" className={styles.input} min={0} max={9}/>
          
        </div>
        <Link href='../contentt/reset'><button className={styles.votp} >Continue</button></Link>
        </form>
    </div>
  )
}

export default page
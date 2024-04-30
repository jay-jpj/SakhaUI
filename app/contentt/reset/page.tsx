import React from 'react'
import styles from './style.module.css'
function page() {
  return (
    <div className={styles.out} >
        <h1 className={styles.heading}>RESET PASSWORD</h1>
        <input type="text" placeholder='Create new password' className={styles.box} /> <br />
        <input type="text" placeholder='Confirm password' className={styles.box} /> <br />
        <button className={styles.button} >Change</button>
    </div>
  )
}

export default page
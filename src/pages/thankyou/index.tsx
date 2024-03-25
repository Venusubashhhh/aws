import React from 'react'
import styles from './thankyou.module.scss'
import thankyou from '../../../public/assests/Thankyou.jpg'
import Image from 'next/image'
import { Button } from '@mui/material'
function index() {
  return (
    <div className={styles.thankyouWrap}>
        <div>
            <div className={styles.imgWrap}>
            <Image src={thankyou} className={styles.img} ></Image>
            </div>

        </div>
        <div className={styles.contentWrap}>
            <div>
<h1 className={styles.h1}>ThankYou</h1>
<br></br>
<h2 className={styles.h2}>Thank you for logging in! Welcome back! We are glad to have you with us</h2>
<br></br>
<Button className={styles.button}>GO Back Home</Button>
</div>
        </div>

    </div>
  )
}

export default index
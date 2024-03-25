'use client'
import React, { useState } from 'react'
import styles from './dropdown.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button } from '@mui/material';
import user from '../../../public/assests/profile.png'
import Image from 'next/image';
import help from '../../../public/assests/211674_help_circled_icon.png';
import setting from '../../../public/assests/293263_setting_gear_preference_icon.png';
import profile from '../../../public/assests/1564534_customer_man_user_account_profile_icon.png';
import plususer from '../../../public/assests/1608463_plus_user_icon.png'


function Dropdown() {
    const[flag,setflag]=useState(false);
  return (
    <div className={styles.dropdown_PageWrap} >
        <div>
       <Button onClick={()=>setflag(!flag)}>Click</Button>
       {
        flag?
<div className={styles.dropdownWrap}>
    <div className={styles.topbox}>
        <h2 className={styles.h2}>Person 1</h2>
        <Image src={user} className={styles.profile} />
      
    </div>
    <div>
  
        
    </div>
    <div className={styles.bottombox}>

        <h2 className={styles.b_h2}>Sample User</h2>
        <h3 className={styles.h3}>SampleUser@gmail.com</h3>
        <div className={styles.iconWrap}>
        <LocationOnIcon
           className={styles.icon}  />
                <VpnKeyIcon className={styles.icon} />
        <PaymentIcon className={styles.icon} />
        </div>
        <div className={styles.contentWrap}>
            <div
            className={styles.flex}>
                <Image src={profile} className={styles.img}></Image>
              <p className={styles.p}>Profile</p> 
            </div>
            <div className={styles.flex}>
            <Image src={setting} className={styles.img}></Image>
                  <p className={styles.p}>Preference</p>  
        
             </div>
             <div className={styles.flex}>
             <Image src={plususer} className={styles.img}></Image>
                  <p className={styles.p}>User Management</p>  
        
             </div>
             <div className={styles.flex}>
             <Image src={help} className={styles.img}></Image>
                  <p className={styles.p}>Help</p>  
        
             </div>
        </div>
    </div>
</div>:null
}
    </div>
    </div>
  )
}

export default Dropdown
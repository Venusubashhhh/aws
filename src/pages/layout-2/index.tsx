import React from 'react'
import styles from './layout-2.module.scss'

import user from '../../../public/assests/user.png';
import Image from 'next/image';
import { Button } from '@mui/material';
function index() {
    const logos=[
        'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_facebook.svg',
        'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_instagram.svg',
        'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_youtube.svg',
        'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_in.svg',
        'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_twitter.svg',
      ]
      const data=[
        {
            img:'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_facebook.svg',
            name:'Facebook',
            description:'Facebook is a social media and social networking service owned by American technology conglomerate Meta Platforms. Created in 2004 by Mark Zuckerberg with four other Harvard College students and roommates Eduardo Saverin.' ,
            date:'12/1/2024',
            result:'Compliance',
            tag:'Cloud'
        },
        {
            img:'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_instagram.svg',
            name:'Instagram',
            description:'Instagram is an photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location. ',
            date:'25/1/2024',
            result:'Non-Compliance',
            tag:'Cloud'
        },
        {
            img:'https://itrexgroup.com/wp-content/themes/itrex/assets/images/main_page/icon_youtube.svg',
            name:'Youtube',
            description:'Youtube and video sharing social networking service owned by google Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. ',
            date:'25/1/2024',
            result:'Compliance',
            tag:'AI'
        }
      ]
  return (
    <div className={styles.layoutWrap}>
        <div className={styles.topbarWrap}>
            <div className={styles.top}>
                <div className={styles.imgWrap}>
{
    logos.map((val:string)=><img src={val} className={styles.img}></img>)
}
</div>
            </div>
            <div className={styles.navbar}>
                <div className={styles.imgWrap}><img src='https://prensalink.com/wp-content/themes/prensalinkv2/assets/images/mainLogo.svg' style={{marginTop:'-5px'}}></img></div>
                <div className={styles.headersWrap}>
                    <h2>Title1</h2>
                    <h2>Title2</h2>
                    <h2>Title3</h2>
                    <h2>Title4</h2>
                </div>
            </div>
         
            <div className={styles.cardWrap}>
            {data.map((val)=>
<div className={styles.card}>
    <div className={styles.cardTop}>
<h2 className={styles.h2}>
  <img src={val.img} className={styles.img}></img>{val.name}
</h2>
    </div>
    <div className={styles.contentWrap}>

<div>
<br></br>
    <p>{val.description}</p>
    <br></br>
    <hr></hr>
    <br></br>
   <h4>Assesment Result:{val.result}</h4>
   <br></br>
   <h4>Assesment Date:{val.date}</h4>
   <br></br>
   <br></br>
   <div className={styles.resultWrap}>
    {val.tag}
   </div>
</div>

    </div>



            </div>)}
            </div>

        </div>
    </div>
  )
}

export default index
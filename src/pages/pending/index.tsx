import React from "react";
import styles from "./pending.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import pending from "../../../public/assests/pending.svg";
function index() {
  return (
    <div className={styles.pendingWrap}>
      <div className={styles.imgWrap}>
        <div className={styles.imgbackground}></div>
        <div >     
          <Image  className={styles.img} src={pending}></Image></div>
 
      </div>
      <div className={styles.contentWrap}>
        <br></br>
        <h1 className={styles.h1}>Pending</h1>
        <br></br>
      
        <h2 className={styles.h2}>Your Application is under process</h2>
        <br></br>
        <br></br>
    
        <div className={styles.buttonWrap}>
          <Button className={styles.button}>Go Home</Button>
        </div>
      </div>
    </div>
  );
}

export default index;

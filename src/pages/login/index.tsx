import React from "react";
import Image from "next/image";
import logo from "../../../public/assests/login.png";
import styles from "./login.module.scss";
import { TextField } from "@mui/material";
function index() {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.contentWrap}>
        <div className={styles.leftContent}>
          <img
            src="https://st4s.edu.au/wp-content/uploads/2021/01/cropped-safertechnologies4schools-logo-162x74.png"
            className={styles.logo}
          ></img>
          <div className={styles.credentialsWrap}>
            <h2 className={styles.title}>Welcome Back</h2>
            <h4 className={styles.h5}>Please Enter Your Details</h4>

            <br></br>
            <p className={styles.p}>Email</p>
            <input type="text" className={styles.textArea} />

            <br></br>
            <br></br>
            <p className={styles.p}>Password</p>
            <input type="text" className={styles.textArea} />
            <h5 className={styles.h6}>Forgot Your Password</h5>
            <button className={styles.button}>Sign In</button>
            <h5 className={styles.h5}>Dont Have an Account? signup</h5>
          </div>
        </div>
        <div>
          <Image src={logo} alt="Logo"></Image>
        </div>
      </div>
    </div>
  );
}

export default index;

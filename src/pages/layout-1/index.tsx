import React from "react";
import styles from "./layout-1.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import user from '../../../public/assests/user.png'
import Image from "next/image";
import MenuItem from '@mui/material/MenuItem';
import bmw from '../../../public/assests/bmw-logo-svgrepo-com.svg'
import insta from '../../../public/assests/instagram-2-1-logo-svgrepo-com.svg'
import apple from '../../../public/assests/apple-black-logo-svgrepo-com.svg'
import spotify from '../../../public/assests/spotify-1-logo-svgrepo-com.svg'
import  inder from '../../../public/assests/tinder-1-logo-svgrepo-com.svg'
import BasicTable from "../../../components/table/Table";
function index() {
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
      const data=[
        {
            img:'bmw',
            name:'Facebook',
            description:'Facebook is a social media and social networking service owned by American technology conglomerate Meta Platforms. Created in 2004 by Mark Zuckerberg with four other Harvard College students and roommates Eduardo Saverin.' ,
            date:'12/1/2024',
            result:'Compliance',
            tag:'Cloud'
        },
        {
            img:'insta',
            name:'Instagram',
            description:'Instagram is an photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location. ',
            date:'25/1/2024',
            result:'Non-Compliance',
            tag:'Cloud'
        },
        {
            img:'apple',
            name:'Youtube',
            description:'Youtube and video sharing social networking service owned by google Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. ',
            date:'25/1/2024',
            result:'Compliance',
            tag:'AI'
        }
      ]
  return (
    <div className={styles.layoutWrap}>
      <div className={styles.tableWrap}>
        <div className={styles.topbarWrap}>
          <div className={styles.headerWrap}>
            <h1 className={styles.h1}>Events</h1>
            <Button className={styles.Button}>
              <NotificationsIcon /> Notification
            </Button>
          </div>
          <div className={styles.headerWrap}>
            <div className={styles.buttonWrap}>
              <Button className={styles.ButtonSmall}>Event 1</Button>
              <Button className={styles.ButtonSmall}>Event 2</Button>
              <Button className={styles.ButtonSmall}>Event 3</Button>
              <Button className={styles.ButtonSmall}>Event 4</Button>
            </div>
            <Button className={styles.ButtonBig}>Create New Event</Button>
          </div>
          <div>
          <TextField
        id="input-with-icon-textfield"
   className={styles.textField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
           <SearchIcon/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
        <TextField
        className={styles.textField}
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        className={styles.textField}
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </div>
        </div>
     
      
        
        {/* <div className="styles.tableHeader" style={{display:'flex',justifyContent:'space-evenly',marginTop:"3rem"}}>
      
<div>
    <h2>Icon</h2>
   
</div>
<div>
    <h2>Vendor Name</h2>
  
</div>
<div>
    <h2>Brief Vendor Description</h2>
   
</div>
<div>
    <h2>Assessment Result </h2>

</div>
<div>
    <h2>Assessment Date</h2>

</div>
<div>
    <h2>Tag</h2>
</div>
        </div>
        <br></br>
        <hr></hr> */}
      </div>
      {/* {
        data.map((val:any)=>
        <div>
        <div className="styles.tableHeader" style={{display:'flex',justifyContent:'space-around',marginTop:"3rem"}}>
<div>
    
   
</div>
<div>
    <p>{val.name}</p>
  
</div>
<div className={styles.data}>
<p>{val.description}</p>
   
</div>
<div>
<p>{val.result}</p>

</div>
<div>
<p>{val.date}</p>
</div>
<div>
<p>{val.tag}</p>
</div>
        </div>
        <br></br>
        <hr></hr>
      </div>)
      } */}
      <BasicTable/>
    </div>
  );
}

export default index;

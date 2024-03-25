import React from "react";
import styles from "./standard.module.scss";
import { TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";

function index() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div className={styles.inputsWrap}>
         <div className={styles.formWrap}>
      <div className={styles.form}>
        <h1 className={styles.h1}>Standard</h1>
        <h2 className={styles.h2}>Standard-Required</h2>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-Disabled</h2>
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-Password-Input</h2>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-Read-Only-Input</h2>
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-Number</h2>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-Search</h2>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-HelperText</h2>
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Standard-Select</h2>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
          className={styles.textfield}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br> <br></br>
        <h2 className={styles.h2}>Standard-Select-Native</h2>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
          className={styles.textfield}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </div>
    </div>
  );
}

export default index;

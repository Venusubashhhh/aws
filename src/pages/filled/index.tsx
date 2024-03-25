import React from "react";
import styles from "./filled.module.scss";
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
        <h1 className={styles.h1}>Filled</h1>
        <h2 className={styles.h2}>Filled-Required</h2>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-Disabled</h2>
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-Password-Input</h2>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-Read-Only-Input</h2>
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-Number</h2>
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-Search</h2>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-HelperText</h2>
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Filled-Select</h2>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
          className={styles.textfield}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br> <br></br>
        <h2 className={styles.h2}>Filled-Select-Native</h2>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
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

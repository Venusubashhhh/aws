import React from "react";
import styles from "./outlined.module.scss";
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
        <h1 className={styles.h1}>Outlined</h1>
        <h2 className={styles.h2}>Outlined-Required</h2>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-Disabled</h2>
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-Password-Input</h2>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-Read-Only-Input</h2>
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-Number</h2>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-Search</h2>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-HelperText</h2>
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
          className={styles.textfield}
        />
        <br></br>
        <br></br>
        <h2 className={styles.h2}>Outlined-Select</h2>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="outlined"
          className={styles.textfield}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br> <br></br>
        <h2 className={styles.h2}>Outlined-Select-Native</h2>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="outlined"
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

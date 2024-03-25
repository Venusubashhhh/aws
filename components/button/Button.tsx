import React from 'react';
import { Button } from '@mui/material';
import styles from './Button.module.scss'; // Import CSS file for styling

function ButtonComponent() {
  return (
    <div>
      <Button variant="outlined" className={styles.blueHover}>Start Filling</Button>
    </div>
  );
}

export default ButtonComponent;

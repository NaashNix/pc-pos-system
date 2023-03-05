import React from 'react';
import classes from "./PriceViewer.module.css";

const PriceViewer = () => {
   return (
      <div className={classes.container} >
         <span>Sub Total</span>
         <span>Rs. 7800.00</span>
      </div>
   );
}

export default PriceViewer;

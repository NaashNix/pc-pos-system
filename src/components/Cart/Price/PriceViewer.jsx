import React from 'react';
import classes from "./PriceViewer.module.css";

const PriceViewer = () => {
   return (
      <div className={classes.container} >
         <span className={classes.mainTitle} >Sub Total</span>
         <span className={classes.subTitle} >Rs. 7800.00</span>
      </div>
   );
}

export default PriceViewer;

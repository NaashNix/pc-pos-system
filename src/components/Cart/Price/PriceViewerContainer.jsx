import React from 'react';
import Button from './Button';
import PriceViewer from './PriceViewer';
import classes from "./PriceViewerContainer.module.css";

const PriceViewerContainer = () => {
   return (
      <div className={classes.container} >
         <PriceViewer />
         <span className={classes.title} >Total Payment</span>
         <Button type='button' >Rs. 9500.00</Button>
      </div>
   );
}

export default PriceViewerContainer;

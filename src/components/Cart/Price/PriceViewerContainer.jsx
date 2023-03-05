import React from 'react';
import Button from './Button';
import PriceViewer from './PriceViewer';
import classes from "./PriceViewerContainer.module.css";

const PriceViewerContainer = () => {
   return (
      <div className={classes.container} >
         <PriceViewer />
         <span className={classes.title} >Total Payment</span>
         <Button />
      </div>
   );
}

export default PriceViewerContainer;

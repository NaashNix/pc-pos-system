import React from 'react';
import classes from './CartItem.module.css';

const CartItem = () => {
   return (
      <div className={classes.container} >
         <div className={classes.countContainer} >
            <span>12</span>
         </div>
         <div className={classes.titleHolder} >
            <span className={classes.mainTitle} >Title</span>
            <span>Price</span>
         </div>
      </div>
   );
}

export default CartItem;

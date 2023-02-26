import React from 'react';
import classes from './FoodTileContainer.module.css';
import FoodTypeTile from './FoodTypeTile';

const FoodTileContainer = () => {
   return (
      <div className={classes.container} >
         <FoodTypeTile heading="Breakfast" defColor="#B4FFF6" onColor="#2FFFE6" />
         <FoodTypeTile heading="Dinner" defColor="#A4FFB8" onColor="#45FF6E" />
         <FoodTypeTile heading="Lunch" defColor="#FFF6A4" onColor="#FFEA2C" />
         <FoodTypeTile heading="Drinks" defColor="#9BB7FF" onColor="#2764FF" />
         <FoodTypeTile heading="Desserts" defColor="#FFB4B4" onColor="#FF8282" />
         <FoodTypeTile heading="Soup" defColor="#FDB4FF" onColor="#FC7CFF" />
      </div>
   );
};

export default FoodTileContainer;

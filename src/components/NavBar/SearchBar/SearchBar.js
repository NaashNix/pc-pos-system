import React from 'react';
import searchIcon from '../../../assets/search.png' 
import classes from './SearchBar.module.css';

const SearchBar = () => {
   return (
      <div className={classes.outer} >
         <img className={classes.image} src={searchIcon} alt="" />
         <input className={classes.input} type="text" placeholder={'Search'} /> 
      </div>
   );
}

export default SearchBar;

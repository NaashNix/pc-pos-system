import React from 'react';
import searchIcon from '../../../assets/search.png' 

const SearchBar = () => {
   return (
      <div>
         <img src={searchIcon} alt="" />
         <input type="text" placeholder={'Search'} /> 
      </div>
   );
}

export default SearchBar;

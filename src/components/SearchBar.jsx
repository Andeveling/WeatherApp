import React, { useState } from "react";
import styles from './SearchBar.module.css';

function SearchBar({onSearch}) {
    const [city,setCity] = useState('bogota')

    const onSearchValueChange = (event) => {
      setCity(event.target.value);}
    
    return (
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
  
        <input
          className={styles.input_container}
          type="text"
          placeholder="City..."
          onChange={onSearchValueChange}
        />
  
        <input 
        className={styles.input_button}
        type="submit" 
        value="+"/>
      </form>
    );
}

export default SearchBar;
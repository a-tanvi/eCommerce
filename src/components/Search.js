import React, { useState } from 'react';
import Button from '../components/Button';


const Search = ({restaurants = [], 
    setRestaurants = () => {}, restaurantLists = []} ) => {

        const[value, setValue] = useState("");
        const changeHandler = (e) => {
            setValue(e.target.value);
         
        }
        
        const clickHandler = () => {
            const filteredRestaurants = restaurantLists.filter(({info}) =>
              info?.name?.toLowerCase().includes(value.toLowerCase())
            );
           
            setRestaurants(filteredRestaurants);
           
          console.log({restaurantLists, filteredRestaurants})
            
          };

           

        return (
        <div className="search-container">
          <input type='text' placeholder='Enter Resturant Name' onChange={changeHandler} ></input>
          <Button children="Search" onClick={clickHandler}>Search</Button>
        </div>
        )
    
}

export default Search;


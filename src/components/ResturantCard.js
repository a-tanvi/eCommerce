import React from 'react';
import { SWIGGY_URL } from '../../config';
const ResturantCard = ({resturant = {}}) =>{

   

    return (
    <div id='card'>
        
     
    <h3>{resturant.name}</h3>
    <img src= {SWIGGY_URL+ resturant.cloudinaryImageId } id='cardImage'></img>
   
    <h5>Rating : {resturant.avgRatingString}</h5>
    <h5>Best Sellers : {resturant.cuisines.join(", ")}</h5>
    </div>
    )
}

export default ResturantCard;
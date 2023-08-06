import React, { useState } from 'react';
import ResturantCard from './ResturantCard';

const Body = ({restaurants = []}) => {

  
    return (
    
    <div id='container'>
        
     {
        restaurants?.map((resturant, index) => {
            
            return <ResturantCard resturant = {resturant.info} key={resturant.info.id}/>
        })
     }
    </div>
    )
}

export default Body;
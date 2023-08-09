import React, { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Shimmer from './src/components/Shimmer';
// import { API_URL } from './config';


const App = () => {
    
    const [restaurantLists, setRestaurantLists] = useState([]); // all data
    const [restaurants, setRestaurants] = useState([]); // filtered data
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        getAllRestaturants();
       
    },[])
    
    async function getAllRestaturants(){
      setLoading(true);
  
    const temp = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const data = await temp.json();
    console.log(data)
    setRestaurantLists(data.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(data.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setLoading(false);
    
    }

    
   if(loading) return <Shimmer/>
    return (
    <>
    <Header restaurants={restaurants} setRestaurants={setRestaurants} restaurantLists={restaurantLists}/>
    <Body restaurants={restaurants}/>
    <Footer/>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

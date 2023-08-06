import React, { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';



const App = () => {
    
    const [restaurantLists, setRestaurantLists] = useState([]); // all data
    const [restaurants, setRestaurants] = useState([]); // filtered data
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        getAllRestaturants();
    },[])
    
    async function getAllRestaturants(){
      setLoading(true);
      const temp = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING%22");
      const data = await temp.json();
    
    setRestaurantLists(data.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(data.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setLoading(false);
    }

    

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

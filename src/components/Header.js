import React from 'react';
import Search from './Search';


const Title = () => (
    <a href='/'>
    <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg" alt='logo' ></img>
    </a>
)

const Header = ({restaurants = [], 
    setRestaurants = () => {},  restaurantLists = []}
   ) => (
    <div id='header'>
    <Title/>
    <Search restaurants={restaurants} setRestaurants={setRestaurants} restaurantLists={restaurantLists}/>
    <ul id='navList'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>

)

export default Header;
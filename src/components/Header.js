import React from "react";
import Search from "./Search";
import { LOGO } from "../../config";
import { Link } from "react-router-dom";
const Title = () => (
  <Link to="/">
    <img id="logo" src={LOGO} alt="logo"></img>
  </Link>
);

const Header = ({
  restaurants = [],
  setRestaurants = () => {},
  restaurantLists = [],
  showSearch = false,
}) => (
  <div id="header">
    <Title />
    {showSearch && (
      <Search
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        restaurantLists={restaurantLists}
      />
    )}

    <ul id="navList">
      <li>Home</li>
      <Link href="/about">
        <li>About</li>
      </Link>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

export default Header;

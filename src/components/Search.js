import React, { useState } from "react";
import Button from "../components/Button";
import { filterData } from "../../utils/helper";

const Search = ({
  restaurants = [],
  setRestaurants = () => {},
  restaurantLists = [],
}) => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    const filteredRestaurants = filterData(value, restaurantLists);
    setRestaurants(filteredRestaurants);

    console.log(filteredRestaurants);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter Resturant Name"
        onChange={changeHandler}
      ></input>
      <Button children="Search" onClick={clickHandler}>
        Search
      </Button>
    </div>
  );
};

export default Search;

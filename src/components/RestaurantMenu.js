import React from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  return <h1>Restaurant Id : {id}</h1>;
};

export default RestaurantMenu;

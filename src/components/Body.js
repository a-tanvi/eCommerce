import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import EmptyPage from "./EmptyPage";

const Body = ({ restaurants = [] }) => {
  console.log(restaurants);
  if (restaurants.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div id="container">
      {restaurants?.map((resturant) => {
        return (
          <ResturantCard resturant={resturant.info} key={resturant.info.id} />
        );
      })}
    </div>
  );
};

export default Body;

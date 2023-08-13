import React from "react";
import { SWIGGY_URL } from "../../config";
const ResturantCard = ({ resturant = {} }) => {
  let rating;
  if (resturant.avgRatingString > 4) rating = "green";
  else if (resturant.avgRatingString > 3) rating = "#bc8035";
  else rating = "red";

  return (
    <div id="card">
      <h3>{resturant.name}</h3>
      <img src={SWIGGY_URL + resturant.cloudinaryImageId} id="cardImage"></img>

      <div style={{ background: rating }}>
        <h5 style={{ color: "black" }}>Rating : {resturant.avgRatingString}</h5>
      </div>
      <h5>Cuisines : {resturant.cuisines.join(", ")}</h5>
    </div>
  );
};

export default ResturantCard;

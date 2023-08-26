import React from "react";
import { SWIGGY_URL } from "../../config";
import { Link } from "react-router-dom";

const ResturantCard = ({ resturant = {} }) => {
  const resId = resturant.feeDetails.restaurantId;

  let ratingColorClass;
  if (resturant.avgRatingString > 4) {
    ratingColorClass = "green";
  } else if (resturant.avgRatingString > 3) {
    ratingColorClass = "orange";
  } else {
    ratingColorClass = "red";
  }

  return (
    <div id="card">
      <Link to={"/restaurant/" + resId}>
        <h3>{resturant.name}</h3>
        <img
          src={SWIGGY_URL + resturant.cloudinaryImageId}
          id="cardImage"
        ></img>

        <div className={`rating-container ${ratingColorClass}`}>
          <h5 className="rating-text">Rating: {resturant.avgRatingString}</h5>
        </div>
        <h5>Cuisines : {resturant.cuisines.join(", ")}</h5>
      </Link>
    </div>
  );
};

export default ResturantCard;

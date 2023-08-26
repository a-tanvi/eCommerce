import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { SWIGGY_URL } from "../../config.js";

const RestaurantMenu = () => {
  const { id } = useParams();

  const { restaurantInfo, menuInfo, loading } = useRestaurantMenu({ id });

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="menu">
          <div className="restaurant-container">
            <h1 className="restaurant-name">{restaurantInfo.name}</h1>
            <img
              className="restaurant-logo"
              src={SWIGGY_URL + restaurantInfo.cloudinaryImageId}
              alt="restaurant-logo"
            />
            <span className="cost-for-two">
              Cost for two : {restaurantInfo.costForTwoMessage}
            </span>
          </div>
          <div className="menu-container">
            {menuInfo?.map((item) => {
              console.log(item.card.info);
              return (
                <ItemCard
                  itemInfo={item?.card?.info}
                  key={item?.card?.info?.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default RestaurantMenu;

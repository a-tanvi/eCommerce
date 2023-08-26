import React, { useState, useEffect } from "react";
import { RESTAURANT_API } from "../config";

const useRestaurantMenu = ({ id }) => {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menuInfo, setMenuInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    try {
      setLoading(true);
      const data = await fetch(RESTAURANT_API + id);
      const json = await data.json();
      const temp1 = () => {
        for (let i = 0; i < json?.data?.cards.length; i++) {
          let checkData = json?.data?.cards[i]?.card?.card?.info;

          if (checkData !== undefined) {
            return checkData;
          }
        }
        return null;
      };
      setRestaurantInfo(temp1());

      const temp2 = () => {
        for (let i = 0; i < json?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i].groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards;

          if (checkData !== undefined) {
            return checkData;
          }
        }
        return null;
      };

      setMenuInfo(temp2());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    restaurantInfo,
    setRestaurantInfo,
    menuInfo,
    setMenuInfo,
    loading,
    setLoading,
  };
};

export default useRestaurantMenu;

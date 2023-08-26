import { useState, useEffect } from "react";
import { API_URL } from "../config";

const useRestaurantData = () => {
  const [restaurantLists, setRestaurantLists] = useState([]); // all data
  const [restaurants, setRestaurants] = useState([]); // filtered data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    setLoading(true);
    try {
      const temp = await fetch(API_URL);
      const jsonData = await temp.json();

      const data = () => {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      };
      setRestaurantLists(data);
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    restaurantLists,
    restaurants,
    loading,
    setRestaurantLists,
    setRestaurants,
    setLoading,
  };
};

export default useRestaurantData;

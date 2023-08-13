import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Shimmer from "./src/components/Shimmer";
import { API_URL } from "./config";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const App = () => {
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

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) return <Shimmer />;
  return (
    <BrowserRouter>
      <Header
        showSearch={true}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        restaurantLists={restaurantLists}
      />
      <Routes>
        <Route path="/" element={<Body restaurants={restaurants} />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

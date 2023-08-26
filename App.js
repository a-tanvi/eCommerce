import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Shimmer from "./src/components/Shimmer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import useRestaurantData from "./utils/useRestaurantData";
import useOnline from "./utils/useOnline";

const App = () => {
  const { restaurantLists, restaurants, loading, setRestaurants } =
    useRestaurantData();

  const isOnline = useOnline();

  {
    !isOnline && <h1>Connect to internet</h1>;
  }
  return (
    <>
      <BrowserRouter>
        <Header
          showSearch={true}
          restaurants={restaurants}
          setRestaurants={setRestaurants}
          restaurantLists={restaurantLists}
        />
        <Routes>
          {loading && <Route path="*" element={<Shimmer />} />}
          {!loading && (
            <Route path="/" element={<Body restaurants={restaurants} />} />
          )}
          <Route path="/about" element={<About />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

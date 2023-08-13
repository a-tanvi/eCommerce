import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ShimmerCard = () => {
  return <div className="shimmer-effect"></div>;
};

const Shimmer = () => {
  const shimmerCards = Array.from({ length: 8 }, (_, index) => (
    <div className="shimmer-card" key={index}>
      <ShimmerCard />
    </div>
  ));

  return (
    <>
      <Header />
      <div className="shimmer-container">{shimmerCards}</div>;
      <Footer />
    </>
  );
};

export default Shimmer;

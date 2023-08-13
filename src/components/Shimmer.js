import React from "react";

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
      <div className="shimmer-container">{shimmerCards}</div>;
    </>
  );
};

export default Shimmer;

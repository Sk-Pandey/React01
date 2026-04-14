import React from "react";

const Price = ({ Prices }) => {
  return (
    <div className="bg-amber-300 space-x-6 rounded-b-xl py-3">
      <span style={{ textDecoration: "line-through", color: "gray" }}>
        Rs.{Prices[0]}
      </span>
      <span style={{ fontWeight: "bold" }}>Rs.{Prices[1]}</span>
    </div>
  );
};

export default Price;

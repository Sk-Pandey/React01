import React from "react";
import Description from "./Description";
import Price from "./Price";

const ProductCard = ({ title, features, Prices }) => {
  return (
    <div className="inline-block border-2 rounded-xl text-center min-w-80">
      <Description title={title} features={features} />
      <Price Prices={Prices} />
    </div>
  );
};

export default ProductCard;

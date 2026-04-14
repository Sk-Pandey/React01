import React from "react";

const Description = ({ title, features }) => {
  return (
    <div className="space-y-4 m-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {features.map((feature, index) => {
        return <p key={index}>{feature}</p>;
      })}
    </div>
  );
};

export default Description;

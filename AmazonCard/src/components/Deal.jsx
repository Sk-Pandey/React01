import React from "react";
import Description from "./Description";
import Price from "./Price";
import ProductCard from "./ProductCard";

const Deal = () => {
  const products = [
    {
      title: "iPhone 15",
      features: ["A16 Chip", "48MP Camera"],
      Prices: [89999, 84999],
    },
    {
      title: "Samsung S23",
      features: ["120Hz Display", "64MP Camera"],
      Prices: [79999, 64999],
    },
    {
      title: "OnePlus 12",
      features: ["Fast Charging", "Smooth UI"],
      Prices: [69999, 62999],
    },
    {
      title: "Google Pixel 8",
      features: ["Best Camera", "Stock Android"],
      Prices: [75999, 70999],
    },
    {
      title: "Realme GT 6",
      features: ["144Hz Display", "Snapdragon"],
      Prices: [35999, 32999],
    },
    {
      title: "Xiaomi 14",
      features: ["Leica Camera", "Fast Processor"],
      Prices: [65999, 60999],
    },
    {
      title: "Vivo X100",
      features: ["Zeiss Camera", "AMOLED Display"],
      Prices: [63999, 58999],
    },
    {
      title: "Oppo Reno 11",
      features: ["Slim Design", "Portrait Camera"],
      Prices: [38999, 34999],
    },
    {
      title: "Nothing Phone 2",
      features: ["Glyph Interface", "Clean UI"],
      Prices: [44999, 41999],
    },
    {
      title: "Motorola Edge 40",
      features: ["Curved Display", "Lightweight"],
      Prices: [29999, 26999],
    },
    {
      title: "iQOO Neo 9",
      features: ["Gaming Chip", "Fast Charging"],
      Prices: [35999, 32999],
    },
    {
      title: "Asus ROG Phone 7",
      features: ["Gaming Beast", "Cooling System"],
      Prices: [74999, 69999],
    },
    {
      title: "Samsung A54",
      features: ["Water Resistant", "Good Camera"],
      Prices: [38999, 34999],
    },
    {
      title: "Redmi Note 13 Pro",
      features: ["200MP Camera", "Budget Friendly"],
      Prices: [25999, 22999],
    },
    {
      title: "Poco F5",
      features: ["Snapdragon 7+", "Value for Money"],
      Prices: [29999, 26999],
    },
    {
      title: "Honor 90",
      features: ["Curved Screen", "High Res Camera"],
      Prices: [37999, 34999],
    },
    {
      title: "Sony Xperia 5 V",
      features: ["Compact Design", "Pro Camera"],
      Prices: [89999, 84999],
    },
    {
      title: "Nokia X30",
      features: ["Clean Android", "Durable Build"],
      Prices: [32999, 29999],
    },
    {
      title: "Lava Agni 2",
      features: ["Indian Brand", "Curved Display"],
      Prices: [24999, 21999],
    },
    {
      title: "Infinix Zero 30",
      features: ["Selfie Camera", "Budget"],
      Prices: [22999, 19999],
    },
  ];
  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-6">
        Blockbuster Deals on Computer Accessories I Shop Now
      </h1>
      <div className="flex gap-8 p-12 flex-wrap justify-center">
        {products.map((data, index) => {
          return (
            <ProductCard
              key={index}
              title={data.title}
              features={data.features}
              Prices={data.Prices}
            />
          );
        })}
      </div>
    </>
  );
};

export default Deal;

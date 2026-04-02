import React from "react";

const Filter = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 60000,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Laptop",
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 30000,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Phone",
    },
    {
      id: 3,
      name: "Shoes",
      category: "Fashion",
      price: 2500,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Shoes",
    },
    {
      id: 4,
      name: "T-Shirt",
      category: "Fashion",
      price: 800,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Tshirt",
    },
    {
      id: 5,
      name: "Watch",
      category: "Accessories",
      price: 5000,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Watch",
    },
    {
      id: 6,
      name: "Headphones",
      category: "Electronics",
      price: 2500,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Headphones",
    },
    {
      id: 7,
      name: "Backpack",
      category: "Accessories",
      price: 1500,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Bag",
    },
    {
      id: 8,
      name: "Keyboard",
      category: "Electronics",
      price: 1200,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Keyboard",
    },
    {
      id: 9,
      name: "Mouse",
      category: "Electronics",
      price: 700,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Mouse",
    },
    {
      id: 10,
      name: "Jacket",
      category: "Fashion",
      price: 3000,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Jacket",
    },
    {
      id: 11,
      name: "Sunglasses",
      category: "Accessories",
      price: 1800,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Glasses",
    },
    {
      id: 12,
      name: "Tablet",
      category: "Electronics",
      price: 20000,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Tablet",
    },
    {
      id: 13,
      name: "Jeans",
      category: "Fashion",
      price: 2200,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Jeans",
    },
    {
      id: 14,
      name: "Charger",
      category: "Electronics",
      price: 900,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Charger",
    },
    {
      id: 15,
      name: "Cap",
      category: "Fashion",
      price: 500,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Cap",
    },
    {
      id: 16,
      name: "Speaker",
      category: "Electronics",
      price: 3500,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Speaker",
    },
    {
      id: 17,
      name: "Wallet",
      category: "Accessories",
      price: 1200,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Wallet",
    },
    {
      id: 18,
      name: "Smartwatch",
      category: "Electronics",
      price: 8000,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Watch",
    },
    {
      id: 19,
      name: "Belt",
      category: "Accessories",
      price: 700,
      available: true,
      image: "https://dummyimage.com/200x200/000/fff&text=Belt",
    },
    {
      id: 20,
      name: "Hoodie",
      category: "Fashion",
      price: 1800,
      available: false,
      image: "https://dummyimage.com/200x200/000/fff&text=Hoodie",
    },
  ];
  return (
    <div className="bg-rose-400 flex flex-wrap gap-8 h-full p-12 justify-center">
      {products
        .filter((data) => data.category == "Electronics")
        .map((item) => {
          return (
            <div key={item.id} className="bg-amber-50 h-116 w-75 rounded-xl">
              <img
                className="mx-auto w-full rounded-t-xl"
                src={item.image}
                alt="Product Image"
              />
              <div className="pl-4 space-y-2">
                <h1>{item.name}</h1>
                <h3 className="cat">{item.category}</h3>
                <h2>Rs.{item.price}</h2>
                <h3>{item.available ? "Available" : "Out of Stock"}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;

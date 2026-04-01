import React from "react";

const Map = () => {
  const product = [
    {
      productId: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
    },
    {
      productId: 2,
      name: "Smartphone",
      price: 15999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      productId: 3,
      name: "Laptop",
      price: 55999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      productId: 4,
      name: "Smartwatch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    },
    {
      productId: 5,
      name: "Bluetooth Speaker",
      price: 2999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      productId: 6,
      name: "Gaming Mouse",
      price: 1499,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    },
    {
      productId: 7,
      name: "Mechanical Keyboard",
      price: 3499,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    },
    {
      productId: 8,
      name: "Tablet",
      price: 12999,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      productId: 9,
      name: "DSLR Camera",
      price: 45999,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQyz4bYvm0UqZwEs0PmF3ed6kYDKnlAZgQOLCNqZfuZxps1DOVio1RQ9jSFEHEORcpceFN1PjhHytG9TYWIepuyGiVPW-AY",
    },
    {
      productId: 10,
      name: "Power Bank",
      price: 999,
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    },
  ];
  return (
    <>
      <h1 className="webname">Sasta Amazon</h1>
      <div className="flex flex-wrap gap-8 p-12 justify-center">
        {product.map((data) => {
          return (
            <div key={data.productId}>
              <div>
                <img
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "10px",
                  }}
                  src={data.image}
                  alt="product image"
                />
              </div>
              <div className="pl-4">
                <h1>{data.name}</h1>
                <h2>Rs.{data.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Map;

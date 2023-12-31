import React from "react";
import Banner from "./Banner";
import ProductItem from "../product/ProductItem";

const Home = () => {
  const shoesData = [
    {
      id: 1,
      name: "Running Shoes",
      price: 99.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 2,
      name: "Casual Shoes",
      price: 79.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 129.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 129.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 129.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 129.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 129.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 129.99,
      discount: 10,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    },
    // Add more shoe data as needed
  ];

  return (
    <div className="">
      <div className="container mx-auto mt-8">
        <div className="text-center text-[16px] flex flex-col items-center">
          <h2 className="text-xl font-thin mb-2">Sản phẩm nổi bật</h2>
          <div className="border border-gray-400 w-1/12"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  py-12">
          {shoesData.map((shoe) => (
            <ProductItem key={shoe.id} {...shoe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

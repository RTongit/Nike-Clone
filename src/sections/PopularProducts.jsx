import React from "react";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section className="flex flex-col bg-gray-100  padding ">
      <div>
        <h2 className="text-5xl font-medium ">
          Our <span className="text-amber-600 font-medium">Popular</span>{" "}
          Products
        </h2>
        <p className="xl:text-lg mt-6 mb-6">
          Experience top notch quality and style with our sought after
          selections.Discover a world of comfort,design and value
        </p>
      </div>

      <div className="flex gap-5 md:flex-row flex-col">
        {products.map((temp) => (
          <div key={temp.name} className="flex flex-col max-md:items-center">
            <img src={temp.imgURL} alt={temp.name} className="max-md:w-[270px]"/>
            <p>⭐ (4.5)</p>
            <p><a href="https://www.nike.com/in/" target="_blank" className="hover:underline no-underline">{temp.name}</a></p>
            <p className="text-amber-600">{temp.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

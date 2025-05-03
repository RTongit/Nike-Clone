import React from "react";
import Button from "../Components/button.jsx";
import ShoeCard from "../Components/ShoeCard.jsx";
import { statistics,shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { useState } from "react";
// import ShoeCard from "../Components/ShoeCard";


const Hero = () => {
  const [ShoeURL,setShoeURL] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="flex max-container  xl:flex-row flex-col justify-center gap-5 min-h-screen z-1 bg-gray-200"
    >
      <div className="relative xl:w-[65%] w-full flex flex-col justify-center items-start max-xl:padding-x pt-24 padding-l">
        <p className="text-xl text-amber-600">Our Summer Collection</p>
        <h1 className="mt-10 md:text-7xl text-[60px] font-bold">
          <span className="">The New Arrival</span>
          <br/>
          <span className="text-amber-600 mt-10 inline-block">Nike </span>
          {" "}
          <span>Shoes</span>
        </h1>
        <p className="text-gray-600 xl:text-lg mt-6 mb-12">
          Discover Stylish Nike arrivals,quality comfort,and innovation for your
          active life
        </p>
        <Button content="Shop Now" iconURL={arrowRight} />
        <div className="flex gap-16 w-full mt-20">
          {statistics.map((temp) => (
            <div key={temp.label}>
              <p className="text-4xl font-bold">{temp.value}</p>
              <p className="text-gray-600">{temp.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-300 flex flex-col items-center justify-center gap-y-10 h-[90vh]">

        <img
          src={ShoeURL}
          alt="bigshoe1"
          className="relative z-10 object-cover"
        />

        <div className="flex gap-5 max-xl:mb-5 max-xl:mt-[640px] absolute z-100 mt-[600px]">
         {shoes.map((temp,index)=>(
          <ShoeCard key={index} ShoeInfo={temp} ShoeURL={ShoeURL} setShoeURL={setShoeURL}/>
         ))}
        </div>

      </div>

    </section>
  );
};

export default Hero;

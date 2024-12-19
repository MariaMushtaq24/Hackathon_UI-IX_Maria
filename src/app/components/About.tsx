import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function About() {
  return (
    <section className="text-gray-600 body-font py-12">
      {/* Main Section */}
      <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
        {/* Content Section */}
        <div className="bg-[#029FAE] p-14 shadow-lg text-white w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 flex flex-col justify-between items-center md:items-start">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 text-white text-center md:text-left">
            About Us - Comforty
          </h1>
          <p className="leading-relaxed mb-20 text-center md:text-left">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="px-6 py-2 bg-teal-800 text-white rounded hover:bg-teal-900 transition duration-300">
            View Collection
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 overflow-hidden mt-6 md:mt-0">
          <div className="relative w-full h-96">
            <Image
              src="/images/Image Block.png"
              alt="About Us Image"
              fill
              className="object-cover"
              sizes="w-619 h-478"
            />
          </div>
        </div>
      </div>

      {/* Brand Difference Section */}
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-20">
        What Makes Our Brand Different
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-28 py-8">
        {[
          {
            emoji: "🚚",
            title: "Next day as standard",
            text: "Order before 3 pm to get standard delivery the next day.",
          },
          {
            emoji: "✅",
            title: "Made by true artisans",
            text: "Handmade crafted goods made with real passion and craftsmanship.",
          },
          {
            emoji: "💳",
            title: "Unbeatable prices",
            text: "For our materials and quality, you won’t find better prices anywhere.",
          },
          {
            emoji: "🌱",
            title: "Recycled packaging",
            text: "We use 100% recycled to ensure our footprint is more manageable.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 md:p-8 shadow-md text-teal-700 flex flex-col justify-between"
          >
            <span className="block mb-4 text-lg font-semibold">{item.emoji}</span>
            <h2 className="text-2xl md:text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-teal-600 text-base md:text-md">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Products Section */}
<div className="sm:px-8 md:px-16 lg:px-28 py-8">
  <h1 className="text-2xl md:text-3xl font-bold mb-8">Our Popular Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
    {[
      {
        image: "/images/sofa1.png",
        title: "The Poplar Suede Sofa",
        price: "$99.00",
        size: { width: 630, height: 375 },
      },
      {
        image: "/images/Chair1.png",
        title: "The Dandy Chair",
        price: "$99.00",
        size: { width: 305, height: 375 },
      },
      {
        image: "/images/Parent.png",
        title: "The Dandy Chair",
        price: "$99.00",
        size: { width: 305, height: 375 },
      },
    ].map((product, index) => (
      <div
        key={index}
        className={`flex flex-col ${
          index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
        }`} 
      >
        <Image
          src={product.image}
          alt={product.title}
          width={product.size.width}
          height={product.size.height}
          className="shadow-lg object-cover"
        />
        <h2 className="mt-4 font-medium text-lg">{product.title}</h2>
        <span className="text-black text-lg font-bold">{product.price}</span>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-8">
      {/* Section Title */}
      <h1 className="text-2xl font-bold mb-8">Top Categories</h1>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Wing Chair */}
        <div className="relative group rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/wing-chair.png"
            alt="Wing Chair"
            width={400}
            height={300}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-lg font-semibold">Wing Chair</h2>
            <p className="text-sm">3,584 Products</p>
          </div>
        </div>

        {/* Wooden Chair */}
        <div className="relative group rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/wooden-chair.png"
            alt="Wooden Chair"
            width={400}
            height={300}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-lg font-semibold">Wooden Chair</h2>
            <p className="text-sm">157 Products</p>
          </div>
        </div>

        {/* Desk Chair */}
        <div className="relative group rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/desk-chair.png"
            alt="Desk Chair"
            width={400}
            height={300}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-lg font-semibold">Desk Chair</h2>
            <p className="text-sm">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;

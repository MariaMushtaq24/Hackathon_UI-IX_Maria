import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-8">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="relative flex flex-col bg-white">
          <span className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1">New</span>
          <Image
            src="/images/library-stool-1.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="object-cover"
          />
          <h2 className="mt-4 text-md font-medium">Library Stool Chair</h2>
          <span className="text-lg font-bold">$20</span>
        </div>

        {/* Product 2 */}
        <div className="relative flex flex-col bg-white">
          <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1">Sales</span>
          <Image
            src="/images/library-stool-2.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="object-cover"
          />
          <h2 className="mt-4 text-md font-medium">Library Stool Chair</h2>
          <span className="text-lg font-bold text-red-500">$20 <s className="text-gray-500">$30</s></span>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col bg-white">
          <Image
            src="/images/library-stool-3.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="object-cover"
          />
          <h2 className="mt-4 text-md font-medium">Library Stool Chair</h2>
          <span className="text-lg font-bold">$20</span>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col bg-white">
          <Image
            src="/images/library-stool-4.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="rounded-lg object-cover"
          />
          <h2 className="mt-4 text-md font-medium">Library Stool Chair</h2>
          <span className="text-lg font-bold">$20</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

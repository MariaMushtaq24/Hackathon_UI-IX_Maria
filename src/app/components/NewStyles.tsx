import React from "react";
import Image from "next/image";

export default function NewStyles() {
  return (
    <div className="flex items-center justify-center sm:px-8 md:px-16 lg:px-28 py-8  min-h-screen">
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {/* Vertical Text */}
        <div className="absolute left-0 top-3/4 transform -translate-y-1/2 -rotate-90 origin-left text-gray-700 text-lg font-semibold">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Large Image */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/images/chair3.png"
            alt="Orange Chair"
            width={648}
            height={648}
            className="object-cover"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-2 gap-4 col-span-2 md:col-span-1">
          <Image
            src="/images/chair4.png"
            alt="White Chair 1"
            width={312}
            height={312}
            className="object-cover"
          />
          <Image
            src="/images/chair01.png"
            alt="White Chair 2"
            width={312}
            height={312}
            className="object-cover"
          />
          <Image
            src="/images/chair6.png"
            alt="Gray Chair"
            width={312}
            height={312}
            className="object-cover"
          />
          <Image
            src="/images/chair01.png"
            alt="White Chair 3"
            width={312}
            height={312}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

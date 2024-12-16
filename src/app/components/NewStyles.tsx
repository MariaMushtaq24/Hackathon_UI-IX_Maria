import React from "react";
import Image from "next/image";

export default function NewStyles() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 p-6 border-2 border-blue-400">
        {/* Vertical Text */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left text-gray-700 text-lg font-semibold">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Large Image */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/orange-chair.jpg"
            alt="Orange Chair"
            width={400}
            height={500}
            layout="responsive"
            className="object-cover"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-2 gap-4 col-span-2 md:col-span-1">
          <Image
            src="/white-chair-1.jpg"
            alt="White Chair 1"
            width={200}
            height={200}
            layout="responsive"
            className="object-cover"
          />
          <Image
            src="/white-chair-2.jpg"
            alt="White Chair 2"
            width={200}
            height={200}
            layout="responsive"
            className="object-cover"
          />
          <Image
            src="/gray-chair.jpg"
            alt="Gray Chair"
            width={200}
            height={200}
            layout="responsive"
            className="object-cover"
          />
          <Image
            src="/white-chair-3.jpg"
            alt="White Chair 3"
            width={200}
            height={200}
            layout="responsive"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

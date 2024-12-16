import React from "react";
import Home from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import TopCategories from "../components/TopCategories";

const page = () => {
    return (
      <div>
        <Hero/>
        <FeaturedProducts/>
        <TopCategories/>
      </div>
    );
}

export default page;
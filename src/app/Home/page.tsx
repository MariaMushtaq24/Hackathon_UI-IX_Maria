import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import TopCategories from "../components/TopCategories";
import ProductGrid from "../components/ProductGrid";
import NewStyles from "../components/NewStyles";

const page = () => {
    return (
      <div>
        <Hero/>
        <FeaturedProducts/>
        <TopCategories/>
        <NewStyles/>
        <ProductGrid/>
      </div>
    );
}

export default page;
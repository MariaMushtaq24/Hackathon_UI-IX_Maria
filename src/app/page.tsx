import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import TopCategories from "./components/TopCategories";
import ProductGrid from "./components/ProductGrid";
import NewStyles from "./components/NewStyles";

  export default function Home() {
    return (
      <main>
        <Hero />
        <FeaturedProducts/>
        <TopCategories/>
        <NewStyles/>
        <ProductGrid/>
      </main>
    );
  }


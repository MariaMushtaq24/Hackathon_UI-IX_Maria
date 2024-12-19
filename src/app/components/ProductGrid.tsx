import ProductCard from "./ProductCard";

const products = [
  { name: "Library Stool Chair", price: 20, image: "/images/chair01.png", label: "New" },
  { name: "Library Stool Chair", price: 20, salePrice: 30, image: "/images/chair2.png", label: "Sales" },
  { name: "Library Stool Chair", price: 20, image: "/images/chair3.png" },
  { name: "Library Stool Chair", price: 20, image: "/images/chair4.png" },
  { name: "Library Stool Chair", price: 20, image: "/images/chair5.png", label: "New" },
  { name: "Library Stool Chair", price: 20, salePrice: 30, image: "/images/chair6.png", label: "Sales" },
  { name: "Library Stool Chair", price: 20, image: "/images/chair7.png" },
  { name: "Library Stool Chair", price: 20, image: "/images/chair1.png" },
];

const ProductGrid = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-8">
      <h2 className="text-3xl font-semibold text-center mb-2">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[312] h-[312]">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

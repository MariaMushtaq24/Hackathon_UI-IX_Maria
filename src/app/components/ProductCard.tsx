import Image from "next/image";

interface Product {
  name: string;
  price: number;
  image: string;
  label?: string;
  salePrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative group overflow-hidden bg-white p-4">
      {/* Label */}
      {product.label && (
        <div
          className={`absolute top-2 left-2 px-2 py-1 text-white text-xs rounded z-10 ${
            product.label === "New" ? "bg-green-500" : "bg-orange-500"
          }`}
        >
          {product.label}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-80 w-full mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Product Details */}
      <h3 className="text-gray-700 font-medium hover:text-[#029FAE] text-md mb-1">
        {product.name}
      </h3>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold">${product.price}</span>
        {product.salePrice && (
          <span className="text-sm text-gray-400 line-through">
            ${product.salePrice}
          </span>
        )}
      </div>

      {/* Cart Icon */}
      <button className="absolute bottom-4 right-4 p-2 bg-gray-100 rounded-md hover:bg-[#029FAE] transition">
        🛒
      </button>
    </div>
  );
};

export default ProductCard;

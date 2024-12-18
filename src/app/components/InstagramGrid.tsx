const products = [
    { id: 1, image: "/images/wooden-chair.png", alt: "Chair 1" },
    { id: 2, image: "/images/chair5.png", alt: "Chair 2" },
    { id: 3, image: "/images/chair2.png", alt: "Chair 3" },
    { id: 4, image: "/images/chair01.png", alt: "Chair 4" },
    { id: 5, image: "/images/chair3.png", alt: "Chair 5" },
    { id: 6, image: "/images/desk-chair.png", alt: "Chair 6" },
  ];
  
  const InstagramGrid = () => {
    return (
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-6">
          Follow Products And Discounts On Instagram
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="rounded-md shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InstagramGrid;
  
import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";

const FeaturedProduct = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="h-48 rounded-md mb-4 overflow-hidden">
        <img
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  );
};

function Hero() {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <section className="relative mt-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover Amazing Products
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our curated collection of top-quality items tailored to your needs. Shop now and experience the difference!
        </p>
        <a
          href="/cart"
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    
    </section>
  );
}

export default Hero;
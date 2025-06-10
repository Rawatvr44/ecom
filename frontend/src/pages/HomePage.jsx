import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

import Hero from "../components/Hero";

const categories = [
  { href: "/gold-chains", name: "gold-chains", imageUrl: "/goldchain.jpg" },
  { href: "/gold-rings", name: "gold-rings", imageUrl: "/goldring.jpg" },
  { href: "/gold-earrings", name: "gold-earrings", imageUrl: "/goldearring.jpg" },
  { href: "/gold-necklaces", name: "gold-necklaces", imageUrl: "/goldnecklace.jpg" },
  { href: "/gold-bangles", name: "gold-bangles", imageUrl: "/bangles.jpg" },
  { href: "/gold-bracelets", name: "gold-bracelets", imageUrl: "/bracelet.jpg" },
  { href: "/gold-coins", name: "gold-coins", imageUrl: "/coins.jpg" },
  { href: "/gold-bars", name: "gold-bars", imageUrl: "/bars.jpg" },
  { href: "/gold-pendants", name: "gold-pendants", imageUrl: "/pendants.jpg" },
  { href: "/gold-anklets", name: "gold-anklets", imageUrl: "/anklets.jpg" },
  { href: "/gold-chokers", name: "gold-chokers", imageUrl: "/chokers.jpg" },
  { href: "/bridal-gold", name: "bridal-gold", imageUrl: "/bridalset.jpg" },
];


const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<Hero/>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}

				<h1 className='text-center text-5xl sm:text-6xl font-bold text-amber-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-amber-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

			</div>
		</div>
	);
};
export default HomePage;

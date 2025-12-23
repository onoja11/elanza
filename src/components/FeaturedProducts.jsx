import React from "react";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#2E2B26] mb-4">
                        Featured Products
                    </h2>
                    <p className="text-xl text-[#6B675E] max-w-2xl mx-auto">
                        Discover handpicked items from our top-rated sellers and emerging designers
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <ProductCard
                        badge="Trending"
                        image="https://readdy.ai/api/search-image?query=Beautiful%20African%20woman%20wearing%20elegant%20ankara%20luxury%20dress%20with%20traditional%20patterns%2C%20modern%20cut%2C%20sophisticated%20fashion%20photography%2C%20studio%20lighting%2C%20clean%20white%20background%2C%20high-end%20fashion%20model%2C%20professional%20product%20photography&width=400&height=500&seq=prod1&orientation=portrait"                        
                        title="Ankara Luxury Dress"
                        brand="AfroChic Designs"
                        price="$89.99"
                        oldPrice="$120"
                        rating={4}
                        reviews={124}
                    />

                    {/* Card 2 */}
                    <ProductCard
                        badge="Bestseller"
                        image="https://readdy.ai/api/search-image?query=Premium%20handcrafted%20African%20leather%20handbag&width=400&height=500"
                        title="Handcrafted Leather Bag"
                        brand="Lagos Leather Co."
                        price="$156"
                        rating={4}
                        reviews={89}
                    />

                    {/* Card 3 */}
                    <ProductCard
                        badge="Limited"
                        image="https://readdy.ai/api/search-image?query=African%20kente%20print%20sneakers&width=400&height=500"
                        title="Kente Print Sneakers"
                        brand="Heritage Footwear"
                        price="$78.5"
                        oldPrice="$95"
                        rating={4}
                        reviews={203}
                    />

                    {/* Card 4 */}
                    <ProductCard
                        badge="Luxury"
                        image="https://readdy.ai/api/search-image?query=African%20gold%20beaded%20necklace&width=400&height=500"
                        title="Gold Beaded Necklace"
                        brand="Royal Jewelry"
                        price="$234"
                        rating={5}
                        reviews={67}
                    />

                </div>

                {/* View All */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C] px-8 py-4 text-lg rounded-xl transition">
                        View All Products
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;

/* ---------------- Components ---------------- */

const ProductCard = ({
    badge,
    image,
    title,
    brand,
    price,
    oldPrice,
    rating,
    reviews,
}) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <span className="absolute top-4 left-4 bg-[#B89B5E] text-[#F8F5EF] px-3 py-1 rounded-full text-sm font-medium">
                    {badge}
                </span>

                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Heart size={18} className="text-[#2E2B26] hover:text-[#B89B5E]" />
                </button>
            </div>

            <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-2">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={
                                    i < rating
                                        ? "fill-[#B89B5E] text-[#B89B5E]"
                                        : "text-[#B89B5E]"
                                }
                            />
                        ))}
                    </div>
                    <span className="text-[#6B675E] text-sm ml-2">({reviews})</span>
                </div>

                <h3 className="font-semibold text-[#2E2B26] mb-1 group-hover:text-[#B89B5E] transition">
                    {title}
                </h3>
                <p className="text-[#6B675E] text-sm mb-3">{brand}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#2E2B26]">{price}</span>
                        {oldPrice && (
                            <span className="text-[#6B675E] line-through text-sm">
                                {oldPrice}
                            </span>
                        )}
                    </div>

                    <button className="w-10 h-10 bg-[#B89B5E] hover:bg-[#A47E3C] rounded-full flex items-center justify-center transition">
                        <ShoppingCart size={18} className="text-[#F8F5EF]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

import React from "react";
import { Heart, Star, ShoppingCart, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Ankara Luxury Dress",
      seller: "AfroChic Designs",
      price: 89.99,
      oldPrice: 120,
      rating: 4,
      reviews: 124,
      tag: "Trending",
      img: "https://readdy.ai/api/search-image?query=Beautiful%20African%20woman%20wearing%20elegant%20ankara%20luxury%20dress%20with%20traditional%20patterns%2C%20modern%20cut%2C%20sophisticated%20fashion%20photography%2C%20studio%20lighting%2C%20clean%20white%20background%2C%20high-end%20fashion%20model%2C%20professional%20product%20photography&width=400&height=500&seq=prod1&orientation=portrait",
    },
    {
      title: "Handcrafted Leather Bag",
      seller: "Lagos Leather Co.",
      price: 156,
      oldPrice: null,
      rating: 4,
      reviews: 89,
      tag: "Bestseller",
      img: "https://readdy.ai/api/search-image?query=Premium%20handcrafted%20African%20leather%20handbag%20with%20traditional%20patterns%2C%20luxury%20craftsmanship%2C%20elegant%20product%20photography%2C%20clean%20background%2C%20sophisticated%20lighting%2C%20high-end%20fashion%20accessory%2C%20professional%20studio%20shot&width=400&height=500&seq=prod2&orientation=portrait",
    },
    {
      title: "Kente Print Sneakers",
      seller: "Heritage Footwear",
      price: 78.5,
      oldPrice: 95,
      rating: 4,
      reviews: 203,
      tag: "Limited",
      img: "https://readdy.ai/api/search-image?query=Stylish%20African%20kente%20print%20sneakers%20with%20traditional%20patterns%2C%20modern%20design%2C%20premium%20footwear%20photography%2C%20clean%20white%20background%2C%20sophisticated%20product%20display%2C%20high-end%20fashion%20shoes%2C%20professional%20studio%20lighting&width=400&height=500&seq=prod3&orientation=portrait",
    },
    {
      title: "Gold Beaded Necklace",
      seller: "Royal Jewelry",
      price: 234,
      oldPrice: null,
      rating: 5,
      reviews: 67,
      tag: "Luxury",
      img: "https://readdy.ai/api/search-image?query=Elegant%20African%20gold%20beaded%20necklace%20with%20traditional%20design%2C%20luxury%20jewelry%20photography%2C%20sophisticated%20lighting%2C%20clean%20background%2C%20premium%20craftsmanship%2C%20high-end%20fashion%20accessory%2C%20professional%20product%20shot&width=400&height=500&seq=prod4&orientation=portrait",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2B26] mb-4">Featured Products</h2>
          <p className="text-xl text-[#6B675E] max-w-2xl mx-auto">
            Discover handpicked items from our top-rated sellers and emerging designers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={product.img}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#B89B5E] text-[#F8F5EF] px-3 py-1 rounded-full text-sm font-medium">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="text-[#2E2B26] hover:text-[#B89B5E] w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`text-[#B89B5E] w-3 h-3 ${i < product.rating ? "fill-[#B89B5E]" : ""}`}
                      />
                    ))}
                  </div>
                  <span className="text-[#6B675E] text-sm ml-2">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-[#2E2B26] mb-1 group-hover:text-[#B89B5E] transition-colors">{product.title}</h3>
                <p className="text-[#6B675E] text-sm mb-3">{product.seller}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-[#2E2B26]">${product.price}</span>
                    {product.oldPrice && <span className="text-[#6B675E] line-through text-sm">${product.oldPrice}</span>}
                  </div>
                  <button className="w-10 h-10 bg-[#B89B5E] hover:bg-[#A47E3C] rounded-full flex items-center justify-center transition-colors">
                    <ShoppingCart className="text-[#F8F5EF] w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap cursor-pointer bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C] px-8 py-4 text-lg rounded-xl">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

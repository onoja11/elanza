import React from "react";
import {
  Shirt,
  Footprints,
  Handbag as Bag,
  Palette,
  Scissors,
  Crown,
  ArrowRight,
} from "lucide-react";

const FashionCategory = () => {
  const categories = [
    {
      title: "Clothing",
      description: "Menswear, womenswear, traditional & streetwear",
      img: "https://readdy.ai/api/search-image?query=Elegant%20African%20clothing%20collection%20featuring%20traditional%20and%20modern%20garments%2C%20colorful%20fabrics%2C%20sophisticated%20fashion%20display%2C%20boutique%20setting%20with%20warm%20lighting%2C%20luxury%20clothing%20rack%2C%20high-end%20fashion%20photography%2C%20clean%20minimalist%20background&width=400&height=300&seq=cat1&orientation=landscape",
      icon: Shirt,
    },
    {
      title: "Shoes",
      description: "Sneakers, heels, sandals, boots & luxury footwear",
      img: "https://readdy.ai/api/search-image?query=Premium%20African%20shoe%20collection%20display%20featuring%20luxury%20sneakers%20heels%20sandals%20and%20traditional%20footwear%2C%20elegant%20shoe%20store%20setting%2C%20sophisticated%20lighting%2C%20high-end%20boutique%20atmosphere%2C%20clean%20organized%20display%2C%20professional%20product%20photography&width=400&height=300&seq=cat2&orientation=landscape",
      icon: Footprints,
    },
    {
      title: "Bags & Accessories",
      description: "Handbags, backpacks, jewelry & fashion accessories",
      img: "https://readdy.ai/api/search-image?query=Luxury%20African%20handbags%20and%20accessories%20collection%2C%20elegant%20jewelry%20display%2C%20premium%20leather%20bags%2C%20traditional%20and%20modern%20accessories%2C%20sophisticated%20boutique%20setting%2C%20warm%20golden%20lighting%2C%20high-end%20fashion%20photography%2C%20clean%20minimalist%20background&width=400&height=300&seq=cat3&orientation=landscape",
      icon: Bag,
    },
    {
      title: "Fabrics",
      description: "Premium textiles, African prints & custom materials",
      img: "https://readdy.ai/api/search-image?query=Beautiful%20African%20fabric%20collection%20featuring%20colorful%20traditional%20prints%2C%20premium%20textiles%2C%20ankara%20patterns%2C%20kente%20cloth%2C%20sophisticated%20fabric%20store%20display%2C%20warm%20lighting%2C%20organized%20fabric%20rolls%2C%20high-end%20textile%20photography%2C%20clean%20background&width=400&height=300&seq=cat4&orientation=landscape",
      icon: Palette,
    },
    {
      title: "Services",
      description: "Tailoring, styling, photography & fashion services",
      img: "https://readdy.ai/api/search-image?query=Professional%20African%20fashion%20services%20including%20tailoring%20workshop%2C%20fashion%20photography%20studio%2C%20styling%20session%2C%20makeup%20artistry%2C%20sophisticated%20service%20environment%2C%20modern%20equipment%2C%20professional%20atmosphere%2C%20warm%20lighting%2C%20clean%20organized%20space&width=400&height=300&seq=cat5&orientation=landscape",
      icon: Scissors,
    },
    {
      title: "Luxury Items",
      description: "Watches, perfumes, sunglasses & premium fashion",
      img: "https://readdy.ai/api/search-image?query=Luxury%20African%20fashion%20accessories%20including%20premium%20watches%2C%20designer%20sunglasses%2C%20high-end%20perfumes%2C%20elegant%20jewelry%2C%20sophisticated%20luxury%20boutique%20display%2C%20golden%20lighting%2C%20premium%20product%20photography%2C%20clean%20minimalist%20background&width=400&height=300&seq=cat6&orientation=landscape",
      icon: Crown,
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2B26] mb-4">
            Explore Our Fashion Universe
          </h2>
          <p className="text-xl text-[#6B675E] max-w-3xl mx-auto">
            From traditional African designs to modern luxury fashion, discover
            everything you need in our comprehensive marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={cat.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#B89B5E] rounded-full flex items-center justify-center mb-2">
                      <Icon className="text-[#F8F5EF] w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2E2B26] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[#6B675E] mb-4">{cat.description}</p>
                  <div className="flex items-center text-[#B89B5E] group-hover:text-[#A47E3C] transition-colors">
                    <span className="font-medium">Explore Collection</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FashionCategory;

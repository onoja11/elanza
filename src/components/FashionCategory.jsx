import React from "react";
import {
  Sun,
  Star,
  Zap,
  Gem,
  Globe,
  Lock,
  PartyPopper,
  Rocket,
  ArrowRight,
} from "lucide-react";

const FashionCategory = () => {
  const categories = [
    {
      title: "Seasonal Stories",
      description: "Discover clothes and accessories designed for summer, winter, spring, and autumn — made to fit the weather and your lifestyle.",
      img: "https://readdy.ai/api/search-image?query=Fashion%20collection%20collage%20representing%20four%20seasons%20summer%20winter%20autumn%20spring%2C%20diverse%20models%2C%20high%20fashion%20editorial%2C%20vibrant%20colors%20and%20textures%2C%20cinematic%20lighting&width=400&height=300&seq=col1&orientation=landscape",
      icon: Sun,
    },
    {
      title: "Editor’s Choice",
      description: "Our fashion experts choose the best designs, giving you trusted recommendations for style and quality.",
      img: "https://readdy.ai/api/search-image?query=Fashion%20editor%20curating%20clothes%20on%20rack%2C%20luxury%20boutique%20setting%2C%20close%20up%20of%20hand%20picking%20fabric%2C%20gold%20star%20quality%20aesthetic%2C%20warm%20ambient%20lighting%2C%20sophisticated&width=400&height=300&seq=col2&orientation=landscape",
      icon: Star,
    },
    {
      title: "Street Luxe",
      description: "Bold, modern outfits inspired by city life, mixed with luxury details for a confident look.",
      img: "https://readdy.ai/api/search-image?query=Urban%20streetwear%20fashion%20photoshoot%2C%20trendy%20african%20city%20background%2C%20model%20wearing%20hoodie%20and%20blazer%20mix%2C%20cool%20sunglasses%2C%20dynamic%20pose%2C%20lifestyle%20photography&width=400&height=300&seq=col3&orientation=landscape",
      icon: Zap,
    },
    {
      title: "Luxury Essence",
      description: "High-end fashion pieces like watches, bags, perfumes, and jewelry — crafted for elegance and prestige.",
      img: "https://readdy.ai/api/search-image?query=Luxury%20fashion%20still%20life%20perfume%20bottle%20gold%20watch%20and%20leather%20bag%2C%20black%20velvet%20background%2C%20expensive%20jewelry%2C%20golden%20lighting%2C%20premium%20product%20photography&width=400&height=300&seq=col4&orientation=landscape",
      icon: Gem,
    },
    {
      title: "Heritage Reimagined",
      description: "African and cultural designs reimagined for today’s world, keeping heritage alive while adding fresh style.",
      img: "https://readdy.ai/api/search-image?query=Modern%20African%20fashion%20fusion%2C%20traditional%20prints%20on%20contemporary%20suits%20and%20dresses%2C%20cultural%20pride%2C%20fashion%20runway%20shot%2C%20vibrant%20patterns%2C%20elegant&width=400&height=300&seq=col5&orientation=landscape",
      icon: Globe,
    },
    {
      title: "Limited Masterpieces",
      description: "Special fashion pieces made in small numbers. Exclusive items you won’t find everywhere.",
      img: "https://readdy.ai/api/search-image?query=Exclusive%20limited%20edition%20fashion%20piece%20in%20glass%20display%20case%2C%20museum%20style%20lighting%2C%20rare%20fabric%2C%20couture%20dress%2C%20high%20value%20item%2C%20minimalist%20luxury&width=400&height=300&seq=col6&orientation=landscape",
      icon: Lock,
    },
    {
      title: "Occasion & Ceremony",
      description: "Wedding dresses, party outfits, and ceremonial clothing designed to make your big day unforgettable.",
      img: "https://readdy.ai/api/search-image?query=Elegant%20African%20wedding%20reception%2C%20bride%20and%20groom%20in%20luxurious%20traditional%20attire%2C%20celebration%20confetti%2C%20joyful%20atmosphere%2C%20party%20fashion%2C%20high%20resolution&width=400&height=300&seq=col7&orientation=landscape",
      icon: PartyPopper,
    },
    {
      title: "Future Icons",
      description: "Discover new and rising designers who are shaping the future of fashion with bold ideas.",
      img: "https://readdy.ai/api/search-image?query=Futuristic%20avant-garde%20fashion%20design%2C%20young%20fashion%20designer%20working%20on%20holographic%20sketch%2C%20neon%20lighting%2C%20innovative%20clothing%20tech%2C%20bold%20colors%2C%20creative%20studio&width=400&height=300&seq=col8&orientation=landscape",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2B26] mb-4">
            Collections That Define Style
          </h2>
          <p className="text-xl text-[#6B675E] max-w-3xl mx-auto">
            From heritage to high fashion, explore curated stories that celebrate
            culture, creativity, and individuality.
          </p>
        </div>

        {/* Updated grid to grid-cols-4 for large screens to fit 8 items perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <p className="text-[#6B675E] mb-4 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="flex items-center text-[#B89B5E] group-hover:text-[#A47E3C] transition-colors">
                    <span className="font-medium text-sm">Explore Collection</span>
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
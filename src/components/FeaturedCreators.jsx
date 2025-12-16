import React from "react";
import { MapPin } from "lucide-react";

const FeaturedCreators = () => {
  const creators = [
    { 
        name: "Aso Lux Studio", 
        loc: "Abuja, Nigeria", 
        tags: ["Heritage", "Luxury"], 
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Lagos Streetwear", 
        loc: "Lagos, Nigeria", 
        tags: ["Streetwear", "Urban"], 
        img: "https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Zaria Threads", 
        loc: "Kaduna, Nigeria", 
        tags: ["Textile", "Artisan"], 
        img: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Eko Couture", 
        loc: "Lagos, Nigeria", 
        tags: ["Bridal", "Bespoke"], 
        img: "https://images.unsplash.com/photo-1566847879656-7f41f021e1dd?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Urban Sahel", 
        loc: "Kano, Nigeria", 
        tags: ["Minimalist", "Modest"], 
        img: "https://images.unsplash.com/photo-1607823479895-a24a529e4695?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "NextGen Afri", 
        loc: "Port Harcourt", 
        tags: ["Avant-Garde", "Future"], 
        img: "https://images.unsplash.com/photo-1584288092289-4591a27e779a?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-24 bg-[#2E2B26] text-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-[#B89B5E] pl-6">Featured Nigerian Creators</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div key={index} className="bg-[#383530] rounded-lg overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              <div className="h-80 overflow-hidden">
                <img src={creator.img} alt={creator.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 bg-[#B89B5E] text-[#F8F5EF] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{creator.name}</h3>
                <div className="flex items-center text-[#B89B5E] text-sm mb-4">
                  <MapPin size={14} className="mr-1" /> {creator.loc}
                </div>
                <div className="flex gap-2 mb-6">
                  {creator.tags.map((tag, i) => (
                    <span key={i} className="text-xs border border-[#6B675E] text-[#F8F5EF]/70 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-[#2E2B26] border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#2E2B26] transition-colors font-medium rounded uppercase text-sm tracking-widest">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;
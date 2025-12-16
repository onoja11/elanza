import React from "react";
import { ArrowRight } from "lucide-react";

const CuratedCollections = () => {
  const collections = [
    { 
        title: "Streetwear (Nigeria)", 
        desc: "The pulse of Lagos and Abuja.", 
        img: "https://images.unsplash.com/photo-1523396870177-b7b43207372f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        title: "Heritage Wear", 
        desc: "Traditional styles, modern cuts.", 
        img: "https://images.unsplash.com/photo-1567425883282-359f428d0979?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        title: "Womenswear", 
        desc: "Elegance for every occasion.", 
        img: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        title: "Accessories", 
        desc: "The perfect finishing touch.", 
        img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#2E2B26] mb-12 text-center">Curated Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
              <img src={col.img} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{col.title}</h3>
                <p className="text-white/80 text-sm mb-4">{col.desc}</p>
                <div className="flex items-center text-[#B89B5E] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Explore Collection <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCollections;
import React from "react";
import { Users, Scissors, Package, ArrowRight } from "lucide-react";

const CoreFeatures = () => {
  const cards = [
    {
      title: "Creators",
      description: "Discover authentic fashion brands and designers showcasing ready-made collections and cultural designs.",
      button: "View Creators",
      icon: <Users className="w-8 h-8 text-[#B89B5E]" />,
      // Image: Fashion designers working
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop",
    },
    {
      title: "Fashion Services",
      description: "Hire skilled professionals to bring fashion ideas to life. Ranging from Tailors to Fashion illustrators.",
      button: "Book Services",
      icon: <Scissors className="w-8 h-8 text-[#B89B5E]" />,
      // Image: Tailor working
      img: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1072&auto=format&fit=crop",
    },
    {
      title: "Suppliers",
      description: "Source fabrics, materials, and production resources from trusted suppliers.",
      button: "Explore Suppliers",
      icon: <Package className="w-8 h-8 text-[#B89B5E]" />,
      // Image: Fabrics/Textiles
      img: "https://images.unsplash.com/photo-1605289967086-35d228d2966e?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2B26]">What Do We Have?</h2>
          <p className="text-[#6B675E] mt-4 text-lg">Everything you need to create and consume fashion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="group bg-[#F8F5EF] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[#2E2B26]/5">
              <div className="h-56 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"/>
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-[#2E2B26] mb-3">{card.title}</h3>
                <p className="text-[#6B675E] mb-8 leading-relaxed">{card.description}</p>
                <button className="inline-flex items-center font-semibold text-[#2E2B26] group-hover:text-[#B89B5E] transition-colors">
                  {card.button} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
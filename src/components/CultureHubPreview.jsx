import React from "react";

const CultureHubPreview = () => {
  const articles = [
    { 
        title: "The Rise of Nigerian Streetwear", 
        category: "Fashion Stories", 
        img: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf3d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        title: "Modern Takes on Ankara", 
        category: "Style Guide", 
        img: "https://images.unsplash.com/photo-1589808803445-5f606821262d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        title: "Fashion Creators in Abuja", 
        category: "Spotlight", 
        img: "https://images.unsplash.com/photo-1572495641004-2842105222cc?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#2E2B26] mb-12">Culture Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6">
                <img src={article.img} alt={article.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-[#B89B5E] text-xs font-bold uppercase tracking-widest">{article.category}</span>
              <h3 className="text-2xl font-bold text-[#2E2B26] mt-2 mb-4 group-hover:text-[#B89B5E] transition-colors">{article.title}</h3>
              <span className="text-[#2E2B26] font-medium border-b-2 border-[#2E2B26] pb-1">Read Story</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureHubPreview;
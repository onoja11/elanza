import React from "react";

const SuppliersPreview = () => {
  const categories = [
    { 
        name: "Fabrics & Textiles", 
        sub: "Ankara, Lace, Cotton", 
        img: "https://images.unsplash.com/photo-1604543265057-a4b570e30d7c?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Printing & Embroidery", 
        sub: "Custom detailing services", 
        img: "https://images.unsplash.com/photo-1626294711388-7e44a046c3b6?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Packaging & Labels", 
        sub: "Brand your products", 
        img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-[#2E2B26]">Suppliers & Materials</h2>
          <a href="#" className="hidden md:block text-[#B89B5E] font-medium hover:underline">View All Categories</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 rounded-lg overflow-hidden mb-6">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2B26]">{cat.name}</h3>
              <p className="text-[#6B675E] mb-4">{cat.sub}</p>
              <button className="w-full py-2 border border-[#2E2B26]/10 rounded text-[#2E2B26] hover:bg-[#2E2B26] hover:text-[#F8F5EF] transition-colors">
                View Suppliers
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuppliersPreview;
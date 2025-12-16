import React from "react";
import { Scissors, Printer, PenTool, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Tailors & Garment Makers",
      desc: "Custom clothing, alterations, and bespoke fitting.",
      icon: <Scissors className="w-10 h-10 text-[#F8F5EF]" />,
      bg: "bg-[#2E2B26]",
    },
    {
      title: "Garment Printing",
      desc: "Screen printing, embroidery, and fabric branding.",
      icon: <Printer className="w-10 h-10 text-[#2E2B26]" />,
      bg: "bg-[#B89B5E]",
    },
    {
      title: "Fashion Illustration",
      desc: "Concept sketches, tech packs, and design visuals.",
      icon: <PenTool className="w-10 h-10 text-[#B89B5E]" />,
      bg: "bg-white border-2 border-[#B89B5E]",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#2E2B26] mb-12">Services You Can Book Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`p-8 rounded-2xl ${service.bg} ${index === 2 ? 'text-[#2E2B26]' : 'text-[#F8F5EF]'} transition-transform hover:-translate-y-1`}>
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className={`mb-8 text-lg ${index === 2 ? 'text-[#6B675E]' : 'text-white/80'}`}>{service.desc}</p>
              <button className={`inline-flex items-center font-bold uppercase tracking-wider text-sm ${index === 1 ? 'text-[#2E2B26]' : index === 2 ? 'text-[#B89B5E]' : 'text-[#B89B5E]'}`}>
                View Providers <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
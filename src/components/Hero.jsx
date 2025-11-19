import React, { useState, useEffect } from "react";
import img from "../assets/photo-1571513800374-df1bbe650e56.avif";
import img2 from "../assets/photo-1515886657613-9f3515b0c78f.avif";
import img3 from "../assets/photo-1520473378652-85d9c4aee6cf.avif";
import {
  ShoppingBag,
  ArrowRight,
  Store,
  ArrowLeft,
} from "lucide-react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      bg: `linear-gradient(rgba(46, 43, 38, 0.45), rgba(46, 43, 38, 0.45)), url(${img})`,
    },
    {
      id: 2,
      bg: `linear-gradient(rgba(46, 43, 38, 0.45), rgba(46, 43, 38, 0.45)), url(${img2})`,
    },
    {
      id: 3,
      bg: `linear-gradient(rgba(46, 43, 38, 0.45), rgba(46, 43, 38, 0.45)), url(${img3})`,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden font-inter">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out min-h-screen bg-cover bg-center bg-no-repeat ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: slide.bg }}
        >
          <div className="absolute inset-0 bg-[#2E2B26]/30 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
            <div className="max-w-2xl text-left">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#F8F5EF] mb-6 leading-tight">
                Africa's Premier
                <span className="text-[#B89B5E]"> Fashion Marketplace</span>
              </h1>

              <p className="text-xl text-[#F8F5EF]/90 mb-8 leading-relaxed font-inter">
                Discover luxury fashion, connect with top designers, book
                professional services, and access premium fabrics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C] px-8 py-4 text-lg rounded-xl shadow-lg">
                  <ShoppingBag className="mr-2 w-5 h-5" /> Explore Collections
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <button className="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer border-2 border-[#F8F5EF] text-[#F8F5EF] hover:bg-[#F8F5EF] hover:text-[#2E2B26] px-8 py-4 text-lg rounded-xl shadow-lg">
                  <Store className="mr-2 w-5 h-5" /> Start Selling Today
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#2E2B26]/40 backdrop-blur-sm hover:bg-[#2E2B26]/60 rounded-full p-3 border border-[#F8F5EF]/20 transition-all duration-300 z-20"
      >
        <ArrowLeft className="text-[#F8F5EF] text-xl" />
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#2E2B26]/40 backdrop-blur-sm hover:bg-[#2E2B26]/60 rounded-full p-3 border border-[#F8F5EF]/20 transition-all duration-300 z-20"
      >
        <ArrowRight className="text-[#F8F5EF] text-xl" />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-[#B89B5E] scale-125"
                : "bg-[#F8F5EF]/40 hover:bg-[#F8F5EF]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
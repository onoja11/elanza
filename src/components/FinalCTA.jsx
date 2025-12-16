import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-28 bg-[#F8F5EF] text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2E2B26] mb-8">Join the future of multicultural fashion.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-10 py-4 bg-[#2E2B26] text-[#F8F5EF] font-bold rounded-lg text-lg hover:bg-[#4B2E2B] transition-all">
            Join as Creator
          </button>
          <button className="px-10 py-4 bg-transparent border-2 border-[#2E2B26] text-[#2E2B26] font-bold rounded-lg text-lg hover:bg-[#2E2B26] hover:text-[#F8F5EF] transition-all">
            Explore Elanza
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
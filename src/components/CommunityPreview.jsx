import React from "react";
import { MessageCircle, Users, Zap } from "lucide-react";

const CommunityPreview = () => {
  const items = [
    { title: "Collaboration Requests", desc: "Find photographers, models, or stylists for your next project.", icon: <Users /> },
    { title: "Creator Discussions", desc: "Join conversations about trends, sourcing, and business tips.", icon: <MessageCircle /> },
    { title: "Fashion Groups", desc: "Connect with niche communities tailored to your interests.", icon: <Zap /> },
  ];

  return (
    <section className="py-20 bg-[#2E2B26] text-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-[#383530] p-8 rounded-xl hover:bg-[#B89B5E] transition-colors duration-300 group">
              <div className="w-12 h-12 bg-[#2E2B26] rounded-full flex items-center justify-center mb-6 text-[#B89B5E] group-hover:text-[#F8F5EF]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#F8F5EF]/70 mb-6 group-hover:text-[#F8F5EF]">{item.desc}</p>
              <button className="text-sm font-bold uppercase tracking-wider group-hover:underline">Join Conversation</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;
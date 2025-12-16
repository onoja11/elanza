import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";
// Ensure you have your logo path correct
import logo from "../assets/Document_from_elanza-removebg-preview.png"; 

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const navLinks = [
    {
      label: "Explore",
      type: "mega",
      columns: [
        {
          title: "Trending",
          items: ["Creators", "New Collections", "Featured Services"],
        },
        {
          title: "By Culture",
          items: ["African", "Asian", "Middle Eastern", "European", "Indigenous"],
        },
        {
          title: "By Category",
          items: ["Streetwear", "Couture", "Luxury", "Heritage", "Bridal", "Sportswear"],
        },
      ],
    },
    {
      label: "Creators",
      type: "list",
      items: ["Fashion Brands", "Emerging Designers", "Cultural Designers", "Digital Fashion Creators", "Creator Portfolios", "Creator Spotlights"],
    },
    {
      label: "Collections",
      type: "list",
      items: ["Menswear", "Womenswear", "Streetwear", "Luxury", "Couture", "Heritage", "Accessories", "Footwear", "Limited Drops", "Digital Fashion"],
    },
    {
      label: "Services",
      type: "list",
      items: ["Tailors", "Costume Makers", "Clothing/Garment Printing", "Fabric & Garment Care", "Fashion Illustration"],
    },
    {
      label: "Suppliers",
      type: "list",
      items: ["Fabrics & Textiles", "Accessories & Trims", "Leather & Materials", "Printing & Embroidery", "Packaging & Labels", "Sustainable Materials"],
    },
    {
      label: "Marketplace",
      type: "list",
      items: ["Shop Products", "Book Services", "Buy Materials", "Featured Deals", "Seasonal Campaigns"],
    },
    {
      label: "Community",
      type: "list",
      items: ["Creator Forums", "Collaboration Requests", "Fashion Groups", "Challenges", "Workshops", "Events"],
    },
    {
      label: "Culture Hub",
      type: "list",
      items: ["Fashion Stories", "Cultural Spotlights", "Designer Interviews", "Style Guides", "Documentaries", "Global Fashion Map"],
    },
  ];

  return (
    <nav className="bg-[#F8F5EF] shadow-sm sticky top-0 z-50 font-sans border-b border-[#2E2B26]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="/">
              <img
                alt="Elanza Logo"
                className="h-12 w-auto object-contain"
                src={logo} 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors text-xs uppercase tracking-wide">
                  {link.label}
                  <ChevronDown size={12} className="ml-1" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 min-w-[200px] bg-white shadow-xl border-t-2 border-[#B89B5E] rounded-b-md py-6 px-6 transition-all duration-200 z-50">
                    {link.type === "mega" ? (
                      <div className="flex gap-10 w-[600px]">
                        {link.columns.map((col, idx) => (
                          <div key={idx} className="flex-1">
                            <h3 className="text-[#B89B5E] font-bold text-xs uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                              {col.title}
                            </h3>
                            <ul className="space-y-2">
                              {col.items.map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-gray-600 hover:text-[#2E2B26] text-sm block hover:translate-x-1 transition-transform">
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2 w-52">
                        {link.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="text-gray-600 hover:text-[#B89B5E] text-sm block hover:translate-x-1 transition-transform">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons & Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#2E2B26] hover:text-[#B89B5E] transition-colors p-2">
              <Search size={20} />
            </button>
            <button className="text-[#2E2B26] hover:text-[#B89B5E] transition-colors relative p-2">
              <ShoppingCart size={20} />
            </button>
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-4 ml-2">
              <a href="/signin" className="text-[#2E2B26] hover:text-[#B89B5E] font-medium text-sm px-3 py-2">
                Sign In
              </a>
              <a href="/join" className="bg-[#2E2B26] text-[#F8F5EF] hover:bg-[#4B2E2B] px-4 py-2 text-sm rounded-md font-medium transition-all shadow-md">
                Join Elanza
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-[#2E2B26] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Simplified for brevity - kept logic from previous code) */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#F8F5EF] border-t border-gray-100 h-screen overflow-y-auto pb-20">
             {/* Mobile links logic here... same as previous */}
             <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                    <div key={link.label} className="border-b border-gray-200">
                        <button onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)} className="w-full flex justify-between py-3 font-medium">
                            {link.label} <ChevronDown size={16} />
                        </button>
                        {mobileSubmenu === link.label && (
                            <div className="pl-4 pb-2 space-y-2 text-sm text-gray-600">
                                {link.type === 'mega' ? link.columns.map(c => c.items.map(i => <div key={i} className="py-1">{i}</div>)) : link.items.map(i => <div key={i} className="py-1">{i}</div>)}
                            </div>
                        )}
                    </div>
                ))}
             </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
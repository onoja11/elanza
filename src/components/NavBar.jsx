import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import logo from  "../assets/Document_from_elanza-removebg-preview.png";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#F8F5EF] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">

               <img
              alt="Elanza Logo"
              className="h-15 w-auto"
              src={logo}
              onContextMenu={(e) => e.preventDefault()}
            />
            
            </a>
           
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Fashion Brands</a>
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Marketplace</a>
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Collection</a>
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Services</a>
            {/* <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#"></a> */}
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Community</a>
            {/* <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#"></a> */}
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#2E2B26] hover:text-[#B89B5E] transition-colors">
              <Search size={20} />
            </button>

            <button className="text-[#2E2B26] hover:text-[#B89B5E] transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#B89B5E] text-[#F8F5EF] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer border-2 border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#F8F5EF] px-4 py-2 text-sm rounded-md">
              Sign In
            </button>

            <button className="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C] px-4 py-2 text-sm rounded-md">
              Join Elanza
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2E2B26]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F8F5EF] px-4 pt-4 pb-6 space-y-4 shadow-inner">
          <a className="block text-[#2E2B26] hover:text-[#B89B5E] font-medium" href="#">Fashion Brands</a>
          <a className="block text-[#2E2B26] hover:text-[#B89B5E] font-medium" href="#">Marketplace</a>
          <a className="block text-[#2E2B26] hover:text-[#B89B5E] font-medium" href="#">Services</a>
          <a className="block text-[#2E2B26] hover:text-[#B89B5E] font-medium" href="#">Fabrics</a>
          <a className="block text-[#2E2B26] hover:text-[#B89B5E] font-medium" href="#">Community</a>
          <a className="block text-[#2E2B26] hover:text-[#B89B5E] font-medium" href="#">About</a>

          <div className="pt-4 border-t border-[#B89B5E]/30 space-y-3">
            <button className="w-full border-2 border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#F8F5EF] px-4 py-2 text-sm rounded-md font-medium">
              Sign In
            </button>
            <button className="w-full bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C] px-4 py-2 text-sm rounded-md font-medium">
              Join Elanza
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

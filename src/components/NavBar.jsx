import React from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-[#F8F5EF] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              alt="Elanza Logo"
              className="h-10 w-auto"
              src="https://static.readdy.ai/image/06f0d95184828a864e32f4bae95fe0d7/db3470626049ad7ee77fcef975cc2b2a.png"
            />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Fashion Brands</a>
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Marketplace</a>
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Collections</a>
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Services</a>
            {/* <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Fabrics</a> */}
            <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">Community</a>
            {/* <a className="text-[#2E2B26] hover:text-[#B89B5E] font-medium transition-colors" href="#">About</a> */}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-[#2E2B26] hover:text-[#B89B5E] transition-colors">
              <Search size={20} />
            </button>

            {/* Cart */}
            <button className="text-[#2E2B26] hover:text-[#B89B5E] transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#B89B5E] text-[#F8F5EF] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Sign In */}
            <button className="inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap cursor-pointer border-2 border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#F8F5EF] px-4 py-2 text-sm rounded-md">
              Sign In
            </button>

            {/* Join Elanza */}
            <button className="inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap cursor-pointer bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C] px-4 py-2 text-sm rounded-md">
              Join Elanza
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-[#2E2B26]">
            <Menu size={26} />
          </button>

          <div className="">

          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

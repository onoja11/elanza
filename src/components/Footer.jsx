import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2E2B26] text-[#F8F5EF] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              alt="Elanza Logo"
              className="h-12 w-auto mb-4 filter"
              src="https://static.readdy.ai/image/06f0d95184828a864e32f4bae95fe0d7/db3470626049ad7ee77fcef975cc2b2a.png"
            />
            <p className="text-[#6B675E] mb-6 max-w-md">
              Africa's largest online fashion ecosystem connecting brands, tailors, suppliers, and customers in one trusted platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#4B2E2B] hover:text-[#B89B5E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4B2E2B] hover:text-[#B89B5E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4B2E2B] hover:text-[#B89B5E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4B2E2B] hover:text-[#B89B5E] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold font-playfair text-[#F8F5EF] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Shop Fashion', 'Book Services', 'Fabric Store', 'Become a Seller', 'Join as Professional'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-[#6B675E] hover:text-[#B89B5E] transition-colors font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-playfair text-[#F8F5EF] mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Shipping Info', 'Returns', 'Size Guide'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-[#6B675E] hover:text-[#B89B5E] transition-colors font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#4B2E2B] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F8F5EF] text-sm font-inter">© 2024 Elanza. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {[
              { text: 'Privacy Policy', href: '#' },
              { text: 'Terms of Service', href: '#' },
              { text: 'Powered by Readdy', href: 'https://readdy.ai/?origin=logo' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="text-[#F8F5EF] hover:text-[#B89B5E] text-sm transition-colors font-inter">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Scissors, Camera, User, Brush, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Tailoring",
      description: "Professional tailors create bespoke clothing tailored to your exact measurements and style preferences.",
      price: 45,
      img: "https://readdy.ai/api/search-image?query=Professional%20African%20tailor%20working%20on%20custom%20clothing%20in%20modern%20workshop%2C%20sophisticated%20tailoring%20environment%2C%20measuring%20tape%2C%20fabric%20cutting%2C%20sewing%20machine%2C%20warm%20lighting%2C%20clean%20organized%20workspace%2C%20high-end%20craftsmanship&width=600&height=400&seq=serv1&orientation=landscape",
      icon: <Scissors className="text-[#F8F5EF] w-5 h-5" />,
    },
    {
      title: "Fashion Photography",
      description: "Capture your style with professional fashion photographers specializing in African fashion and beauty.",
      price: 120,
      img: "https://readdy.ai/api/search-image?query=Professional%20African%20fashion%20photography%20studio%20session%2C%20elegant%20model%20posing%2C%20sophisticated%20lighting%20setup%2C%20modern%20photography%20equipment%2C%20clean%20studio%20background%2C%20high-end%20fashion%20shoot%2C%20professional%20photographer%20working&width=600&height=400&seq=serv2&orientation=landscape",
      icon: <Camera className="text-[#F8F5EF] w-5 h-5" />,
    },
    {
      title: "Personal Styling",
      description: "Expert stylists help you curate the perfect wardrobe that reflects your personality and lifestyle.",
      price: 80,
      img: "https://readdy.ai/api/search-image?query=Professional%20African%20fashion%20stylist%20consulting%20with%20client%2C%20elegant%20clothing%20selection%2C%20modern%20boutique%20setting%2C%20wardrobe%20consultation%2C%20sophisticated%20styling%20session%2C%20luxury%20fashion%20environment%2C%20clean%20organized%20space&width=600&height=400&seq=serv3&orientation=landscape",
      icon: <User className="text-[#F8F5EF] w-5 h-5" />,
    },
    {
      title: "Makeup Artistry",
      description: "Professional makeup artists specializing in enhancing natural beauty for events and photoshoots.",
      price: 60,
      img: "https://readdy.ai/api/search-image?query=Professional%20African%20makeup%20artist%20applying%20elegant%20makeup%2C%20sophisticated%20beauty%20studio%2C%20modern%20makeup%20station%2C%20high-end%20cosmetics%2C%20warm%20lighting%2C%20clean%20organized%20workspace%2C%20luxury%20beauty%20treatment%2C%20professional%20artistry&width=600&height=400&seq=serv4&orientation=landscape",
      icon: <Brush className="text-[#F8F5EF] w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 bg-[#2E2B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F8F5EF] mb-4">Professional Fashion Services</h2>
          <p className="text-xl text-[#6B675E] max-w-3xl mx-auto">
            Connect with skilled professionals who bring your fashion vision to life with expert craftsmanship and creativity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-[#F8F5EF] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={service.img}
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#B89B5E] rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E2B26] mb-3">{service.title}</h3>
                  <p className="text-[#6B675E] mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#B89B5E]">From ${service.price}</span>
                    <button className="inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap cursor-pointer bg-[#2E2B26] text-[#F8F5EF] hover:bg-[#4B2E2B] px-4 py-2 text-sm rounded-md">
                      Book Now <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap border-2 border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#F8F5EF] px-8 py-4 text-lg rounded-xl">
            View All Services <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

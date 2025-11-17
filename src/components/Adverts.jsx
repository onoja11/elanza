import React from "react";
import { Store, UserStar, Check, ArrowRight } from "lucide-react";

const Adverts = () => {
  const ctas = [
    {
      title: "Start Selling Today",
      description: "Join thousands of successful sellers and grow your fashion business with our trusted platform and global reach.",
      bgGradient: "from-[#B89B5E] to-[#A47E3C]",
      icon: <Store className="text-[#B89B5E] w-8 h-8" />,
      features: ["Zero setup fees", "Secure payments", "Global shipping"],
      buttonText: "Become a Seller",
      buttonBg: "bg-[#2E2B26] text-[#F8F5EF] hover:bg-[#4B2E2B]",
      img: "https://readdy.ai/api/search-image?query=African%20fashion%20entrepreneur%20working%20in%20modern%20boutique%2C%20successful%20business%20owner%2C%20elegant%20clothing%20store%2C%20professional%20environment%2C%20warm%20lighting%2C%20sophisticated%20retail%20space%2C%20luxury%20fashion%20business%2C%20clean%20organized%20display&width=800&height=600&seq=cta1&orientation=landscape",
    },
    {
      title: "Join as Professional",
      description: "Showcase your skills as a tailor, photographer, stylist, or makeup artist. Connect with clients and grow your business.",
      bgGradient: "from-[#2E2B26] to-[#4B2E2B]",
      icon: <UserStar className="text-[#B89B5E] w-8 h-8" />,
      features: ["Flexible scheduling", "Verified clients", "Instant payments"],
      buttonText: "Join Professionals",
      buttonBg: "bg-[#B89B5E] text-[#F8F5EF] hover:bg-[#A47E3C]",
      img: "https://readdy.ai/api/search-image?query=Professional%20African%20fashion%20designer%20working%20in%20creative%20studio%2C%20artistic%20workspace%2C%20fashion%20sketches%2C%20fabric%20samples%2C%20modern%20design%20environment%2C%20sophisticated%20lighting%2C%20creative%20professional%2C%20elegant%20workspace&width=800&height=600&seq=cta2&orientation=landscape",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {ctas.map((cta, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 lg:p-12 text-center overflow-hidden bg-gradient-to-br ${cta.bgGradient}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${cta.img})`,
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#F8F5EF] rounded-full flex items-center justify-center mx-auto mb-6">
                  {cta.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#F8F5EF] mb-4">{cta.title}</h3>
                <p className="text-[#F8F5EF]/90 mb-8 text-lg">{cta.description}</p>
                <div className="space-y-4 mb-8">
                  {cta.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center text-[#F8F5EF]">
                      <Check className="w-5 h-5 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap px-8 py-4 text-lg rounded-xl ${cta.buttonBg}`}
                >
                  {cta.buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adverts;

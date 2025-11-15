import { Code, Headphones, Palette, Search, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems."
  },
  {
    icon: Headphones,
    title: "Software Support",
    description: "Comprehensive maintenance and support services to keep your applications running smoothly 24/7."
  },
  {
    icon: Palette,
    title: "UI/UX Designs",
    description: "Create stunning, user-friendly interfaces that enhance user experience and drive engagement."
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    description: "Boost your online visibility and improve search rankings with our expert SEO strategies."
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "Maximize your ROI with targeted Google Ads campaigns that reach your ideal customers."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to transform your business and accelerate your digital journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

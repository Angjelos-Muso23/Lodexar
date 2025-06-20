import React from "react";

const ProductsSection = () => {
  const products = [
    {
      icon: "📱",
      title: "Lodexar Mobile",
      description:
        "Enterprise mobile application platform for seamless business operations on-the-go.",
      features: [
        "Cross-platform compatibility",
        "Offline functionality",
        "Real-time sync",
        "Advanced security",
      ],
      badge: "Popular",
    },
    {
      icon: "🛡️",
      title: "SecureShield Pro",
      description:
        "Advanced cybersecurity suite providing comprehensive protection for your digital assets.",
      features: [
        "Threat detection",
        "Firewall management",
        "Vulnerability scanning",
        "24/7 monitoring",
      ],
      badge: "New",
    },
    {
      icon: "📊",
      title: "DataViz Analytics",
      description:
        "Powerful business intelligence platform for data visualization and insights.",
      features: [
        "Interactive dashboards",
        "Real-time reporting",
        "Predictive analytics",
        "Custom integrations",
      ],
      badge: "Featured",
    },
    {
      icon: "☁️",
      title: "CloudSync Enterprise",
      description:
        "Scalable cloud infrastructure management platform for modern businesses.",
      features: [
        "Multi-cloud support",
        "Auto-scaling",
        "Cost optimization",
        "Performance monitoring",
      ],
      badge: "Enterprise",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Innovative Tech
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Products & Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge products designed to streamline
            operations, enhance security, and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">{product.icon}</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "Popular"
                      ? "bg-orange-100 text-orange-600"
                      : product.badge === "New"
                      ? "bg-green-100 text-green-600"
                      : product.badge === "Featured"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {product.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Stats */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-300">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                24/7
              </div>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

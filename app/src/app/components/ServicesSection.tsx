import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements and drive operational efficiency.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Desktop Software",
        "API Development",
      ],
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions that ensure reliability, security, and performance for your business applications.",
      features: [
        "AWS/Azure/GCP",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
      ],
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that leverage artificial intelligence to automate processes and gain valuable insights.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Recommendation Systems",
      ],
    },
    {
      icon: "🔒",
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security measures to protect your digital assets and ensure compliance with industry standards.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
      ],
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights that drive informed decision-making and business growth.",
      features: [
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Dashboard Creation",
      ],
    },
    {
      icon: "🔄",
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize your business processes and technology stack.",
      features: [
        "Process Optimization",
        "Legacy System Migration",
        "Change Management",
        "Training & Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Tech
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a complete suite of technology services designed to
            accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve
            your goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import Image from "next/image";
import React from "react";

import ai from "../../../public/service/AI.png";
import cloud from "../../../public/service/CloudInfrastructure.png";
import data from "../../../public/service/DataAnalytics.png";
import digital from "../../../public/service/DigitalTransformation.png";
import finance from "../../../public/service/Finance.png";
import software from "../../../public/service/SoftwareDevelopement.png";

const ServicesSection = () => {
  const services = [
    {
      icon: software,
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
      icon: cloud,
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
      icon: ai,
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
      icon: data,
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
      icon: finance,
      title: "Finance Technology Solutions",
      description:
        "Comprehensive financial technology solutions that streamline payment processing and enhance business financial operations.",
      features: [
        "Custom Payment Gateways",
        "Secure Payment Links & Checkout Systems",
        "Digital Invoicing Tools",
        "Subscription & Billing Integration",
        "Basic Reporting Dashboards",
      ],
    },
    {
      icon: digital,
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
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 text-sm font-medium text-white">
            Our Services
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            Comprehensive Tech
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            We offer a complete suite of technology services designed to
            accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="transform rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white">
          <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ready to Transform Your Business?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Let&apos;s discuss how our technology solutions can help you achieve
            your goals and stay ahead of the competition.
          </p>
          <a
            href="#contact-us"
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button className="transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
              Get Free Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

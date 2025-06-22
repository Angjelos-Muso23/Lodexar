import Image from "next/image";
import React from "react";

import logo from "../../../public/Logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex w-60 items-center justify-center">
              <Image src={logo} alt="Lodexar Logo" className="w-full" />
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-gray-400">
              Transforming businesses through innovative technology solutions.
              We help organizations achieve their digital transformation goals
              with cutting-edge software and services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Data Analytics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Finance Technology Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              © 2025 Lodexar Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/lodexar_privacy_policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                Privacy Policy
              </a>
              <a
                href="/lodexar_terms_of_service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

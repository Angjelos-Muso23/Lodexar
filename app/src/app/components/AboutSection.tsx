import React from "react";

const AboutSection = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            About Lodexar
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pioneering the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, Lodexar has been at the forefront of digital
            innovation, helping businesses transform their operations through
            cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age. We believe that every organization deserves access
                to world-class technology that transforms their potential into
                reality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading technology partner for businesses worldwide,
                known for delivering exceptional solutions that create lasting
                value and drive sustainable digital transformation.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Lodexar?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90">
                    Expert team with 10+ years of industry experience
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90">
                    Proven track record with 500+ successful projects
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90">
                    24/7 support and maintenance services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90">
                    Cutting-edge technology stack and methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white font-bold">500+</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Projects Completed
            </h4>
            <p className="text-gray-600">
              Successfully delivered solutions across various industries
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white font-bold">50+</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Expert Team
            </h4>
            <p className="text-gray-600">
              Skilled professionals with diverse technical expertise
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white font-bold">99.9%</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Uptime Guarantee
            </h4>
            <p className="text-gray-600">
              Reliable infrastructure and exceptional performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

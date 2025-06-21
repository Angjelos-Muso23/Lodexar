import React from "react";

const AboutSection = () => {
  return (
    <section id="about-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 text-sm font-medium text-white">
            About Lodexar
          </span>
          <h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-6xl">
            Pioneering the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Founded in 2020, Lodexar has been at the forefront of digital
            innovation, helping businesses transform their operations through
            cutting-edge technology solutions.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age. We believe that every organization deserves access
                to world-class technology that transforms their potential into
                reality.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-slate-50 to-gray-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                To be the leading technology partner for businesses worldwide,
                known for delivering exceptional solutions that create lasting
                value and drive sustainable digital transformation.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-8 text-white">
              <h3 className="mb-6 text-2xl font-bold">Why Choose Lodexar?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">
                    Expert team with 10+ years of industry experience
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">
                    Proven track record with 500+ successful projects
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">
                    24/7 support and maintenance services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">
                    Cutting-edge technology stack and methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <span className="text-xl font-bold text-white">500+</span>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Projects Completed
            </h4>
            <p className="text-gray-600">
              Successfully delivered solutions across various industries
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
              <span className="text-xl font-bold text-white">50+</span>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Expert Team
            </h4>
            <p className="text-gray-600">
              Skilled professionals with diverse technical expertise
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
              <span className="text-xl font-bold text-white">99.9%</span>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
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

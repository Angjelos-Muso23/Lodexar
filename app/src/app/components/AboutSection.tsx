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
            Founded in 2025, Lodexar is a technology startup driven by
            innovation and collaboration. We create smart digital solutions that
            accelerate growth and turn ideas into scalable, high-performance
            systems.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                At Lodexar, we bring bold ideas to life through smart, scalable
                technology. We don’t just build software we craft powerful
                solutions that fuel growth, unlock innovation, and help
                businesses lead with confidence in a fast-moving digital world.
                Every product we deliver is built with precision and purpose.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-slate-50 to-gray-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                To drive growth through innovation and collaboration. We create
                smart, purpose-driven solutions shaped by real-world needs and
                trusted partnerships.
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
                  <p className="text-white/90">Built Around Your Ideas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">Smart, Custom Solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">Agile and Reliable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <p className="text-white/90">Cross-Industry Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

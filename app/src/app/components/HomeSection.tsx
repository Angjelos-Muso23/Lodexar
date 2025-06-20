import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Leading Tech Solutions
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Business
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            With Smart Technology
          </span>
        </h1>

        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          We deliver cutting-edge software solutions, cloud infrastructure, and
          digital transformation services that drive innovation and accelerate
          your business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Explore Our Solutions
          </button>
          <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">
              Optimized performance for seamless user experiences
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-400 text-sm">
              Enterprise-grade security and 99.9% uptime guarantee
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-white font-semibold mb-2">
              Scalable Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Grow with confidence using our scalable architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

import Image from "next/image";
import React from "react";

import security from "../../../public/home/security.png";
import solutions from "../../../public/home/solutions.png";
import speed from "../../../public/home/speed.png";

const HomeSection = () => {
  return (
    <section
      id="home"
      style={{ minHeight: "calc(100vh - 72.8px" }}
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-6 md:py-0"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-16">
        <h1 className="mb-6 text-5xl leading-tight font-bold text-white lg:text-7xl">
          Transform Your Business
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            With Smart Technology
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-300 lg:text-2xl">
          We deliver cutting-edge software solutions, cloud infrastructure, and
          digital transformation services that drive innovation and accelerate
          your business growth.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="#services">
            <button className="transform rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25">
              Explore Our Solutions
            </button>
          </a>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
              <Image src={speed} alt="Lightning" width={40} height={40} />
            </div>
            <h3 className="mb-2 font-semibold text-white">Lightning Fast</h3>
            <p className="text-sm text-gray-400">
              Optimized performance for seamless user experiences
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
              <Image src={security} alt="Secure" width={30} height={30} />
            </div>
            <h3 className="mb-2 font-semibold text-white">Secure & Reliable</h3>
            <p className="text-sm text-gray-400">
              Enterprise-grade security and 99.9% uptime guarantee
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <Image src={solutions} alt="Scalable" width={30} height={30} />
            </div>
            <h3 className="mb-2 font-semibold text-white">
              Scalable Solutions
            </h3>
            <p className="text-sm text-gray-400">
              Grow with confidence using our scalable architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

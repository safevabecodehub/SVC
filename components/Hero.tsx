"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              SafeVibeCode
              <span className="block text-transparent bg-gradient-accent bg-clip-text">
                (SVC)
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              Токен AI-комьюнити нового поколения
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            SVC — это утилитарный токен, созданный для оплаты разработок,
            взаиморасчётов и инвестиций внутри сообщества AI-инженеров.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent-cyan/20">
              Get SVC
            </button>
            <button className="px-8 py-4 bg-card text-white font-semibold rounded-xl hover:bg-card/80 transition-colors border border-white/10">
              Join Crypto Chat
            </button>
          </div>
        </motion.div>

        {/* Right side - 3D Coin placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-3xl" />
            
            {/* 3D Coin Video */}
            <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl shadow-accent-purple/30 rounded-3xl border-2 border-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.3)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/coin.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-center mt-6 text-gray-500 text-sm">
            SVC Token • Internal Utility Asset
          </p>
        </motion.div>
      </div>
    </section>
  );
}

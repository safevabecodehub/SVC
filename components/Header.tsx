"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            SafeVibeCode
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#whitepaper"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Whitepaper
          </Link>
          <Link
            href="#utility"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Token Utility
          </Link>
          <Link
            href="#roadmap"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="#community"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Community Chat
          </Link>
          <button className="px-6 py-2.5 bg-gradient-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Get SVC
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Community() {
  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Комьюнити —{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              ядро SVC
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Используем отдельный чат для крипты, чтобы сохранить порядок и фокус
            в основном AI-канале.
          </p>

          <button className="px-10 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/30 text-lg">
            Join SVC Chat →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

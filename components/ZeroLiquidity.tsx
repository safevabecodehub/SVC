"use client";

import { motion } from "framer-motion";

export default function ZeroLiquidity() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Мы стартуем с{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              нулевой ликвидности
            </span>
          </h2>

          <div className="space-y-4 text-lg text-gray-300 mb-12">
            <p>Это обеспечивает:</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-2xl">✔️</span>
                <span>честный запуск</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-2xl">✔️</span>
                <span>отсутствие дампинга</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-2xl">✔️</span>
                <span>формирование цены рынком</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 italic">
            Минимум обещаний. Максимум доверия.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

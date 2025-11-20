"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "AI — самый быстрорастущий рынок",
    description: "SVC привязан к реальным продуктам в сфере, которая растёт ежегодно.",
    icon: "🚀",
  },
  {
    title: "Реальная ликвидность, а не «фейковый оборот»",
    description: "Токен используется для реальных услуг и взаиморасчётов.",
    icon: "💎",
  },
  {
    title: "Прозрачная модель инвестиций",
    description: "R&D и разработки финансируются через SVC — без сложных схем.",
    icon: "🔍",
  },
];

export default function WhyGrow() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              SVC
            </span>{" "}
            будет расти
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-6 bg-background/50 rounded-xl p-6 border border-white/5"
            >
              <div className="text-4xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

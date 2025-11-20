"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    quarter: "Q1",
    title: "Запуск токена SVC",
    description: "Внутренний оборот, техфункции.",
  },
  {
    quarter: "Q2",
    title: "Утилити & сервисы",
    description: "Добавление инструментов, микросервисов, модулей.",
  },
  {
    quarter: "Q3",
    title: "Инвестиционная модель",
    description: "Внедрение простого и прозрачного механизма для инвесторов.",
  },
  {
    quarter: "Q4",
    title: "Выход на DEX",
    description: "Подготовка ликвидности, листинг, децентрализованные инструменты.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Roadmap</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Circle dot */}
                <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-gradient-accent shadow-lg shadow-accent-cyan/30"></div>

                <div className="bg-card rounded-xl p-6 border border-white/5">
                  <div className="text-accent-cyan font-bold text-sm mb-2">
                    {item.quarter}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

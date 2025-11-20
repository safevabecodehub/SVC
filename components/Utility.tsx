"use client";

import { motion } from "framer-motion";
import { Cpu, Coins, LineChart } from "lucide-react";

const utilities = [
  {
    icon: Cpu,
    title: "Оплата разработок",
    description: "Все сервисы, инструменты и продукты комьюнити работают через SVC.",
  },
  {
    icon: Coins,
    title: "Внутренние взаиморасчёты",
    description: "Оплата услуг, премий, задач и подрядчиков внутри сообщества.",
  },
  {
    icon: LineChart,
    title: "Инвестиционная модель",
    description: "R&D и продукты привязаны к SVC, формируя реальную экономику.",
  },
];

export default function Utility() {
  return (
    <section id="utility" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Для чего создан токен{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              SVC
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {utilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/10"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-12 h-12 text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

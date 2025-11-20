"use client";

import { motion } from "framer-motion";
import { Rocket, Wrench, TrendingUp, ArrowUpRight } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1",
    title: "Запуск токена SVC",
    description: "Внутренний оборот, техфункции.",
    icon: Rocket,
    status: "completed"
  },
  {
    quarter: "Q2",
    title: "Утилити & сервисы",
    description: "Добавление инструментов, микросервисов, модулей.",
    icon: Wrench,
    status: "in-progress"
  },
  {
    quarter: "Q3",
    title: "Инвестиционная модель",
    description: "Внедрение простого и прозрачного механизма для инвесторов.",
    icon: TrendingUp,
    status: "upcoming"
  },
  {
    quarter: "Q4",
    title: "Выход на DEX",
    description: "Подготовка ликвидности, листинг, децентрализованные инструменты.",
    icon: ArrowUpRight,
    status: "upcoming"
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
          {/* Vertical line with gradient */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent rounded-full blur-sm"></div>
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent"></div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-32 group"
              >
                {/* Connection line from icon to card */}
                <div className="absolute left-24 top-12 w-8 h-0.5 bg-gradient-to-r from-accent-cyan/50 to-transparent group-hover:from-accent-cyan transition-all"></div>

                {/* Large Icon circle with glow - positioned off the line */}
                <div className={`absolute left-0 top-4 w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                  item.status === 'completed' ? 'bg-gradient-accent shadow-2xl shadow-accent-cyan/50' :
                  item.status === 'in-progress' ? 'bg-accent-cyan/20 border-2 border-accent-cyan shadow-2xl shadow-accent-cyan/40 animate-pulse' :
                  'bg-card/80 border-2 border-white/20 shadow-xl shadow-black/50'
                } group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-3xl z-10`}>
                  <item.icon className={`w-10 h-10 transition-all duration-300 ${
                    item.status === 'completed' ? 'text-white' :
                    item.status === 'in-progress' ? 'text-accent-cyan' :
                    'text-gray-400 group-hover:text-accent-cyan'
                  } group-hover:scale-110`} strokeWidth={1.5} />
                </div>

                {/* Card */}
                <div className={`bg-card rounded-2xl p-8 border transition-all duration-500 ${
                  item.status === 'in-progress' ? 'border-accent-cyan/50 shadow-2xl shadow-accent-cyan/20 bg-gradient-to-br from-card to-accent-cyan/5' : 
                  'border-white/5 hover:border-accent-cyan/30'
                } hover:shadow-2xl hover:shadow-accent-cyan/10 hover:translate-x-2`}>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-accent-cyan font-bold text-lg px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-xl border border-accent-cyan/30">
                      {item.quarter}
                    </div>
                    {item.status === 'completed' && (
                      <span className="flex items-center gap-2 text-sm text-green-400 font-semibold px-3 py-1 bg-green-400/10 rounded-lg">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        Завершено
                      </span>
                    )}
                    {item.status === 'in-progress' && (
                      <span className="flex items-center gap-2 text-sm text-accent-cyan font-semibold px-3 py-1 bg-accent-cyan/10 rounded-lg">
                        <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                        В процессе
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-accent group-hover:bg-clip-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

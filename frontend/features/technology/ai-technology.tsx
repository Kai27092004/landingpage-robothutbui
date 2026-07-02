"use client";

import { motion, Variants } from "framer-motion";
import { Camera, Radar, Map, Shield, Home, Sparkles } from "lucide-react";
import { AI_TIMELINE } from "@/constants/product";

const iconMap: Record<string, any> = {
  Camera,
  Radar,
  Map,
  Shield,
  Home,
  Sparkles,
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = (isEven: boolean): Variants => ({
  hidden: { opacity: 0, x: isEven ? -50 : 50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
});

const childVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      delay: 0.15,
    },
  },
};

const lineVariants: Variants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function AiTechnology() {
  return (
    <section id="technology" className="section-padding bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Công Nghệ AI
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trí tuệ nhân tạo tiên tiến học hỏi và thích nghi với ngôi nhà của bạn
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {AI_TIMELINE.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-center gap-8">
                  {/* Timeline Line */}
                  <motion.div
                    variants={lineVariants}
                    className="hidden md:block absolute left-1/2 top-0 w-px bg-gradient-to-b from-accent/50 to-transparent"
                  />

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <motion.div
                      variants={cardVariants(isEven)}
                      className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:bg-white/15 transition-all duration-300 shadow-xl"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          variants={childVariants}
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-xl"
                        >
                          {Icon && <Icon className="w-7 h-7 text-white" />}
                        </motion.div>
                        <motion.h3
                          variants={childVariants}
                          className="font-heading font-bold text-2xl"
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                      <motion.p
                        variants={childVariants}
                        className="text-gray-200 leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <motion.div
                    variants={dotVariants}
                    className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-lg shadow-accent/50"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

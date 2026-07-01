"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Radar,
  Wind,
  Shield,
  Mic,
  BatteryCharging,
  Map,
  Trash2,
  PawPrint,
  Volume2,
  Clock,
  Smartphone,
} from "lucide-react";
import { PRODUCT_FEATURES } from "@/constants/product";

const iconMap: Record<string, any> = {
  Brain,
  Radar,
  Wind,
  Shield,
  Mic,
  BatteryCharging,
  Map,
  Trash2,
  PawPrint,
  Volume2,
  Clock,
  Smartphone,
};

export function FeaturesGrid() {
  return (
    <section id="features" className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Tính Năng Thông Minh
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Được trang bị AI tiên tiến và công nghệ tiên tiến cho hiệu suất làm sạch vượt trội
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { COMPARISON_DATA } from "@/constants/product";

export function ComparisonTable() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Why Choose Our Robot Vacuum?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how we compare to traditional vacuum cleaners
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Vacuum */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800"
            >
              <h3 className="font-heading font-bold text-2xl text-primary dark:text-white mb-6 text-center">
                {COMPARISON_DATA.traditional.title}
              </h3>
              <ul className="space-y-4">
                {COMPARISON_DATA.traditional.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* HELIO CLEAN X1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/50 dark:border-accent/50 relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg">
                Premium
              </div>

              <h3 className="font-heading font-bold text-2xl text-primary dark:text-white mb-6 text-center">
                {COMPARISON_DATA.helio.title}
              </h3>
              <ul className="space-y-4">
                {COMPARISON_DATA.helio.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

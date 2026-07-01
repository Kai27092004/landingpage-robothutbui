"use client";

import { motion } from "framer-motion";
import { PRODUCT_SPECS } from "@/constants/product";

export function Specifications() {
  const specs = Object.values(PRODUCT_SPECS);

  return (
    <section id="specifications" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Thông Số Kỹ Thuật
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hiệu suất cao cấp được hỗ trợ bởi phần cứng mạnh mẽ
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
            >
              <div className="mb-4">
                <div className="text-4xl font-bold font-heading bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {spec.value}
                </div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                {spec.label}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {[
            { label: "Bảo Hành", value: "2 Năm" },
            { label: "Mức Ồn", value: "55dB" },
            { label: "Diện Tích", value: "2500 ft²" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-8 rounded-2xl bg-blue-50 dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-800 shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.value}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

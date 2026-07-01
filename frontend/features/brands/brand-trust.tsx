"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const brands = [
  { name: "Google", color: "#4285F4" },
  { name: "Amazon", color: "#FF9900" },
  { name: "CES Innovation", color: "#E31C79" },
  { name: "Smart Home", color: "#00C853" },
];

export function BrandTrust() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Được tin dùng bởi các đối tác hàng đầu</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${brand.color}15` }}
                >
                  <div
                    className="font-bold text-2xl"
                    style={{ color: brand.color }}
                  >
                    {brand.name.charAt(0)}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {brand.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-3xl font-bold text-primary dark:text-white">
            10.000+
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Đánh Giá 5 Sao
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function InteractiveDemo() {
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
            Thấy Rõ Sự Khác Biệt
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kéo thanh trượt để so sánh trước và sau khi làm sạch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-6">🧹</div>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Demo Trước & Sau</p>
                <p className="text-gray-600 dark:text-gray-400">So sánh bằng thanh trượt tương tác</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

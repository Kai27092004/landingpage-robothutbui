"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PRODUCT_HOTSPOTS } from "@/constants/product";
import { X } from "lucide-react";

export function ProductShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-muted/30 dark:from-dark dark:to-secondary/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Kỹ Thuật Xuất Sắc
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nhấp vào các điểm nóng để khám phá từng chi tiết công nghệ tiên tiến
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 flex items-center justify-center p-8">
              <motion.div 
                className="text-center"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div 
                  className="text-[280px] leading-none mb-8"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🤖
                </motion.div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Robot Hút Bụi Thông Minh</p>
                <p className="text-lg text-gray-600 dark:text-gray-300">Xem Sản Phẩm Tương Tác</p>
              </motion.div>
            </div>

            {/* Hotspots */}
            {PRODUCT_HOTSPOTS.map((hotspot, index) => (
              <motion.button
                key={hotspot.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.3 }}
                onClick={() => setActiveHotspot(hotspot.id)}
                className="absolute w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 shadow-xl cursor-pointer group z-10"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                <span className="relative flex items-center justify-center w-full h-full text-white text-lg font-bold">
                  +
                </span>

                {/* Label on hover */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                  {hotspot.label}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Hotspot Details Modal */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setActiveHotspot(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white dark:bg-secondary rounded-2xl p-8 max-w-md w-full shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary dark:text-white mb-2">
                    {PRODUCT_HOTSPOTS.find((h) => h.id === activeHotspot)?.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {PRODUCT_HOTSPOTS.find((h) => h.id === activeHotspot)?.description}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-white dark:from-secondary/30 dark:to-dark">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Xem Robot Hút Bụi Hoạt Động
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Xem cách nó thay đổi trải nghiệm dọn dẹp của bạn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent/20 to-primary/20">
            {!isPlaying ? (
              <>
                {/* Poster Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🤖</div>
                    <p className="text-2xl font-bold">Video Demo Robot Hút Bụi</p>
                  </div>
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                  >
                    <Play className="w-10 h-10 text-accent ml-2" fill="currentColor" />
                  </motion.div>
                </button>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-dark">
                <p className="text-white text-center p-8">
                  Vùng hiển thị video
                  <br />
                  <span className="text-sm text-gray-400 mt-2 block">
                    Thêm URL video hoặc mã nhúng tại đây
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { value: "2M+", label: "Lượt Xem" },
              { value: "98%", label: "Hài Lòng" },
              { value: "50K+", label: "Đã Bán" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Đã cập nhật đúng ID video YouTube mới theo yêu cầu của bạn
  const YOUTUBE_VIDEO_ID = "OeNKR6oj3Pw";

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
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            {!isPlaying ? (
              <>
                {/* Poster Image - Ảnh tĩnh từ thư mục public */}
                <div className="absolute inset-0">
                  <Image
                    src="/image-1.jpg"
                    alt="Robot Hút Bụi Thông Minh Video Demo - Click để phát"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                    className="object-cover"
                    priority
                    quality={85}
                  />
                  {/* Overlay tối */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer z-10"
                  aria-label="Phát video demo Robot Hút Bụi"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                  >
                    <Play className="w-10 h-10 text-accent ml-2" fill="currentColor" />
                  </motion.div>
                </button>

                {/* Video Label */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="text-white font-semibold text-lg">
                      Demo Video: Robot Hút Bụi Thông Minh
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      Xem công nghệ AI và LiDAR hoạt động thực tế
                    </p>
                  </div>
                </div>
              </>
            ) : (
              /* YouTube Iframe - Chỉ load khi user click Play để tối ưu Performance */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Robot Hút Bụi Thông Minh - Video Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </motion.div>
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
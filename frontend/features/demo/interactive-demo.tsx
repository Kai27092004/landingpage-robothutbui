"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function InteractiveDemo() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

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
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Image After (Full Background) */}
            <div className="absolute inset-0">
              <Image
                src="/demo-after.jpg"
                alt="Sàn Nhà Sau Khi Dọn Dẹp Với Robot Hút Bụi Thông Minh - Sạch Bóng Hoàn Hảo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
                priority
                quality={90}
              />
              {/* Label After */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                Sau Khi Dọn
              </div>
            </div>

            {/* Image Before (Clipped) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src="/demo-before.jpg"
                alt="Sàn Nhà Trước Khi Dọn Dẹp - Bẩn Và Có Bụi Lông Thú Cưng"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
                priority
                quality={90}
              />
              {/* Label Before */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                Trước Khi Dọn
              </div>
            </div>

            {/* Slider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-col-resize">
                <ChevronLeft className="w-5 h-5 text-primary absolute left-1" />
                <ChevronRight className="w-5 h-5 text-primary absolute right-1" />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6 text-gray-600 dark:text-gray-400"
          >
            <span className="hidden md:inline">Kéo thanh trượt sang trái hoặc phải</span>
            <span className="md:hidden">Vuốt sang trái hoặc phải</span>
            {" "}để xem sự khác biệt đáng kinh ngạc
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

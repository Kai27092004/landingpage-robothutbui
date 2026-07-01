"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { REVIEWS } from "@/constants/product";
import Image from "next/image";

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Đánh Giá Khách Hàng
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn khách hàng hài lòng đã thay đổi thói quen dọn dẹp
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-muted dark:from-secondary dark:to-dark border border-gray-200 dark:border-gray-800 shadow-xl"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{REVIEWS[currentIndex].comment}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                    {REVIEWS[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-primary dark:text-white">
                        {REVIEWS[currentIndex].name}
                      </p>
                      {REVIEWS[currentIndex].verified && (
                        <CheckCircle className="w-4 h-4 text-success" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {REVIEWS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800 hover:border-accent dark:hover:border-accent flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800 hover:border-accent dark:hover:border-accent flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

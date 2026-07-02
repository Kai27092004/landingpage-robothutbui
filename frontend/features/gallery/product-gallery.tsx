"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/image-1.jpg", alt: "Robot Hút Bụi Thông Minh - Góc Nhìn Phía Trước Với Cảm Biến LiDAR" },
  { id: 2, src: "/image-2.jpg", alt: "Robot Hút Bụi - Góc Nhìn Từ Trên Xuống Hiển Thị Cảm Biến 360 Độ" },
  { id: 3, src: "/image-3.jpg", alt: "Chi Tiết Cảm Biến LiDAR Và Camera AI Tránh Vật Cản Thông Minh" },
  { id: 4, src: "/image-4.jpg", alt: "Robot Hút Bụi Đang Làm Sạch Thảm Với Lực Hút 5000Pa" },
  { id: 5, src: "/image-5.jpg", alt: "Robot Hút Bụi Với Trạm Sạc Tự Động Và Hộp Đựng Bụi" },
  { id: 6, src: "/image-6.jpg", alt: "Điều Khiển Robot Qua Ứng Dụng Di Động Với Bản Đồ Nhà Thông Minh" },
];

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">
            Thư Viện Hình Ảnh
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Khám phá mọi chi tiết của Robot Hút Bụi Thông Minh
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-accent/10 to-primary/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                  Xem Ảnh
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden bg-dark"
              >
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  sizes="(max-width: 1536px) 90vw, 1400px"
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-6">
                  <p className="text-white text-lg font-medium">{galleryImages[selectedImage].alt}</p>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

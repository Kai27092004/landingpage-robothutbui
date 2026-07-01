"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Vui lòng nhập email hợp lệ"),
  phone: z.string().optional(),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter signup:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="newsletter" className="section-padding bg-gradient-to-br from-accent to-primary text-white">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Cập Nhật Tin Tức
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Nhận ưu đãi độc quyền, mẹo làm sạch và cập nhật sản phẩm ngay trong hộp thư của bạn
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Cảm Ơn Bạn!</h3>
              <p className="text-white/90">
                Bạn đã đăng ký nhận tin tức thành công.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Họ và Tên"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-200 mt-1 text-left">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Của Bạn"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-200 mt-1 text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Số Điện Thoại (Tùy Chọn)"
                  className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-accent hover:bg-white/90 h-14 text-lg font-semibold"
              >
                {isSubmitting ? "Đang Đăng Ký..." : "Đăng Ký Ngay"}
              </Button>

              <p className="text-sm text-white/70">
                Bằng việc đăng ký, bạn đồng ý với Chính Sách Bảo Mật và đồng ý nhận thông tin cập nhật.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Tính Năng", href: "#features" },
    { label: "Công Nghệ", href: "#technology" },
    { label: "Thông Số", href: "#specifications" },
    { label: "Đánh Giá", href: "#reviews" },
  ],
  support: [
    { label: "Câu Hỏi", href: "#faq" },
    { label: "Liên Hệ", href: "#contact" },
    { label: "Bảo Hành", href: "#warranty" },
    { label: "Đổi Trả", href: "#returns" },
  ],
  company: [
    { label: "Về Chúng Tôi", href: "#about" },
    { label: "Tuyển Dụng", href: "#careers" },
    { label: "Báo Chí", href: "#press" },
    { label: "Blog", href: "#blog" },
  ],
  legal: [
    { label: "Bảo Mật", href: "#privacy" },
    { label: "Điều Khoản", href: "#terms" },
    { label: "Cookie", href: "#cookies" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary dark:bg-dark text-white">
      <div className="container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">H</span>
              </div>
              <span className="font-heading font-bold text-xl">Robot Hút Bụi</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tương lai của việc dọn dẹp thông minh. Robot hút bụi hỗ trợ AI thay đổi trải nghiệm làm sạch nhà bạn.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-sm font-medium"
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Sản Phẩm</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Công Ty</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">support@robotvacuum.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">1-800-RVC-0001</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">123 Đường Sáng Tạo<br />Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Robot Hút Bụi. Bảo lưu mọi quyền.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

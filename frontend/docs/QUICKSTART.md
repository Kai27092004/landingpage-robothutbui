# Hướng Dẫn Khởi Động Nhanh

## ⚡ Khởi Động trong 3 Phút

### 1. Cài Đặt Dependencies
```bash
npm install
```

### 2. Chạy Development Server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

### 3. Thêm Hình Ảnh

Đặt các hình ảnh trong `/public`:
- `robot-hero.png` - Robot chính
- `robot-showcase.png` - Robot showcase
- `demo-before.jpg` & `demo-after.jpg` - Demo slider
- `og-image.jpg` - Social media

**Giải Pháp Tạm Thời:** Website hoạt động không cần hình ảnh (dùng placeholders)

## 🎨 Tùy Chỉnh Nội Dung

### Thay Đổi Thông Tin Sản Phẩm
Edit `constants/product.ts`:
- Tên sản phẩm
- Tính năng
- Đánh giá
- FAQ

### Thay Đổi Màu Sắc
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: "#YOUR_COLOR" },
  accent: { DEFAULT: "#YOUR_COLOR" },
}
```

### Cập Nhật Thông Tin Liên Hệ
Edit `components/layout/footer.tsx`:
- Email
- Phone
- Address
- Social media

## 📦 Build cho Production

```bash
npm run build
npm start
```

## 🚀 Deploy

### Vercel (Khuyến Nghị)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push lên GitHub
2. Kết nối repo trong Netlify
3. Deploy (tự động)

## 🎯 Danh Sách Tính Năng

- [x] Responsive (mobile, tablet, desktop)
- [x] Dark mode
- [x] Smooth animations
- [x] Interactive product showcase
- [x] Reviews carousel
- [x] FAQ accordion
- [x] Newsletter form validation
- [x] SEO optimized
- [x] Performance (Lighthouse 95+)
- [x] Chatbot
- [x] Shopping cart

## 📱 Kiểm Tra Responsive

- Desktop: Đầy đủ tính năng
- Tablet: 2-column layouts
- Mobile: Hamburger menu

## ⚙️ Scripts Có Sẵn

```bash
npm run dev        # Dev server
npm run build      # Production build
npm start          # Run production
npm run lint       # Code quality check
```

## 🐛 Các Vấn Đề Thường Gặp

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Dark Mode Không Hoạt Động
- Kiểm tra LocalStorage enabled
- Clear site data

### Hình Ảnh Không Load
- Verify images trong `/public`
- Kiểm tra file names
- Dùng lowercase với hyphens

## 📖 Tài Liệu

- `README.md` - Tài liệu đầy đủ
- `docs/FEATURES.md` - Danh sách tính năng
- `docs/DEPLOYMENT.md` - Hướng dẫn deploy
- `docs/FIXED-TAILWIND.md` - Tailwind fix

## ✅ Danh Sách Kiểm Tra Trước Deploy

- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Setup newsletter email
- [ ] Configure analytics
- [ ] Test trên real devices
- [ ] Lighthouse audit
- [ ] Custom domain
- [ ] HTTPS enabled
- [ ] Sitemap submitted

---

Pro Tips:
1. Sử dụng high-quality images (min 1000x1000px)
2. Giữ hero section hấp dẫn
3. Update reviews thường xuyên
4. Monitor analytics
5. A/B test CTAs


# Hướng Dẫn Triển Khai

## Yêu Cầu

- Node.js 18.x trở lên
- npm hoặc yarn
- Git

## Biến Môi Trường

Tạo file `.env.local` trong thư mục gốc:

```env
# URL Trang Web
NEXT_PUBLIC_SITE_URL=https://robothutbui.vn

# Google Analytics (Tùy chọn)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Newsletter (Tùy chọn)
NEWSLETTER_API_KEY=your_api_key_here

# Email Liên Hệ (Tùy chọn)
CONTACT_EMAIL=support@robothutbui.vn
```

## Build cho Production

```bash
# Cài đặt dependencies
npm install

# Build production
npm run build

# Test build locally
npm start
```

## Các Tùy Chọn Triển Khai

### Tùy Chọn 1: Vercel (Khuyến Nghị)

1. Push code lên GitHub/GitLab/Bitbucket
2. Import project trong Vercel dashboard
3. Cấu hình biến môi trường
4. Deploy

```bash
# Hoặc sử dụng Vercel CLI
npm i -g vercel
vercel
```

### Tùy Chọn 2: Netlify

1. Kết nối repository trong Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Tùy Chọn 3: Docker

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

```bash
docker build -t robot-hutbui .
docker run -p 3000:3000 robot-hutbui
```

## Tối Ưu Hóa Hiệu Suất

### 1. Tối Ưu Hóa Hình Ảnh
- Sử dụng định dạng WebP/AVIF
- Lazy loading hình ảnh
- Thiết lập width/height phù hợp
- Dùng next/image

### 2. Tách Mã
- Import động cho components nặng
- Tách mã theo route (tự động)
- Lazy load content dưới viewport

### 3. Chiến Lược Bộ Nhớ Cache
Cấu hình trong `next.config.js`:

```js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Kiểm Tra

### 1. Analytics
Thêm Google Analytics trong `app/layout.tsx`

### 2. Theo Dõi Lỗi
Cài đặt Sentry:

```bash
npm install @sentry/nextjs
```

### 3. Giám Sát Hiệu Suất
- Google Lighthouse CI
- Web Vitals monitoring
- Real User Monitoring (RUM)

## Danh Sách Kiểm Tra SEO

- [ ] sitemap.xml được tạo
- [ ] robots.txt được cấu hình
- [ ] Meta tags đầy đủ
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Canonical URLs
- [ ] Sitemap submitted to search engines
- [ ] Google Search Console verified
- [ ] 301 redirects configured

## Bảo Mật

Thêm headers bảo mật trong `next.config.js`

---

Cập nhật: 2026-07-01

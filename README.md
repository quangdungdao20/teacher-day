# Thiệp tri ân ngày 20/11

Website thiệp chúc mừng tương tác được xây dựng bằng React, TypeScript và Vite. Các minh họa hoa SVG được nhúng trực tiếp trong component React tại `src/components/FlowerIllustrations.tsx`, không cần tải ảnh minh họa riêng.
Framer Motion điều khiển cánh hoa, hiệu ứng xuất hiện theo cuộn, phong thư mở và tương tác hover/tap. Các tranh hoa phản hồi trực tiếp theo vị trí cuộn: trượt vào từ bên ngoài, phóng to dần và thay đổi độ nghiêng; cánh hoa và lá đung đưa theo gió. Các chuyển động trang trí được giảm khi thiết bị bật chế độ giảm chuyển động.

## Chạy dự án

```bash
npm install
npm run dev
```

Tạo bản dựng production bằng `npm run build`.

## Nhạc nền

Khi nhấn **Mở thiệp**, trình duyệt phát tệp `public/music.mp3` ở âm lượng vừa phải (hiển thị là *Beautiful Life*). Nếu tệp nhạc chính không tải được, thiệp tự chuyển sang bản sáo taegum cục bộ. Nút ♬ trên thanh điều khiển cho phép tắt/bật nhạc.

Tệp `public/music.mp3` do người dùng cung cấp. Bản dự phòng cục bộ `public/audio/korean-taegum-cc0.mp3` là bản ghi Taegum-1.aif của [bletort trên Freesound](https://freesound.org/people/bletort/sounds/94934/), được đánh dấu CC0 1.0. Nút mở thiệp là thao tác chủ động để tuân thủ chính sách phát âm thanh của trình duyệt.

Có thể thay URL và tên bản nhạc trong `src/config/music.ts`; tệp nhạc cục bộ khác có thể đặt trong `public/audio`.

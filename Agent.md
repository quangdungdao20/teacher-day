# PROJECT: INTERACTIVE VIETNAMESE TEACHERS' DAY 20/11 WEBSITE

## 1. Mục tiêu

Xây dựng một website thiệp chúc mừng Ngày Nhà giáo Việt Nam 20/11 theo phong cách Interactive Digital Greeting Card.

Website phải mang lại cảm giác như một buổi trình chiếu tri ân thầy cô với nhiều hiệu ứng chuyển động đẹp mắt, lãng mạn, tinh tế và giàu cảm xúc.

Đây không phải website thông thường với các khối nội dung tĩnh. Hãy tạo trải nghiệm tương tác có mở thiệp, chuyển cảnh, hoa nở, cánh hoa rơi, chữ xuất hiện theo hiệu ứng, nhạc nền và chế độ tự động trình chiếu.

## 2. Công nghệ

- html, css, js.
- Tailwind CSS.
- Framer Motion: animation và chuyển cảnh.
- GSAP: timeline, điều khiển chuyển động và tự động cuộn.
- HTML5 Audio API: quản lý nhạc nền.
- Ưu tiên CSS Animation và SVG cho các hiệu ứng nhẹ.

Không cần backend, không cần database. Website hoạt động hoàn toàn ở frontend.

## 3. Phong cách thiết kế

Tên phong cách: Elegant Floral Cinematic.

Bảng màu:
- Ivory: #FFFDF8.
- Soft Pink: #F7DDE3.
- Rose: #D995A5.
- Champagne Gold: #D6B77A.
- Warm White: #FFFFFF.
- Text: #55464A.

Yêu cầu giao diện:
- Sang trọng, lãng mạn, nhẹ nhàng và trang trọng.
- Nền trắng kem kết hợp hồng pastel.
- Sử dụng hoa hồng, hoa mẫu đơn, hoa anh đào.
- Có các lớp hình ảnh trang trí tạo chiều sâu.
- Typography kết hợp font serif thanh lịch và sans-serif hiện đại.
- Tiêu đề lớn, đẹp, có hiệu ứng xuất hiện.
- Nội dung không quá dày đặc.
- Không sử dụng quá nhiều màu sắc rực rỡ.
- Không thiết kế giống dashboard hoặc website quản trị.

Website phải có cảm giác như một tấm thiệp điện tử cao cấp được thiết kế riêng cho thầy cô.

## 4. Cấu trúc website

### SECTION 1: OPENING - MỞ THIỆP

Màn hình mở đầu chiếm toàn bộ viewport.

Thiết kế:
- Background màu ivory.
- Hoa hồng và cánh hoa trang trí xung quanh.
- Các cánh hoa chuyển động nhẹ.
- Một phong bì thư ở chính giữa.
- Phong bì có hiệu ứng 3D khi mở.
- Con dấu hoặc biểu tượng hoa trang trí.

Nội dung:

"Happy Vietnamese Teachers' Day"

"20 November"

"With Love & Gratitude"

Nút chính:

"Mở thiệp"

Khi click:
1. Phong bì mở ra bằng animation.
2. Ánh sáng và cánh hoa bay ra.
3. Nhạc nền bắt đầu phát.
4. Chuyển cảnh mượt mà sang nội dung chính.
5. Bắt đầu trải nghiệm thiệp.

### SECTION 2: HERO - LỜI CHÚC MỞ ĐẦU

Thiết kế một khu vực hero lớn, đẹp mắt.

Nội dung:

"🌷 NHÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11 🌷"

Dòng phụ:

"Tri ân những người lái đò thầm lặng"

Animation:
- Tiêu đề xuất hiện theo hiệu ứng viết chữ hoặc fade-in.
- Các cánh hoa rơi liên tục.
- Hoa trang trí hai bên có chuyển động nhẹ.
- Các hạt sáng xuất hiện ngẫu nhiên.
- Background có hiệu ứng ánh sáng chuyển động.

### SECTION 3: VIETNAMESE MESSAGE - LỜI CHÚC TIẾNG VIỆT

Hiển thị nội dung trong một lá thư trang trọng.

Nội dung chính xác:

"Nhân ngày Nhà giáo Việt Nam 20/11, thay mặt toàn thể các bạn trong lớp, chúng em xin gửi đến thầy/cô lời chúc mừng cùng lòng biết ơn chân thành và sâu sắc nhất.

Chúng em xin chân thành cảm ơn thầy/cô vì đã luôn tận tâm truyền đạt những kiến thức quý báu, kiên nhẫn hướng dẫn và đồng hành cùng chúng em trong suốt quá trình học tập. Không chỉ là người truyền đạt kiến thức, thầy/cô còn mang đến cho chúng em sự động viên, niềm tin và nguồn cảm hứng để không ngừng cố gắng và trưởng thành hơn mỗi ngày.

Nhân ngày đặc biệt này, chúng em kính chúc thầy/cô luôn mạnh khỏe, hạnh phúc và thành công. Mong rằng thầy/cô sẽ luôn giữ vững ngọn lửa nhiệt huyết với nghề và tiếp tục truyền cảm hứng đến thật nhiều thế hệ học trò.

Chúng em xin chân thành cảm ơn và luôn kính trọng thầy/cô! ❤️🌷"

Hiệu ứng:
- Lá thư xuất hiện với hiệu ứng mở rộng.
- Nội dung hiện theo từng đoạn, không hiện toàn bộ cùng lúc.
- Chữ có hiệu ứng fade-in và translate.
- Hoa trang trí xuất hiện xung quanh.
- Có thể dùng hiệu ứng viết chữ cho câu mở đầu và câu kết.
- Đảm bảo văn bản dễ đọc, không gây khó chịu khi xem.

### SECTION 4: TEACHERS - TRI ÂN THẦY CÔ

Tạo một khu vực đặc biệt để hiển thị tên các thầy cô.

Danh sách:

1. Cô PARK MIYOUNG
2. Cô CHANG MINHEE
3. Cô SEOK SUK HEE
4. Cô OH SU YEAN
5. Thầy LEE YONG SIK

Thiết kế:
- Hiển thị từng tên theo dạng card hoặc typography nghệ thuật.
- Mỗi tên có animation xuất hiện riêng.
- Có hoa nhỏ, hiệu ứng ánh sáng và đường viền trang trí.
- Có thể tạo hiệu ứng spotlight nhẹ khi từng tên xuất hiện.
- Thầy và cô được thể hiện trang trọng, đồng nhất.
- Không tự ý thay đổi tên hoặc chức danh.

Không cần ảnh chân dung thật của thầy cô. Sử dụng hoa và các hình minh họa nghệ thuật.

### SECTION 5: KOREAN MESSAGE - LỜI CHÚC TIẾNG HÀN

Tạo một khu vực riêng biệt dành cho nội dung tiếng Hàn.

Tiêu đề:

"감사와 존경의 마음을 전합니다"

Nội dung chính xác:

"베트남 스승의 날 11월 20일을 맞아
저희 반 학생들을 대표하여, 교수님께 진심으로 축하와 감사의 마음을 전합니다.

항상 따뜻한 마음과 열정으로 소중한 지식을 가르쳐 주시고, 저희 한 사람 한 사람에게 아낌없는 관심과 격려를 보내주신 교수님께 진심으로 감사드립니다.

교수님의 가르침은 단순한 지식을 넘어 저희가 앞으로 나아갈 수 있는 용기와 자신감, 그리고 더 큰 꿈을 향해 도전할 수 있는 힘이 되었습니다. 교수님과 함께한 소중한 시간과 가르침을 저희는 오래도록 기억하겠습니다.

베트남 스승의 날을 맞아 교수님께서 항상 건강하시고 행복하시며, 앞으로도 모든 날들이 기쁨과 웃음으로 가득하시기를 진심으로 기원합니다.

교수님, 진심으로 존경하고 감사드립니다.
항상 건강하시고 행복하세요! ❤️🌷"

Thiết kế:
- Sử dụng font hỗ trợ tiếng Hàn đẹp.
- Background hoa anh đào.
- Hiệu ứng cánh hoa bay nhẹ.
- Nội dung xuất hiện theo từng đoạn.
- Chuyển cảnh mềm mại từ phần tiếng Việt sang tiếng Hàn.

### SECTION 6: FINAL - KẾT THÚC

Thiết kế một cảnh kết thúc thật ấn tượng.

Nội dung:

"✨ Happy Vietnamese Teachers' Day – 20/11! ✨"

"Thank you for being our inspiration."

"With love and gratitude."

Hiệu ứng:
- Bó hoa lớn xuất hiện ở trung tâm.
- Hoa nở dần.
- Cánh hoa bay xung quanh.
- Ánh sáng vàng nhẹ.
- Các hạt sáng xuất hiện.
- Chữ xuất hiện theo hiệu ứng handwriting.
- Hiệu ứng pháo hoa nhỏ, tinh tế.
- Kết thúc bằng một cảnh đẹp, ấm áp và giàu cảm xúc.

## 5. Hệ thống animation toàn website

Đây là yêu cầu rất quan trọng.

Website phải có nhiều hiệu ứng chuyển động độc lập và kết hợp với nhau:

1. Falling Petals:
   - Cánh hoa rơi từ phía trên xuống.
   - Có tốc độ, kích thước và góc xoay ngẫu nhiên.
   - Một số cánh hoa bay ngang.
   - Chuyển động liên tục.

2. Floating Flowers:
   - Hoa trang trí chuyển động lên xuống nhẹ.
   - Có hiệu ứng parallax theo scroll.

3. Sparkle Particles:
   - Hạt sáng xuất hiện ngẫu nhiên.
   - Có hiệu ứng fade-in/fade-out.

4. Bloom Animation:
   - Hoa nở khi chuyển sang section mới.

5. Text Reveal:
   - Nội dung xuất hiện từng đoạn.
   - Kết hợp fade, slide và typewriter.

6. Smooth Transition:
   - Chuyển cảnh giữa các section mượt mà.
   - Không xuất hiện khoảng trắng hoặc giật trang.

7. Scroll Animation:
   - Các thành phần xuất hiện khi đi vào viewport.
   - Hình ảnh trang trí chuyển động theo tốc độ cuộn.

Không được sử dụng quá nhiều animation cùng lúc gây giảm FPS.

## 6. Hệ thống AUTO PRESENTATION - TỰ ĐỘNG TRÌNH CHIẾU

Đây là tính năng quan trọng nhất của website.

Tạo một thanh điều khiển cố định ở phía dưới màn hình, có thiết kế tinh tế và bán trong suốt.

Các chức năng:

- Play: Bắt đầu tự động trình chiếu.
- Pause: Tạm dừng.
- Resume: Tiếp tục.
- Previous: Phân cảnh trước.
- Next: Phân cảnh tiếp theo.
- Progress bar: Hiển thị tiến trình.
- Music toggle: Bật/tắt nhạc.
- Volume control: Điều chỉnh âm lượng.
- Fullscreen: Bật chế độ toàn màn hình.
- Restart: Chạy lại từ đầu.

Logic tự động trình chiếu:

1. Mỗi section có thời gian hiển thị mặc định từ 6–10 giây.
2. Tự động cuộn đến section tiếp theo bằng smooth scrolling.
3. Đợi animation của section hoàn tất trước khi chuyển cảnh.
4. Khi đến section cuối, dừng tự động.
5. Có thể phát lại từ đầu.
6. Người dùng có thể chuyển section thủ công.
7. Khi người dùng tương tác hoặc tự cuộn, tạm dừng chế độ tự động.
8. Khi nhấn Resume, tiếp tục từ section hiện tại.
9. Có thể tùy chỉnh tốc độ trình chiếu.

Lưu ý:
- Không dùng setInterval chạy vô hạn thiếu kiểm soát.
- Dùng một cơ chế quản lý trạng thái tập trung.
- Xử lý cleanup timer khi component unmount.
- Tránh tình trạng scroll tự động và scroll thủ công xung đột.
- Không để animation tiếp tục khi người dùng đã Pause.

## 7. MUSIC PLAYER - NHẠC NỀN

Tạo trình phát nhạc nền nhỏ gọn.

Yêu cầu:
- Hỗ trợ file MP3 và URL nhạc trực tiếp.
- Nút Play/Pause.
- Điều chỉnh âm lượng.
- Hiển thị tên bài hát.
- Có animation đĩa nhạc hoặc sóng âm.
- Nhạc không bị phát lại từ đầu khi chuyển section.
- Nhạc bắt đầu khi người dùng click Mở thiệp.
- Xử lý trường hợp trình duyệt chặn autoplay.
- Nếu không có nhạc, website vẫn hoạt động bình thường.

Tạo một file cấu hình để dễ thay đổi URL nhạc sau này.

## 8. RESPONSIVE DESIGN

Website phải hoạt động hoàn hảo trên:

- Desktop.
- Laptop.
- Tablet.
- Mobile Android.
- Mobile iPhone.

Desktop:
- Nội dung cân đối, sử dụng khoảng trắng.
- Hiệu ứng nhiều lớp.
- Có thể trình chiếu toàn màn hình.

Mobile:
- Thiết kế theo chiều dọc.
- Các section tự động điều chỉnh chiều cao.
- Font chữ dễ đọc.
- Không tràn ngang.
- Có thể vuốt để chuyển section.
- Thanh điều khiển không che nội dung.
- Hạn chế particle để tối ưu hiệu năng.
- Các animation phải hoạt động tốt trên thiết bị cấu hình thấp.

## 9. PERFORMANCE & ACCESSIBILITY

- Ưu tiên GPU-friendly animation: transform và opacity.
- Lazy load hình ảnh.
- Không tải quá nhiều ảnh dung lượng lớn.
- Giới hạn số lượng particle.
- Sử dụng requestAnimationFrame khi thực sự cần thiết.
- Hỗ trợ prefers-reduced-motion.
- Có fallback nếu trình duyệt không hỗ trợ một số hiệu ứng.
- Không để animation gây ảnh hưởng đến thao tác cuộn.
- Không sử dụng video nền nặng nếu không cần thiết.

## 10. CODE STRUCTURE

Tổ chức source code rõ ràng, dễ mở rộng:

src/
  components/
    Envelope/
    FallingPetals/
    FloatingParticles/
    MusicPlayer/
    PresentationControls/
    SectionTransition/
    FlowerDecoration/
  sections/
    OpeningSection/
    HeroSection/
    VietnameseMessage/
    TeachersSection/
    KoreanMessage/
    FinalSection/
  hooks/
    usePresentation.js
    useMusicPlayer.js
    useScrollNavigation.js
  config/
    presentation.js
    music.js
  assets/
    images/
    audio/
  App.jsx
  main.jsx

Tách riêng các section và component animation để dễ quản lý.

## 11. YÊU CẦU TRIỂN KHAI

- Hãy xây dựng website hoàn chỉnh, không chỉ tạo mockup.
- Viết đầy đủ source code cho tất cả component.
- Không bỏ qua các chức năng được mô tả.
- Các nút phải có chức năng thực tế.
- Không dùng dữ liệu giả thay thế nội dung lời chúc đã cung cấp.
- Không tự ý viết lại nội dung tiếng Việt hoặc tiếng Hàn.
- Có thể sử dụng ảnh hoa từ nguồn miễn phí hoặc SVG tự tạo.
- Nếu sử dụng ảnh bên ngoài, phải có fallback khi ảnh không tải được.
- Không sử dụng logo hoặc thương hiệu không liên quan.
- Ưu tiên trải nghiệm thị giác đẹp, tinh tế và giàu cảm xúc.

Hãy bắt đầu bằng việc tạo cấu trúc dự án, sau đó triển khai từng component và hoàn thiện website. Cuối cùng kiểm tra responsive, animation, nhạc nền và toàn bộ logic tự động trình chiếu.
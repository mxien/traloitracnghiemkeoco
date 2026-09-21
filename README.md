# Đấu Trường Kéo Co Trắc Nghiệm (Tug of War Quiz Battle)

Ứng dụng trò chơi kéo co trắc nghiệm đối kháng 2 đội thi đấu được xây dựng hoàn toàn bằng **HTML5, CSS3 và Vanilla JavaScript thuần túy**, sẵn sàng chạy trực tiếp và triển khai lên **GitHub Pages** không cần cài đặt Node.js hay bất kỳ thư viện bên ngoài nào.

---

## 🚀 Các Tệp Cốt Lõi (Core Files)

- `index.html`: Cấu trúc trang web chuẩn HTML5, bảng điểm, 2 bảng câu hỏi 2 bên, đấu trường kéo co hoạt họa ở giữa và các cửa sổ chức năng.
- `style.css`: Giao diện hiện đại, responsive 100% (hỗ trợ mobile, tablet, desktop), màu sắc phân biệt Đội 1 (Đỏ) và Đội 2 (Xanh), các hiệu ứng chuyển động kéo co mượt mà.
- `app.js`: Toàn bộ logic trò chơi, vật lý kéo co, hệ thống âm thanh tổng hợp Web Audio API (không cần file mp3 ngoài), hiệu ứng pháo hoa ăn mừng Canvas Confetti và trình biên tập câu hỏi lưu trữ bằng LocalStorage.

---

## 🌐 Hướng Dẫn Triển Khai Lên GitHub Pages (Miễn Phí)

### Cách 1: Tải về và tải lên GitHub
1. Tạo một Repository mới trên GitHub (ví dụ: `keo-co-trac-nghiem`).
2. Tải hoặc đẩy toàn bộ mã nguồn lên repository:
   ```bash
   git init
   git add .
   git commit -m "Khoi tao game keo co trac nghiem"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/keo-co-trac-nghiem.git
   git push -u origin main
   ```
3. Trên GitHub, vào mục **Settings** của repository -> chọn thẻ **Pages** ở thanh menu bên trái.
4. Tại mục **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`
   - **Branch**: Chọn nhánh `main` (hoặc `master`), thư mục chọn `/ (root)`
   - Nhấn **Save**.
5. Sau khoảng 1-2 phút, GitHub Pages sẽ cung cấp cho bạn một đường link trang web hoạt động công khai (dạng `https://<ten-tai-khoan>.github.io/keo-co-trac-nghiem/`) để chơi trực tiếp trên mọi thiết bị!

---

## 🎮 Luật Chơi & Hệ Thống Thời Gian (Mới Cập Nhật)
- **Thời gian tổng trận đấu**: **2 phút (120 giây)** hiển thị rõ nét trên bảng điện tử trung tâm. Khi hết 2 phút, đội nào kéo cờ lệch về phần sân mình hơn sẽ giành chiến thắng chung cuộc. Có nút **Tạm dừng/Tiếp tục** tiện dụng.
- **Thời gian suy nghĩ mỗi câu**: **20 giây** với đồng hồ đếm ngược và thanh tiến trình động đổi màu (Xanh lá -> Vàng -> Đỏ nhấp nháy khẩn trương khi còn dưới 5 giây kèm âm thanh tíc tắc).
- **Cơ chế chuyển lượt khi hết giờ**: Khi hết 20 giây mà đội đang đến lượt **chưa chọn được câu trả lời**, hệ thống sẽ phát âm báo hết giờ, tính lượt chưa trả lời, tự động chuyển sang câu khác tiếp theo và nhường quyền thi đấu sang cho đội đối phương!
- **Đội 1 (Đỏ - Bên trái)** và **Đội 2 (Xanh - Bên phải)**, mỗi đội gồm bộ câu hỏi trắc nghiệm (A, B, C, D).
- Khi một đội **trả lời đúng**: Đội đó giật cờ và dây kéo về phía mình (+18%).
- Khi một đội **trả lời sai**: Đội đối phương lập tức kéo giật cờ về phía họ (+18%).
- **Thắng Knock-out**: Đội nào kéo được lá cờ chạm vạch đích sẽ thắng ngay lập tức!
- Nếu kết thúc toàn bộ câu hỏi hoặc hết 2 phút, đội nào kéo cờ nghiêng về phía mình nhiều hơn sẽ giành chiến thắng chung cuộc.

---

## 📚 Tab Quản Lý Câu Hỏi (Thêm, Sửa, Xóa)
- Chuyển đổi linh hoạt giữa tab **Đấu Trường Kéo Co** và tab **Quản Lý Câu Hỏi** ngay thanh điều hướng trên cùng.
- **Thêm câu hỏi mới**: Tạo thêm câu hỏi không giới hạn số lượng cho Đội 1 hoặc Đội 2 với 4 đáp án A, B, C, D và giải thích chi tiết.
- **Nhân bản (Duplicate)**: Sao chép nhanh một câu hỏi có sẵn để chỉnh sửa.
- **Chỉnh sửa trực tiếp**: Thay đổi nội dung câu hỏi, đáp án, giải thích và bấm chọn đáp án đúng với phản hồi thị giác rõ ràng.
- **Xóa câu hỏi**: Xóa câu hỏi không cần thiết (kèm hộp thoại xác nhận an toàn).
- **Tìm kiếm thông minh**: Lọc nhanh câu hỏi theo từ khóa trong câu hỏi hoặc đáp án.
- **Nhập/Xuất JSON**: Sao lưu toàn bộ ngân hàng câu hỏi ra file `.json` hoặc nhập dữ liệu câu hỏi từ máy tính.
- **Lưu trữ tự động**: Tự động lưu mọi thay đổi vào `localStorage` của trình duyệt, không bị mất khi tải lại trang.

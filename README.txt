THƯ MỜI ĐIỆN TỬ — HUSC EVENT HUB
=================================

NỘI DUNG
- index.html: website thư mời, hiệu ứng mở phong thư, ảnh chủ đề, nội dung thư và RSVP.
- assets/: các hình nhận diện được tìm thấy trong thư viện của bạn.
- Code.gs: mã Google Apps Script để ghi dữ liệu xác nhận vào Google Sheet.

LƯU Ý VỀ ẢNH
Website hiện dùng file nhận diện “Hành Trình Giữ Lửa Sống Mãi.png” làm hình chủ đề lớn và “had (1).png” làm chi tiết trang trí.
Nếu “hình số 8” và “file hình số 4” bạn nhắc đến là các file khác, hãy gửi lại đúng ảnh/element hoặc cho biết tên file để thay vào chính xác.

KẾT NỐI GOOGLE SHEET
Link đích bạn cung cấp:
https://docs.google.com/spreadsheets/d/11MNYQTzQ95vj1KDT9YxX8mc2rG3rpH7jLzIm9tXfyrU/edit?gid=0#gid=0

1. Mở https://script.google.com/ bằng tài khoản có quyền chỉnh sửa Google Sheet.
2. Tạo dự án Apps Script mới, dán toàn bộ nội dung Code.gs vào trình soạn thảo, lưu lại.
3. Chọn Deploy > New deployment > loại Web app.
4. Execute as: Me. Who has access: Anyone. Bấm Deploy và chấp thuận quyền truy cập bảng tính khi được yêu cầu.
5. Sao chép URL Web app kết thúc bằng /exec.
6. Mở index.html, tìm dòng:
   const SCRIPT_URL='PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   Thay phần PASTE... bằng URL /exec vừa sao chép.
7. Lưu lại, tải toàn bộ thư mục lên dịch vụ host website (GitHub Pages, Netlify, hoặc hosting của trường). Giữ nguyên thư mục assets cạnh index.html.
8. Kiểm tra gửi một phản hồi thử; trong Google Sheet sẽ có tab RSVP với các cột Thời gian gửi, Tên đơn vị, Xác nhận tham gia, Nguồn.

QUAN TRỌNG
- Chỉ khi bạn deploy Apps Script và dán URL /exec thì biểu mẫu mới thực sự ghi vào Google Sheet.
- Cần quyền chỉnh sửa bảng tính để Apps Script ghi dữ liệu.
- Vì Apps Script nhận yêu cầu từ website công khai, hãy chỉ chia sẻ website với nhóm đối tượng cần xác nhận và theo dõi phản hồi bất thường.
- Nội dung thời gian, địa điểm, dress code hiện là placeholder để bạn cập nhật theo thông tin chương trình chính thức.

export const PRODUCT_NAME = "Robot Hút Bụi Thông Minh";

export const PRODUCT_TAGLINE = "Tương Lai Của Dọn Dẹp Thông Minh";
export const PRODUCT_SUBTITLE = "Robot Hút Bụi Tích Hợp AI Với Công Nghệ LiDAR";

export const PRODUCT_SPECS = {
  suction: { value: "5000Pa", label: "Lực Hút Mạnh Mẽ" },
  battery: { value: "180 Phút", label: "Thời Gian Hoạt Động" },
  lidar: { value: "LiDAR 360°", label: "Định Vị" },
  wifi: { value: "WiFi 6", label: "Kết Nối" },
  voice: { value: "Trợ Lý Giọng Nói", label: "Điều Khiển" },
  capacity: { value: "5200mAh", label: "Pin" },
  dustBox: { value: "650ml", label: "Hộp Chứa Bụi" },
  waterTank: { value: "350ml", label: "Bình Nước" },
  charging: { value: "USB-C", label: "Sạc Nhanh" },
  ota: { value: "Cập Nhật OTA", label: "Phần Mềm" },
};

export const PRODUCT_FEATURES = [
  {
    title: "Định Vị AI",
    description: "Thuật toán AI tiên tiến học bố cục nhà bạn để tối ưu hóa lộ trình dọn dẹp",
    icon: "Brain",
  },
  {
    title: "Lập Bản Đồ LiDAR",
    description: "Quét laser 360° tạo bản đồ chi tiết với độ chính xác milimét",
    icon: "Radar",
  },
  {
    title: "Lực Hút 5000Pa",
    description: "Lực hút dẫn đầu ngành dễ dàng loại bỏ bụi bẩn và lông thú cưng",
    icon: "Wind",
  },
  {
    title: "Tránh Vật Cản",
    description: "Camera AI nhận diện và tránh đồ đạc, dây cáp và chất thải thú cưng",
    icon: "Shield",
  },
  {
    title: "Điều Khiển Giọng Nói",
    description: "Tương thích với Alexa, Google Assistant và Siri để điều khiển rảnh tay",
    icon: "Mic",
  },
  {
    title: "Tự Động Sạc",
    description: "Tự động quay về đế sạc khi pin yếu, tiếp tục sau khi sạc đầy",
    icon: "BatteryCharging",
  },
  {
    title: "Lập Bản Đồ Đa Tầng",
    description: "Lưu trữ tối đa 5 bản đồ tầng, tự động nhận diện tầng hiện tại",
    icon: "Map",
  },
  {
    title: "Thu Gom Bụi Tự Động",
    description: "Trạm làm rỗng tự động chứa bụi lên đến 60 ngày",
    icon: "Trash2",
  },
  {
    title: "Làm Sạch Lông Thú",
    description: "Thiết kế đặc biệt cho nhà có thú cưng, bàn chải không rối",
    icon: "PawPrint",
  },
  {
    title: "Chế Độ Im Lặng",
    description: "Hoạt động siêu êm chỉ 55dB, hoàn hảo cho dọn dẹp ban đêm",
    icon: "Volume2",
  },
  {
    title: "Lên Lịch Dọn Dẹp",
    description: "Đặt lịch tùy chỉnh cho từng phòng, dọn khi bạn vắng nhà",
    icon: "Clock",
  },
  {
    title: "Điều Khiển Qua App",
    description: "Điều khiển đầy đủ từ smartphone, theo dõi trạng thái thời gian thực",
    icon: "Smartphone",
  },
];

export const PRODUCT_HOTSPOTS = [
  { id: "laser", x: 50, y: 15, label: "Cảm Biến LiDAR", description: "Quét laser 360° với độ chính xác 0.5mm" },
  { id: "camera", x: 50, y: 25, label: "Camera AI", description: "Nhận diện hơn 100 loại vật thể" },
  { id: "brush", x: 30, y: 85, label: "Bàn Chải Chính", description: "Bàn chải cao su không rối" },
  { id: "dust", x: 50, y: 50, label: "Hộp Chứa Bụi", description: "Dung tích lớn 650ml" },
  { id: "water", x: 50, y: 60, label: "Bình Nước", description: "350ml với điều khiển chính xác" },
  { id: "side", x: 20, y: 75, label: "Bàn Chải Cạnh", description: "Làm sạch góc cạnh hiệu quả" },
  { id: "wheel", x: 70, y: 80, label: "Bánh Xe Chính", description: "Vượt chướng ngại vật cao 20mm" },
  { id: "charging", x: 50, y: 90, label: "Cổng Sạc", description: "Sạc nhanh USB-C" },
];

export const AI_TIMELINE = [
  {
    title: "Camera AI",
    description: "Camera RGB với chip AI xử lý 60 khung hình/giây để nhận diện đồ đạc, dây cáp, chất thải thú cưng và vật nhỏ",
    icon: "Camera",
  },
  {
    title: "Định Vị LiDAR",
    description: "Cảm biến laser cấp quân sự tạo bản đồ 360° theo thời gian thực, cập nhật 2000 lần/giây",
    icon: "Radar",
  },
  {
    title: "Lập Bản Đồ Thông Minh",
    description: "Thuật toán học máy tối ưu lộ trình dọn dẹp, giảm thời gian lên đến 30% so với mẫu ngẫu nhiên",
    icon: "Map",
  },
  {
    title: "Phát Hiện Vật Cản",
    description: "Cảm biến 3D ToF phát hiện vật thể nhỏ tới 10mm, ngăn va chạm và bảo vệ đồ đạc của bạn",
    icon: "Shield",
  },
  {
    title: "Tự Động Quay Về",
    description: "Ghi nhớ vị trí chính xác khi pin yếu, sạc nhanh và tiếp tục đúng chỗ đã dừng",
    icon: "Home",
  },
  {
    title: "Tự Làm Sạch",
    description: "Thu gom bụi tự động với lực hút 17000Pa chuyển rác vào trạm 3L chỉ trong 10 giây",
    icon: "Sparkles",
  },
];

export const REVIEWS = [
  {
    name: "Nguyễn Thị Mai",
    role: "Người Nuôi Thú Cưng",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5,
    verified: true,
    comment: "Đầu tư tốt nhất cho nhà tôi! Xử lý lông chó mèo cực tốt. Chó Golden của tôi rụng lông nhiều mà robot này giữ sàn nhà sạch bóng.",
  },
  {
    name: "Trần Minh Tuấn",
    role: "Người Yêu Công Nghệ",
    avatar: "/avatars/avatar-2.jpg",
    rating: 5,
    verified: true,
    comment: "Định vị AI thật đáng kinh ngạc. Nó học bố cục nhà tôi và tránh mọi vật cản. Ứng dụng trực quan và đầy tính năng.",
  },
  {
    name: "Lê Hương Giang",
    role: "Dân Công Sở",
    avatar: "/avatars/avatar-3.jpg",
    rating: 5,
    verified: true,
    comment: "Tiết kiệm thời gian cực kỳ! Tôi hẹn giờ dọn khi đi làm. Về nhà sàn nhà luôn sạch bóng mỗi ngày. Đáng từng đồng!",
  },
  {
    name: "Phạm Đức Anh",
    role: "Fan Nhà Thông Minh",
    avatar: "/avatars/avatar-4.jpg",
    rating: 5,
    verified: true,
    comment: "Tích hợp hoàn hảo với hệ thống nhà thông minh. Điều khiển giọng nói qua Alexa hoạt động mượt mà. Chất lượng cao cấp.",
  },
  {
    name: "Võ Thanh Hà",
    role: "Mẹ Của 2 Con",
    avatar: "/avatars/avatar-5.jpg",
    rating: 5,
    verified: true,
    comment: "Thay đổi cuộc sống khi có con nhỏ! Hút sạch vụn bánh, đồ chơi và mọi thứ. Tránh vật cản thông minh - không bao giờ bị kẹt.",
  },
];

export const COMPARISON_DATA = {
  traditional: {
    title: "Máy Hút Bụi Truyền Thống",
    items: [
      { label: "Cần vận hành thủ công", positive: false },
      { label: "Nặng và mệt mỏi", positive: false },
      { label: "Không chui được dưới đồ đạc", positive: false },
      { label: "Không có lịch trình", positive: false },
      { label: "Hoạt động ồn ào", positive: false },
      { label: "Cần không gian cất giữ", positive: false },
    ],
  },
  helio: {
    title: "Robot Hút Bụi Thông Minh",
    items: [
      { label: "Dọn dẹp hoàn toàn tự động", positive: true },
      { label: "Đặt và quên", positive: true },
      { label: "Làm sạch vùng khó với tới", positive: true },
      { label: "Lên lịch tùy chỉnh", positive: true },
      { label: "Siêu êm 55dB", positive: true },
      { label: "Tự động về đế và sạc", positive: true },
    ],
  },
};

export const FAQ_DATA = [
  {
    question: "Pin sử dụng được bao lâu?",
    answer: "Robot Hút Bụi Thông Minh hoạt động lên đến 180 phút (3 giờ) với một lần sạc, đủ để làm sạch hầu hết các ngôi nhà lên đến 2500 ft². Khi pin yếu, nó sẽ tự động quay về đế sạc.",
  },
  {
    question: "Nó có hoạt động trên thảm và sàn gỗ không?",
    answer: "Có! Nó tự động điều chỉnh lực hút và độ cao bàn chải dựa trên loại sàn. Hoạt động tuyệt vời trên sàn gỗ, gạch, laminate và thảm dày tới 20mm.",
  },
  {
    question: "Tránh vật cản hoạt động như thế nào?",
    answer: "Nó sử dụng kết hợp camera AI, LiDAR và cảm biến 3D ToF để phát hiện và tránh vật cản. Có thể nhận diện hơn 100 loại vật thể bao gồm dây cáp, giày dép, chất thải thú cưng và đồ đạc.",
  },
  {
    question: "Nó có thể lau sàn không?",
    answer: "Có, nó có bình nước 350ml với điều khiển lưu lượng nước điện tử. Có thể hút bụi và lau đồng thời, bạn có thể điều chỉnh mức nước qua app.",
  },
  {
    question: "Nó có an toàn cho thú cưng không?",
    answer: "Hoàn toàn! Nó được thiết kế đặc biệt cho nhà có thú cưng. Tránh chất thải thú cưng, xử lý lông thú hiệu quả với bàn chải không rối và hoạt động êm để không làm giật mình thú cưng.",
  },
  {
    question: "Tôi cần đổ rác bao lâu một lần?",
    answer: "Với trạm tự động làm rỗng, bạn chỉ cần đổ rác mỗi 60 ngày. Robot tự động làm rỗng sau mỗi lần dọn dẹp.",
  },
  {
    question: "Nó có thể xử lý nhiều tầng không?",
    answer: "Có! Nó có thể lưu trữ tối đa 5 bản đồ tầng khác nhau và tự động nhận diện tầng hiện tại. Hoàn hảo cho nhà nhiều tầng.",
  },
  {
    question: "Bảo hành bao gồm những gì?",
    answer: "Mỗi Robot Hút Bụi Thông Minh đi kèm bảo hành 2 năm của nhà sản xuất bao gồm các lỗi và trục trặc. Các tùy chọn bảo hành mở rộng có sẵn khi thanh toán.",
  },
  {
    question: "Nó ồn như thế nào?",
    answer: "Nó hoạt động ở mức 55dB ở chế độ tiêu chuẩn, êm hơn cuộc trò chuyện bình thường. Chế độ im lặng giảm xuống còn 50dB cho dọn dẹp ban đêm.",
  },
  {
    question: "Nó có hoạt động được không có WiFi không?",
    answer: "Có, bạn có thể sử dụng các nút trên robot để bắt đầu dọn dẹp cơ bản mà không cần WiFi. Tuy nhiên, WiFi cần thiết cho điều khiển app, lên lịch và cập nhật firmware.",
  },
];

export const BRAND_LOGOS = [
  { name: "Google", image: "/brands/google.svg" },
  { name: "Amazon", image: "/brands/amazon.svg" },
  { name: "CES Innovation Award", image: "/brands/ces.svg" },
  { name: "Smart Home Certified", image: "/brands/smarthome.svg" },
];

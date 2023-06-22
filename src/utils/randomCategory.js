const assignableCategories = [
  "Thể thao",
  "Du lịch",
  "Âm nhạc",
  "Danh sách kết hợp",
  "Tin tức",
  "Trực tiếp",
  "Hài kịch tình huống",
  "Hoạt họa",
  "Chương trình nấu ăn",
  "Đọc rap",
  "Thú cưng",
  "Bóng đá",
  "Trò chơi hành động phiêu lưu",
  "Mới tải lên gần đây",
  "Đề xuất mới",
  "Khoa học",
  "Học tập",
  "Thế giới động vật",
  "Chương trình thực tế",
];
const categoryHomePage = (categories = assignableCategories) => {
  // tạo một bản sao của mảng categories
  const shuffledCategory = [...categories];

  // xáo trộn vị trí các phần tử trong mảng shuffledCategory ngẫu nhiên
  for (let i = shuffledCategory.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCategory[i], shuffledCategory[j]] = [
      shuffledCategory[j],
      shuffledCategory[i],
    ];
  }

  return shuffledCategory;
};
export { categoryHomePage };

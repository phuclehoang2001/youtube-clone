const categories_homepage_videos = [
  "Âm nhạc",
  "Trò chơi",
  "Danh sách kết hợp",
  "Tin tức",
  "Trực tiếp",
  "Hoạt họa",
  "Vlog",
  "Chương trình nấu ăn",
  "Bóng đá",
  "Du lịch",
  "Nghệ sĩ",
  "Ẩm thực",
  "Trò chơi vui nhộn",
  "Mới tải lên",
  "Đề xuất mới",
  "Nấu ăn",
  "Talk Show",
  "Game Show",
  "Người nổi tiếng",
  "Hài kịch",
  "Phim võ thuật",
  "Danh sách kết hợp",
];

const categoryHomePage = () => {
  // tạo một bản sao của mảng category
  const shuffledCategory = [...categories_homepage_videos];

  // xáo trộn vị trí các phần tử trong mảng shuffledCategory ngẫu nhiên
  for (let i = shuffledCategory.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCategory[i], shuffledCategory[j]] = [
      shuffledCategory[j],
      shuffledCategory[i],
    ];
  }

  // trả về mảng đã được xáo trộn
  return shuffledCategory.slice(0, 15);
};
export { categoryHomePage };

const categoryHomePage = (categories) => {
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

  // trả về mảng đã được xáo trộn với 15 phần tử đầu tiên
  return shuffledCategory;
};
export { categoryHomePage };

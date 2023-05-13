import React from "react";
import "./CategoriesBar.scss";
import SliderCategories, { CategoryItem } from "./SliderCategories/";

const categories = [
  "Tất cả",
  "Âm nhạc",
  "Trò chơi",
  "Trực tiếp",
  "Danh sách kết hợp",
  "Hoạt họa",
  "Hài kịch tình huống",
];
const CategoriesBar = () => {
  return (
    <aside className="wrapper_category">
      <SliderCategories>
        {categories.map((value, index) => (
          <CategoryItem category={value} key={index}></CategoryItem>
        ))}
      </SliderCategories>
    </aside>
  );
};

export default CategoriesBar;

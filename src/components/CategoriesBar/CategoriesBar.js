import React, { useState } from "react";
import "./CategoriesBar.scss";
import SliderCategories, { CategoryItem } from "./SliderCategories/";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videos";

const categories = [
  "Tất cả",
  "Âm nhạc",
  "Trò chơi",
  "Danh sách kết hợp",
  "Tin tức",
  "Trực tiếp",
  "Hoạt họa",
  "Vlog",
  "Chương trình nấu ăn",
  "bóng đá",
];
const CategoriesBar = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveCategory(value);
    dispatch(getVideosByCategory(value));
  };

  return (
    <aside className="wrapper_category">
      <SliderCategories>
        {categories.map((value, index) => (
          <CategoryItem
            category={value}
            key={index}
            handleClick={handleClick}
            className={activeCategory === value ? "active" : ""}
          ></CategoryItem>
        ))}
      </SliderCategories>
    </aside>
  );
};

export default CategoriesBar;

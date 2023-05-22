import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { RightIcon, LeftIcon } from "../Icons/";
import "./CategoriesBar.scss";
import SliderCategories, { CategoryItem } from "./SliderCategories/";
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
  "Du lịch",
  "Nghệ sĩ",
  "Ẩm thực",
  "Trò chơi vui nhộn",
];

const CategoriesBar = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const leftIconRef = useRef(null);
  const rightIconRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveCategory(value);
    dispatch(getVideosByCategory(value));
  };

  const dragging = (e) => {
    if (!isDragging) return;
    sliderRef.current.classList.add("dragging");
    sliderRef.current.scrollLeft -= e.movementX;
    handleIcons();
  };

  const handleIcons = () => {
    let scrollValue = Math.round(sliderRef.current.scrollLeft);
    let maxScrollWidth =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    leftIconRef.current.parentElement.style.display =
      scrollValue > 0 ? "flex" : "none";
    rightIconRef.current.parentElement.style.display =
      maxScrollWidth > scrollValue ? "flex" : "none";
  };

  const handleClickToDrag = (e) => {
    const classList = e.currentTarget.classList;
    if (classList.contains("left_icon")) {
      sliderRef.current.scrollLeft += -350;
    } else if (classList.contains("right_icon")) {
      sliderRef.current.scrollLeft += 350;
    }
    setTimeout(() => handleIcons(), 50);
  };
  return (
    <aside className="wrapper_category">
      <div className="slider_category_icon">
        <button
          className={"icon_category left_icon"}
          onClick={handleClickToDrag}
          ref={leftIconRef}
        >
          <LeftIcon />
        </button>
      </div>
      <SliderCategories
        onMouseMove={dragging}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        elementRef={sliderRef}
      >
        {categories.map((value, index) => (
          <CategoryItem
            category={value}
            key={index}
            handleClick={handleClick}
            className={activeCategory === value ? "active" : ""}
          ></CategoryItem>
        ))}
      </SliderCategories>
      <div className="slider_category_icon">
        <button
          className={"icon_category right_icon"}
          onClick={handleClickToDrag}
          ref={rightIconRef}
        >
          <RightIcon />
        </button>
      </div>
    </aside>
  );
};

export default CategoriesBar;

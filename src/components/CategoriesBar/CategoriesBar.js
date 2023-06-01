import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { RightIcon, LeftIcon } from "../Icons/";
import "./CategoriesBar.scss";
import SliderCategories, { CategoryItem } from "./SliderCategories/";
import {
  getPopularVideos,
  getVideosByCategoryId,
} from "../../redux/actions/videos";

const CategoriesBar = ({ categories, getAPI = false, className }) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const leftIconRef = useRef(null);
  const rightIconRef = useRef(null);

  const dispatch = useDispatch();
  const allCategories = ["Tất cả", ...categories];
  const handleClick = (title, categoryId) => {
    setActiveCategory(title);
    if (title === "Tất cả") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategoryId(title, categoryId));
    }
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
      sliderRef.current.scroll({
        left: sliderRef.current.scrollLeft - 1000,
        behavior: "smooth",
      });
    } else if (classList.contains("right_icon")) {
      sliderRef.current.scroll({
        left: sliderRef.current.scrollLeft + 1000,
        behavior: "smooth",
      });
    }
  };
  return (
    <aside className={`wrapper_category ${className ? className : ""}`}>
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
        onScroll={handleIcons}
        elementRef={sliderRef}
      >
        {allCategories.map((data, index) => {
          let categoryTitle = null;
          let categoryId = null;
          if (getAPI) {
            if (data === "Tất cả") {
              categoryTitle = data;
              categoryId = null;
            } else {
              const {
                id,
                snippet: { title, assignable, channelId },
              } = data;
              categoryTitle = title;
              categoryId = id;
            }
          } else {
            categoryTitle = data;
          }

          //xử lý assignable
          return (
            <CategoryItem
              title={categoryTitle}
              categoryId={categoryId}
              key={index}
              handleClick={handleClick}
              className={activeCategory === categoryTitle ? "active" : ""}
            ></CategoryItem>
          );
        })}
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

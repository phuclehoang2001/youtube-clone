import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { RightIcon, LeftIcon } from "../Icons/";
import "./CategoriesBar.scss";
import SliderCategories, { CategoryItem } from "./SliderCategories/";
import {
  getPopularVideos,
  getVideosByKeyword,
  getRelatedVideosByChannel,
  getRelatedVideos,
  getRelatedVideosByRelevance,
  getRelatedVideosByRecent,
} from "../../redux/actions/videos";

const CategoriesBar = ({ categories, videoId, channelId, className }) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const leftIconRef = useRef(null);
  const rightIconRef = useRef(null);

  const dispatch = useDispatch();
  const allCategories = [...categories];

  const handleRenderHomeVideos = ({ title }) => {
    setActiveCategory(title);
    if (title === "Tất cả") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByKeyword(title));
    }
  };

  const handleRenderRelatedVideos = ({ title, filter, channelId }) => {
    setActiveCategory(title);

    switch (filter) {
      case "BY_ALL":
        dispatch(getRelatedVideos());
        break;
      case "BY_CHANNEL":
        dispatch(getRelatedVideosByChannel(channelId));
        break;
      case "BY_RELEVANCE":
        dispatch(getRelatedVideosByRelevance());
        break;
      case "BY_RECENT":
        dispatch(getRelatedVideosByRecent());
        break;
      default:
        break;
    }
    //Xử lý relatedVideos
    // dispatch(getVideosByChannel(channelId));
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
          let handleClick = null;
          if (typeof data === "string") {
            categoryTitle = data;
            handleClick = handleRenderHomeVideos;
          } else if (typeof data === "object") {
            categoryTitle = data.title;
            handleClick = handleRenderRelatedVideos;
          }

          return (
            <CategoryItem
              title={categoryTitle}
              categoryId={categoryId}
              channelId={channelId}
              key={index}
              handleClick={handleClick}
              filter={data.type}
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

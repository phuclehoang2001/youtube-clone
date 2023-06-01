import React from "react";
import "./SliderCategories.scss";

const CategoryItem = ({ title, categoryId, handleClick, className }) => {
  const onClick = (title, categoryId) => {
    handleClick(title, categoryId);
  };

  return (
    <span
      className={`category_item ${className}`}
      onClick={() => {
        onClick(title, categoryId);
      }}
    >
      {title}
    </span>
  );
};

export default CategoryItem;

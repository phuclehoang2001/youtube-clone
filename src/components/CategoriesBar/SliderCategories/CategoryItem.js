import React from "react";
import "./SliderCategories.scss";

const CategoryItem = ({ category, handleClick, className }) => {
  const onClick = (value) => {
    handleClick(value);
  };

  return (
    <span
      className={`category_item ${className}`}
      onClick={() => {
        onClick(category);
      }}
    >
      {category}
    </span>
  );
};

export default CategoryItem;

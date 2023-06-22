import React from "react";
import "./SliderCategories.scss";

const CategoryItem = ({
  title,
  categoryId,
  channelId,
  handleClick,
  className,
}) => {
  const onClick = (title) => {
    handleClick(title, categoryId);
  };

  return (
    <span
      className={`category_item ${className}`}
      onClick={() => {
        onClick(title);
      }}
    >
      {title}
    </span>
  );
};

export default CategoryItem;

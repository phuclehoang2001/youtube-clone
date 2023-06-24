import React from "react";
import "./SliderCategories.scss";

const CategoryItem = ({
  title,
  categoryId,
  channelId,
  filter,
  handleClick,
  className,
}) => {
  const onClick = (title) => {
    const data = {
      title: title,
      channelId: channelId,
      filter: filter,
    };
    handleClick(data);
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

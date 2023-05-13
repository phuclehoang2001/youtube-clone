import React from "react";
import "./SliderCategories.scss";
import { NavLink } from "react-router-dom";

const CategoryItem = ({ category, to }) => {
  return (
    <NavLink className="category_item" to={to}>
      {category}
    </NavLink>
  );
};

export default CategoryItem;

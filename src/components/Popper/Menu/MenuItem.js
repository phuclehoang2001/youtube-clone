import React, { useEffect } from "react";
import Button from "../../Button";
import "./Menu.scss";
function MenuItem({ data, onClick, handleSort, active }) {
  const handleSortMenu = () => {
    handleSort(data.title);
  };
  return (
    <Button
      className={`menu_item_header ${data.separate ? "separate" : ""} ${
        data.lastItem ? "lastItem" : ""
      } ${active ? "active" : ""}`}
      leftIcon={data.leftIcon}
      rightIcon={data.rightIcon}
      to={data.to}
      onClick={onClick || handleSortMenu}
    >
      {data.selectedOption ? data.title + data.selectedOption : data.title}
    </Button>
  );
}

export default MenuItem;

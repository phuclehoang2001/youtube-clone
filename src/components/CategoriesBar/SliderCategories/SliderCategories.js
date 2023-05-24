import React from "react";
import "./SliderCategories.scss";

const SliderCategories = ({
  onMouseMove,
  onMouseDown,
  onMouseUp,
  onScroll,
  elementRef,
  children,
}) => {
  return (
    <nav
      className="slider_category"
      onMouseMove={onMouseMove}
      ref={elementRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onScroll={onScroll}
    >
      {children}
    </nav>
  );
};

export default SliderCategories;

import React, { useEffect, useState } from "react";
import RelatedVideoList from "./RelatedVideoList";
import RelatedVideoItem from "./RelatedVideoList/RelatedVideoItem";
import CategoriesBar from "../CategoriesBar/";
import "./Wrapper.scss";
const categories_related_videos = [
  "Của Mr X",
  "Video có liên quan",
  "Tải lên gần đây",
];

const Wrapper = () => {
  return (
    <div className="wrapper_related_videos">
      <RelatedVideoList>
        <CategoriesBar
          categories={categories_related_videos}
          className="related"
        />
        {[...Array(15)].map((_, index) => (
          <RelatedVideoItem key={index} />
        ))}
      </RelatedVideoList>
    </div>
  );
};

export default Wrapper;

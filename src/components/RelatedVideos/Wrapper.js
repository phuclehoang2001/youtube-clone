import React, { useEffect, useState } from "react";
import RelatedVideoList from "./RelatedVideoList";
import RelatedVideoItem from "./RelatedVideoList/RelatedVideoItem";
import CategoriesBar from "../CategoriesBar/";
import "./Wrapper.scss";

const Wrapper = ({ videoId, channelId, channelTitle }) => {
  const categories_related_videos = [
    `Của ${channelTitle}`,
    "Video có liên quan",
    "Tải lên gần đây",
  ];
  return (
    <div className="wrapper_related_videos">
      <RelatedVideoList>
        <CategoriesBar
          categories={categories_related_videos}
          className="related"
          videoId={videoId}
          channelId={channelId}
        />
        {[...Array(15)].map((_, index) => (
          <RelatedVideoItem key={index} />
        ))}
      </RelatedVideoList>
    </div>
  );
};

export default Wrapper;

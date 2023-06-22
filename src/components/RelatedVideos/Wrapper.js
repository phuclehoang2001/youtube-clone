import React, { useEffect, useState } from "react";
import RelatedVideoList from "./RelatedVideoList";
import RelatedVideoItem from "./RelatedVideoList/RelatedVideoItem";
import CategoriesBar from "../CategoriesBar/";
import "./Wrapper.scss";

const Wrapper = ({ videoId, channelId, channelTitle }) => {
  const categories_related_videos = [
    { title: "Tất cả", type: "BY_ALL" },
    { title: `Của ${channelTitle}`, type: "BY_CHANNEL" },
    { title: "Video có liên quan", type: "BY_RELAVANCE" },
    { title: "Tải lên gần đây", type: "BY_RECENT" },
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

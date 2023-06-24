import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RelatedVideoList from "./RelatedVideoList";
import RelatedVideoItem from "./RelatedVideoList/RelatedVideoItem";
import CategoriesBar from "../CategoriesBar/";
import "./Wrapper.scss";
import { getRelatedVideos } from "../../redux/actions/videos";
import { LoadingIcon } from "../Icons/Icons";
const Wrapper = ({ videoId, channelId, channelTitle }) => {
  const categories_related_videos = [
    { title: "Tất cả", type: "BY_ALL" },
    { title: `Của ${channelTitle}`, type: "BY_CHANNEL" },
    { title: "Video có liên quan", type: "BY_RELEVANCE" },
    { title: "Tải lên gần đây", type: "BY_RECENT" },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelatedVideos());
  }, [dispatch]);

  const { videos, loading } = useSelector((state) => state.relatedVideos);

  return (
    <div className="wrapper_related_videos">
      <RelatedVideoList>
        <CategoriesBar
          categories={categories_related_videos}
          className="related"
          videoId={videoId}
          channelId={channelId}
        />
        {!loading ? (
          <>
            {videos?.map((video, index) => (
              <RelatedVideoItem key={index} video={video} />
            ))}
          </>
        ) : (
          <div className="loading" width="2rem" height="2rem">
            <LoadingIcon />
          </div>
        )}
      </RelatedVideoList>
    </div>
  );
};

export default Wrapper;

import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { GridLayout } from "../../layouts/DefaultLayout/DefaultLayout";
import Video from "../../components/Videos";
import PlaylistGrid from "../../components/Videos/PlaylistGrid/";
import {
  getPopularVideos,
  getVideosByKeyword,
} from "../../redux/actions/videos";
import { getPlaylists } from "../../redux/actions/playlists";
import SkeletonVideo from "../../components/Skeletons/SkeletonVideo";
import { categoryHomePage } from "../../utils/randomCategory";
const HomeLayout = () => {
  const dispatch = useDispatch();
  const grid = useContext(GridLayout);
  const {
    videos,
    activeCategory,
    loading: loadingVideos,
  } = useSelector((state) => state.homeVideos);

  const { playlists, loading: loadingPlaylists } = useSelector(
    (state) => state.homePlaylists
  );

  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken !== null) dispatch(getPlaylists());
  }, [dispatch, accessToken]);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  // trộn video và playlists sau đó random
  const mixture = categoryHomePage([...playlists, ...videos]);

  // const fetchData = () => {
  //   if (activeCategory === "Tất cả") {
  //     dispatch(getPopularVideos());
  //   } else {
  //     dispatch(getVideosByCategory(activeCategory));
  //   }
  // };

  return (
    <InfiniteScroll
      dataLength={videos.length}
      // next={fetchData}
      hasMore={true}
      loader={
        <div className="spinner-border text-danger d-block mx-auto"></div>
      }
      className="row"
    >
      {!loadingVideos && !loadingPlaylists
        ? mixture.map((item) => (
            <Col
              lg={grid}
              md={grid}
              key={item.id?.videoId || item.id}
              style={{ maxWidth: "380px" }}
              className="col"
            >
              {(item.kind === "youtube#video" ||
                item.kind === "youtube#searchResult") && <Video video={item} />}
              {item.kind === "youtube#playlist" && (
                <PlaylistGrid video={item}></PlaylistGrid>
              )}
            </Col>
          ))
        : [...Array(20)].map((_, index) => (
            <Col lg={grid} md={grid} key={index} style={{ maxWidth: "380px" }}>
              <SkeletonVideo />
            </Col>
          ))}
    </InfiniteScroll>
  );
};

export default HomeLayout;

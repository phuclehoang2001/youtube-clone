import React, { useEffect, useRef } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { useContext } from "react";
import { GridLayout } from "../../layouts/DefaultLayout/DefaultLayout";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Videos";
import PlaylistGrid from "../../components/Videos/PlaylistGrid/";
import {
  getPopularVideos,
  getVideosByKeyword,
} from "../../redux/actions/videos";
import { getPlaylists } from "../../redux/actions/playlists";
import { getVideoCategories } from "../../redux/actions/categories";
import { categoryHomePage } from "../../utils/randomCategory";
import SkeletonVideo from "../../components/Skeletons/SkeletonVideo";

const HomePage = () => {
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

  const { categories, loading: loadingCategories } = useSelector(
    (state) => state.homeVideoCategories
  );

  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken !== null) dispatch(getPlaylists());
  }, [dispatch, accessToken]);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getVideoCategories());
  }, [dispatch]);

  // lọc ra các category có assignable = true để thực hiện chọn videos (bắt buộc)
  const assignableCategories = categories.filter((category) => {
    const {
      snippet: { assignable },
    } = category;
    return assignable === true;
  });

  // random category khi tải lại trang, lấy 12 phần tử
  const sortedCategories = [
    ...categoryHomePage(assignableCategories.slice(0, 12)),
  ];

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
    <Container style={{ paddingTop: "76px" }}>
      <CategoriesBar categories={sortedCategories} getAPI={true} />
      <InfiniteScroll
        dataLength={videos.length}
        // next={fetchData}
        // hasMore={true}
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
                {item.kind === "youtube#video" && <Video video={item} />}
                {item.kind === "youtube#playlist" && (
                  <PlaylistGrid video={item}></PlaylistGrid>
                )}
              </Col>
            ))
          : [...Array(20)].map((_, index) => (
              <Col
                lg={grid}
                md={grid}
                key={index}
                style={{ maxWidth: "380px" }}
              >
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;

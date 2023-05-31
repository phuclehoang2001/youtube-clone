import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { useContext } from "react";
import { GridLayout } from "../../layouts/DefaultLayout/DefaultLayout";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Videos";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos";
import { categoryHomePage } from "../../utils/randomCategory";
import SkeletonVideo from "../../components/Skeletons/SkeletonVideo";

const categories = ["Tất cả", ...categoryHomePage()];

const HomePage = () => {
  const dispatch = useDispatch();
  const grid = useContext(GridLayout);
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "Tất cả") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container style={{ paddingTop: "76px" }}>
      <CategoriesBar categories={categories} />
      {/* <Row className="mb-40"> */}
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col
                lg={grid}
                md={grid}
                key={video.id?.videoId || video.id}
                style={{ maxWidth: "380px" }}
              >
                <Video video={video} />
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
      {/* </Row>  */}
    </Container>
  );
};

export default HomePage;

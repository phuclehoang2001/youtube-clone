import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { GridLayout } from "../../layouts/DefaultLayout/DefaultLayout";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Videos";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos";

const categories_homepage_videos = [
  "Tất cả",
  "Âm nhạc",
  "Trò chơi",
  "Danh sách kết hợp",
  "Tin tức",
  "Trực tiếp",
  "Hoạt họa",
  "Vlog",
  "Chương trình nấu ăn",
  "bóng đá",
  "Du lịch",
  "Nghệ sĩ",
  "Ẩm thực",
  "Trò chơi vui nhộn",
  "Chương trình hành động",
  "Phim võ thuật",
];

const HomePage = () => {
  const dispatch = useDispatch();
  const grid = useContext(GridLayout);
  const { videos } = useSelector((state) => state.homeVideos);
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container style={{ paddingTop: "76px" }}>
      <CategoriesBar
        categories={categories_homepage_videos}
        getData={getVideosByCategory}
      />
      <Row className="mb-40">
        {videos.map((video) => (
          <Col
            lg={grid}
            md={grid}
            key={video.id?.videoId || video.id}
            style={{ maxWidth: "380px" }}
          >
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;

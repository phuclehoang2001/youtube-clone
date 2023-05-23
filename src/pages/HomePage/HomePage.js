import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Videos";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videos";
const HomePage = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.homeVideos);
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container style={{ paddingTop: "76px" }}>
      <CategoriesBar />
      <Row className="mb-40">
        {videos.map((video) => (
          <Col
            lg={4}
            md={4}
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

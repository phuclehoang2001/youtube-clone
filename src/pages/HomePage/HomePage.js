import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Videos";
import { useDispatch } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videos";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map((_, index) => (
          <Col lg={4} md={4} key={index}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;

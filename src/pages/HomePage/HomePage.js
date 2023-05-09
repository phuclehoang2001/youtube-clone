import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Videos";
const HomePage = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map((_, index) => (
          <Col lg={3} md={4} key={index}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../CategoriesBar/";
import Video from "../Videos/";
const HomeScreen = () => {
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

export default HomeScreen;

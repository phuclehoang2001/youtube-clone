import React from "react";
import { Container } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar";
import { categoryHomePage } from "../../utils/randomCategory";
import HomeLayout from "./HomeLayout";
const HomePage = () => {
  // random category khi tải lại trang, lấy 12 phần tử
  const sortedCategories = ["Tất cả", ...categoryHomePage()].slice(0, 12);

  return (
    <Container style={{ paddingTop: "76px" }}>
      <CategoriesBar categories={sortedCategories} />
      <HomeLayout />
    </Container>
  );
};

export default HomePage;

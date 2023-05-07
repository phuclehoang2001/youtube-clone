import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import "./DefaultLayout.scss";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className="app_main border border-warning">
          {children}
        </Container>
      </div>
    </>
  );
};

export default DefaultLayout;

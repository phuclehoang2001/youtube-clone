import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import "./DefaultLayout.scss";
import Footer from "../../components/Footer/Footer";
const DefaultLayout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const [footer, toggleFooter] = useState(false);
  const handleSidebar = () => {
    toggleSidebar((value) => !value);
  };
  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
      {footer ? <Footer /> : ""}
    </>
  );
};

export default DefaultLayout;

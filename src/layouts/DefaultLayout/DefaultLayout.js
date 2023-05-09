import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import "./DefaultLayout.scss";
const DefaultLayout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
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
    </>
  );
};

export default DefaultLayout;

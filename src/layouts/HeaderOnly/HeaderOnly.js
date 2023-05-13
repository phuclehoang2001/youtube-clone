import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import "./HeaderOnly.scss";
const HeaderOnly = ({ children }) => {
  const [openSidebar, toggleSidebar] = useState(false);
  const handleSidebar = () => {
    toggleSidebar((value) => !value);
  };
  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app_container">
        <Sidebar renderVideo={true} open={openSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

export default HeaderOnly;

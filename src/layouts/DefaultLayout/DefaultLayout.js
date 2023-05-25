import React, { useState, useEffect, createContext } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import "./DefaultLayout.scss";
import Footer from "../../components/Footer/Footer";

export const GridLayout = createContext();

const DefaultLayout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const [footer, toggleFooter] = useState(false);
  const [grid, setGrid] = useState(3);
  const handleSidebar = () => {
    toggleSidebar((value) => !value);
  };

  useEffect(() => {
    if (sidebar) {
      setGrid(3);
    } else {
      setGrid(4);
    }
  }, [sidebar]);
  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main">
          <GridLayout.Provider value={grid}>{children}</GridLayout.Provider>
        </Container>
      </div>
      {footer ? <Footer /> : ""}
    </>
  );
};

export default DefaultLayout;

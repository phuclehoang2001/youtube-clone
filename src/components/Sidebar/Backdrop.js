import React from "react";

const Backdrop = ({ sidebar, handleSidebar }) => {
  return (
    <div
      className={sidebar ? "backdrop backdrop_open" : "backdrop"}
      onClick={handleSidebar}
    ></div>
  );
};

export default Backdrop;

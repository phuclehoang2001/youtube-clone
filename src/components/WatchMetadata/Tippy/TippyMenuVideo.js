import Tippy from "@tippyjs/react/headless";
import React from "react";
import MenuItem from "../../Popper/Menu/MenuItem";
import "./TippyMenuVideo.scss";

const TippyMenuVideo = ({
  items = [],
  className,
  placement,
  hideOnClick = true,
  children,
}) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <MenuItem data={item} />
        </div>
      );
    });
  };

  const RenderResult = () => (
    <div className="tippy_menu_video">
      <div className="tippy_menu_button">{renderItems()}</div>
    </div>
  );

  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      trigger="click"
      offset={[0, 20]}
      delay={[0, 150]}
      placement={placement}
      render={() => <RenderResult />}
    >

      {children}

    </Tippy>
  );
};

export default TippyMenuVideo;

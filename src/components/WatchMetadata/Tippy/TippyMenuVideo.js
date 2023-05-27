import Tippy from "@tippyjs/react";
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
        <div>
          <MenuItem key={index} data={item} />
        </div>
      );
    });
  };

  const renderResult = () => {
    return <div className="tippy_menu_video">{renderItems()}</div>;
  };

  return (
    <Tippy
      hideOnClick={true}
      interactive
      trigger="click"
      offset={[0, 20]}
      delay={[0, 150]}
      placement={placement}
      render={renderResult}
      className={className}
    >
      {children}
    </Tippy>
  );
};

export default TippyMenuVideo;

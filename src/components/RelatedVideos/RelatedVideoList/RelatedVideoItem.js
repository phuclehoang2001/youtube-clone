import Tippy from "@tippyjs/react";
import React, { useState, useRef, useEffect } from "react";
import {
  QueueIcon,
  ShareIcon,
  TopbarMenu,
  WatchLaterIcon,
} from "../../Icons/Icons";
import TippyMenuVideo from "../../WatchMetadata/Tippy/TippyMenuVideo";
const RelatedVideoItem = () => {
  const [activedMenu, setActivedMenu] = useState(false);
  const tippyRef = useRef(null);
  const handleShowMenu = () => {
    setActivedMenu(true);
  };

  const handleHideMenu = () => {
    setActivedMenu(false);
  };
  const items = [
    {
      leftIcon: <QueueIcon />,
      title: "Thêm vào hàng chờ",
    },
    {
      leftIcon: <ShareIcon />,
      title: "Chia sẻ",
    },
  ];

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  useEffect(() => {
    if (!activedMenu) {
      tippyRef.current.hide();
    } else {
      document.addEventListener("wheel", preventScroll, { passive: false });
    }
    return () => {
      document.removeEventListener("wheel", preventScroll);
    };
  }, [activedMenu]);

  useEffect(() => {
    if (!activedMenu) {
      document.removeEventListener("wheel", preventScroll);
    }
  }, [activedMenu]);

  return (
    <div className="related-video-item-container">
      <a target="_self" href="#">
        <div className="video-thumbnails">
          <img src="https://i.ytimg.com/vi/S8uwvNf3Jo8/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBbCMC7_uvMVtoS88b0vFTvcANzxA"></img>
          <div className="action_container">
            <button className="btn_icon_thumbnail">
              <WatchLaterIcon
                className="icon_svg"
                width="1.7rem"
                height="1.7rem"
              />
            </button>
            <button className="btn_icon_thumbnail">
              <QueueIcon className="icon_svg" width="1.7rem" height="1.7rem" />
            </button>
          </div>
        </div>
      </a>
      <a className="video-anchor" target="_self" href="#">
        <div className="video-information">
          <Tippy
            delay={[0, 50]}
            offset={[0, 1]}
            arrow={false}
            className="tippy_box"
            content="4 mùa thương em"
            placement="bottom"
          >
            <span className="video-tittle">4 mùa thương em</span>
          </Tippy>
          <Tippy
            delay={[0, 50]}
            offset={[0, 1]}
            arrow={false}
            className="light-gray"
            content="1 9 6 7"
            placement="top-start"
          >
            <span className="video-channel">1 9 6 7</span>
          </Tippy>
          <div className="video-data">
            <span>604 N lượt xem</span>
            <span className="video-time-upload">2 tháng trước</span>
          </div>
        </div>
      </a>

      <div className="menu_action">
        <TippyMenuVideo
          items={items}
          hideOnClick={false}
          placement={"bottom-end"}
          onCreate={(instance) => {
            tippyRef.current = instance;
          }}
        >
          <button
            className={`${activedMenu ? "btn_menu_visibility" : "btn_menu"}`}
            onClick={handleShowMenu}
            onBlur={handleHideMenu}
          >
            <TopbarMenu className={"menu_related_video"} />
          </button>
        </TippyMenuVideo>
      </div>
    </div>
  );
};

export default RelatedVideoItem;

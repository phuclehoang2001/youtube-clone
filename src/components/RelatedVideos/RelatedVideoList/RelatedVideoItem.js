import Tippy from "@tippyjs/react";
import React, { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import "numeral/locales/vi";
import "moment/locale/vi";
import {
  QueueIcon,
  ShareIcon,
  TopbarMenu,
  WatchLaterIcon,
} from "../../Icons/Icons";
import TippyMenuVideo from "../../WatchMetadata/Tippy/TippyMenuVideo";

import { getVideoDetails } from "../../../redux/actions/videos";
const RelatedVideoItem = ({ video }) => {
  const {
    id: { videoId },
    snippet: {
      title,
      channelTitle,
      thumbnails: { medium },
      publishedAt,
    },
  } = video;
  const [activedMenu, setActivedMenu] = useState(false);
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const tippyRef = useRef(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

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

  const formatNumber = (number) => {
    const formattedNumber = numeral(number).format("0,0.0a");
    return formattedNumber;
  };

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
  useEffect(() => {
    getVideoDetails(videoId).then((details) => {
      setDuration(details[0].contentDetails.duration);
      let _views = formatNumber(details[0].statistics.viewCount);
      setViews(_views);
    });
  }, [videoId]);
  return (
    <div className="related-video-item-container">
      <a
        target="_self"
        href={`/watch?v=${videoId}`}
        className="video-compact-render"
      >
        <div className="video-thumbnails">
          <LazyLoadImage
            src={medium.url}
            alt="thumbnail related video"
            effect="blur"
          />

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
        <span className="duration">{_duration}</span>
      </a>
      <a className="video-anchor" target="_self" href={`/watch?v=${videoId}`}>
        <div className="video-information">
          <Tippy
            delay={[0, 50]}
            offset={[0, 1]}
            arrow={false}
            className="tippy_box"
            content={title}
            placement="bottom"
          >
            <span className="video-tittle">{title}</span>
          </Tippy>
          <Tippy
            delay={[0, 50]}
            offset={[-8, 20]}
            arrow={false}
            className="light-gray"
            content={channelTitle}
            placement="top-start"
          >
            <span className="video-channel">{channelTitle}</span>
          </Tippy>
          <div className="video-data">
            <span>{views} lượt xem</span>
            <span className="video-time-upload">
              {moment(publishedAt).fromNow()}
            </span>
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

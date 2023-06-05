import React, { useEffect, useRef, useState } from "react";
import numeral from "numeral";
import moment from "moment";
import "numeral/locales/vi";
import "moment/locale/vi";
import Tippy from "@tippyjs/react";
import ShowMoreText from "react-show-more-text";
import "./WatchMetadata.scss";
import {
  CheckedIcon,
  DisLikedIcon,
  LikeIcon,
  MoreIcon,
  ReportIcon,
  SaveIcon,
  ScriptIcon,
  ShareIcon,
} from "../Icons/Icons";
import TippyMenuVideo from "./Tippy/TippyMenuVideo";
moment.locale("vi");

const WatchMetadata = ({ video, videoId, playlistId }) => {
  const {
    snippet: { channelId, channelTitle, description, title, publishedAt, tags },
    statistics: { viewCount, likeCount },
  } = video;

  const moreButton = useRef(null);
  const expandButton = useRef(null);
  const [isLocaleSet, setIsLocaleSet] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const items = [
    {
      leftIcon: <ReportIcon />,
      title: "Báo cáo vi phạm",
    },
    {
      leftIcon: <ScriptIcon />,
      title: "Hiện thị bản chép lời",
    },
  ];

  const _views = numeral(viewCount).format("0,0.0a");
  const _likeCount = numeral(likeCount).format("0,0a");
  useEffect(() => {
    if (!isLocaleSet) {
      numeral.locales.vi.abbreviations.thousand = " N";
      numeral.locales.vi.abbreviations.million = " Tr";
      numeral.locale("vi");

      setIsLocaleSet(true);
    }
  }, [isLocaleSet]);

  const handleShowMore = () => {
    if (!showMore) {
      setShowMore(true);
    }
  };

  const handleShowLess = () => {
    if (showMore) {
      setShowMore(false);
    }
  };
  useEffect(() => {
    if (showMore) {
      expandButton.current.state.expanded = true;
      expandButton.current.state.truncated = false;
    } else {
      expandButton.current.state.expanded = false;
      expandButton.current.state.truncated = true;
    }
  }, [showMore]);

  return (
    <div className="watch_active_metadata">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="top_row">
        <div className="owner">
          <div className="channel_info">
            <a className="avatar">
              <img src="https://yt3.ggpht.com/5SNxZQaK8yLgStxRuzh_KF0d-aK5-gzj7eXxAwGCwVCCWPKaazju_O_dHjyRUvWoqRc-7kjPaQk=s88-c-k-c0x00ffffff-no-rj" />
            </a>
            <div className="upload_info">
              <div className="channel_name">
                <span>{channelTitle}</span>
                <CheckedIcon />
                {/* tick channel */}

                {/* <div></div>  */}
              </div>
              <span className="owner_sub_count">2,12 Tr người đăng ký</span>
            </div>
            <button className="btn-subscribe action_feedback">Đăng ký</button>
          </div>
        </div>
        <div className="actions">
          <div className="dislay_flex">
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
              content="Tôi thích video này"
              placement="bottom"
            >
              <button className="btn_like action_feedback">
                <LikeIcon />
                <span>{_likeCount}</span>
              </button>
            </Tippy>
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
              content="Tôi không thích video này"
              placement="bottom"
            >
              <button className="btn_dislike action_feedback">
                <DisLikedIcon />
              </button>
            </Tippy>
          </div>
          <div className="display_flex">
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
              content="Chia sẻ"
              placement="bottom"
            >
              <button className="btn_share action_feedback">
                <ShareIcon />
                <span>Chia sẻ</span>
              </button>
            </Tippy>
          </div>
          <div className="display_flex">
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
              content="Lưu"
              placement="bottom"
            >
              <button className="btn_save action_feedback">
                <SaveIcon />
                <span>Lưu</span>
              </button>
            </Tippy>
          </div>
          <div className="display_flex">
            <TippyMenuVideo items={items}>
              <button className="btn_more action_feedback" ref={moreButton}>
                <MoreIcon />
              </button>
            </TippyMenuVideo>
          </div>
        </div>
      </div>

      {/* Container for describe of video*/}
      <div className="bottom_row">
        <div
          className={`container_describe ${showMore ? "active" : ""}`}
          onClick={handleShowMore}
        >
          <div className="header_description">
            <Tippy
              delay={[0, 20]}
              offset={[0, 24]}
              arrow={false}
              className="tippy_box_header"
              content={`${numeral(viewCount).format(
                "0,0.[0000]"
              )} lượt xem  • Đã công chiếu vào ${moment(publishedAt).format(
                "D [thg] M, YYYY"
              )}`}
              placement="bottom-start"
            >
              <div className="inner_description">
                <span>
                  {_views} lượt xem {moment(publishedAt).fromNow()}
                </span>
                <span>
                  #{tags[10]} #{tags[21]}
                </span>
              </div>
            </Tippy>
          </div>
          <ShowMoreText
            lines={2}
            more={"Hiện thêm"}
            less={"Ẩn bớt"}
            anchorClass="btn_show_hide_more"
            expanded={showMore}
            truncatedEndingComponent={"..."}
            keepNewLines={true}
            expandByClick={false}
            ref={expandButton}
            onClick={handleShowLess}
          >
            {description}
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
};

export default WatchMetadata;

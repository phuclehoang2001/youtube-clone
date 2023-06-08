import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  DonateIcon,
  ExpandIcon,
  BellIcon,
} from "../Icons/Icons";
import TippyMenuVideo from "./Tippy/TippyMenuVideo";
import {
  checkSubscriptionStatus,
  getChannelDetailsById,
} from "../../redux/actions/channel";
moment.locale("vi");

const WatchMetadata = ({ video, videoId, playlistId }) => {
  const {
    snippet: { channelId, channelTitle, description, title, publishedAt, tags },
    statistics: { viewCount, likeCount },
  } = video;

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel || {});

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  const dispatch = useDispatch();
  const moreButton = useRef(null);
  const expandButton = useRef(null);
  const [isLocaleSet, setIsLocaleSet] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const items = [
    {
      leftIcon: <SaveIcon />,
      title: "Lưu",
    },
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
  const _subscriberCount = numeral(channelStatistics?.subscriberCount).format(
    "0,0.0a"
  );
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

  useEffect(() => {
    if (showMore) {
      expandButton.current.state.expanded = true;
      expandButton.current.state.truncated = false;
    } else {
      expandButton.current.state.expanded = false;
      expandButton.current.state.truncated = true;
    }
  }, [showMore]);

  useEffect(() => {
    dispatch(getChannelDetailsById(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="watch_active_metadata">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="top_row">
        <div className="owner">
          <div className="channel_info">
            <a className="avatar">
              <img src={channelSnippet?.thumbnails?.default?.url} />
            </a>
            <div className="upload_info">
              <div className="channel_name">
                <span>{channelTitle}</span>
                <Tippy
                  delay={[0, 20]}
                  offset={[0, 18]}
                  arrow={false}
                  className="tippy_box_header"
                  content="Đã xác minh"
                  placement="top"
                >
                  <div className="checked_channel">
                    <CheckedIcon
                      className="checked_icon"
                      width="14px"
                      height="14px"
                    />
                  </div>
                </Tippy>
              </div>
              <span className="owner_sub_count">
                {_subscriberCount} người đăng ký
              </span>
            </div>
            {subscriptionStatus ? (
              <button className="btn-subscribed display_flex action_feedback">
                <BellIcon className="subscribe_bell" />
                <span>Đã đăng ký</span>
                <ExpandIcon className="subscribe_expand" />
              </button>
            ) : (
              <button className="btn-subscribe action_feedback">
                <span>Đăng ký</span>
              </button>
            )}
          </div>
        </div>
        <div className="actions">
          <div className="display_flex">
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
              content="Ủng hộ bằng ảnh động Super Thanks"
              placement="bottom"
            >
              <button className="btn_donate action_feedback">
                <DonateIcon />
                <span>Cảm ơn</span>
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

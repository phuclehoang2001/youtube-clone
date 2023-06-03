import React, { useEffect, useRef, useState } from "react";
import numeral from "numeral";
import moment from "moment";
import "numeral/locales/vi";
import "moment/locale/vi";
import Tippy from "@tippyjs/react";
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
import Button from "../../components/Button/Button";
import TippyMenuVideo from "./Tippy/TippyMenuVideo";
moment.locale("vi");

const WatchMetadata = ({ video, videoId, playlistId }) => {
  const {
    snippet: { channelId, channelTitle, description, title, publishedAt, tags },
    statistics: { viewCount, likeCount },
  } = video;

  const moreButton = useRef(null);
  const [isLocaleSet, setIsLocaleSet] = useState(false);
  const [describe, setDescription] = useState("");
  const [showHideName, setShowHideName] = useState("Hiện thêm");
  const [isShowMore, setIsShowMore] = useState(false);

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

  useEffect(() => {
    setDescription(description.substring(0, 200));
  }, [description]);

  const handleShowHideButton = () => {
    setIsShowMore(!isShowMore);

    if (isShowMore) {
      setDescription(description);
      setShowHideName("Ẩn bớt");
    } else {
      setDescription(description.substring(0, 200));
      setShowHideName("Hiện thêm");
    }
  };

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
            <button className="btn-subscribe">Đăng ký</button>
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
              <button className="btn_like">
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
              <button className="btn_dislike">
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
              <button className="btn_share">
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
              <button className="btn_save">
                <SaveIcon />
                <span>Lưu</span>
              </button>
            </Tippy>
          </div>
          <div className="display_flex">
            <TippyMenuVideo items={items}>
              <button className="btn_more" ref={moreButton}>
                <MoreIcon />
              </button>
            </TippyMenuVideo>
          </div>
        </div>
      </div>

      {/* Container for describe of video*/}
      <div className="bottom_row">
        <div className="container_describe">
          <Tippy
            delay={[0, 50]}
            offset={[0, 18]}
            arrow={false}
            className="tippy_box_header"
            content="25.401 lượt xem  19 thg 5, 2023  #nhaclofi #CryzT #thucuoi"
            placement="bottom"
          >
            <div className="header_description">
              <span>
                {_views} lượt xem {moment(publishedAt).fromNow()}
              </span>
              <span>
                #{tags[10]} #{tags[21]}
              </span>
            </div>
          </Tippy>
          <br></br>
          <span>{describe}</span>
          <Button
            children={showHideName}
            className="btn_show_hide_more"
            onClick={handleShowHideButton}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchMetadata;

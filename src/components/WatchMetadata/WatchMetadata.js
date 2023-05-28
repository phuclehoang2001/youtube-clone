import React, { useEffect, useRef, useState } from "react";
import "./WatchMetadata.scss";
import {
  CheckedIcon,
  DisLikedIcon,
  LeftIcon,
  LikeIcon,
  MoreIcon,
  ReportIcon,
  SaveIcon,
  ScriptIcon,
  ShareIcon,
} from "../Icons/Icons";
import Button from "../../components/Button/Button";
import { Menu as MenuHeader } from "../Popper/Menu";
import Tippy, { tippy } from "@tippyjs/react";
import TippyMenuVideo from "./Tippy/TippyMenuVideo";
const WatchMetadata = () => {
  const moreButton = useRef(null);
  const [describe, setDescription] = useState("");
  const [showHideName, setShowHideName] = useState("Hiện thêm");
  const [isShowMore, setIsShowMore] = useState(false);
  const [data, setData] = useState("");
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
  useEffect(() => {
    const data = `
            Có lẽ nào em vội quên đi...Thu Cuối Lofi - Nhạc Lofi 2023 - Những Bản Nhạc Lofi Chill Nhẹ Nhàng Hay Nhất
            #thucuoi #nhaclofi #CryzT
            Nguồn ảnh: Sưu tầm
            🎵 Nghe Playlist Nhạc Lofi: https://wmm.ink/3zKWdxZ
            ----------------------------------------------------------
            🎵 Tracklist:
            [00:00:00]  01  Thu Cuối - Mr.T ft Yanbi & Hằng Bingboong
            [00:05:06]  02  Sao Cũng Được - Thành Đạt
            [00:10:23]  03  Con Tim Không Đổi Thay - Dee Trần
            [00:14:04]  04  Đừng Lo Nhé Có Anh Đây - Thiên Tú
            [00:17:38]  05  Thuyền Quyên - Diệu Kiên
            [00:20:45]  06  Đào Nương - Hoàng Vương
            [00:24:11]  07  Người Thương Em Là Ai - Đình Dũng
            [00:28:07]  08  Xin Đừng Chạm Vào Anh - Duy Manh
            [00:32:31]  09  Người Ta - Đoàn Khánh Linh
            [00:36:13]  10  Nếu Phải Mất Nhau - Đình Dũng
            [00:39:59]  11  Chỉ Vì Quá Yêu Em - Huy Vạc
            [00:43:43]  12  Duyên Vô Phận - Jin Tuấn Nam x Yankid x G-one
            [00:47:42]  13  Anh Vẫn Ở Đây - Thành Đạt x Vux
            [00:52:03]  14  Đổi Dạ - TVK x Phát Lee
            [00:56:09]  15  Tay Bế Tay Bồng - Thái Học
            ----------------------------------------------------------
            ✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@wmmusic.net

            ► Đăng ký kênh: https://bit.ly/cryzt
            ► Website: https://wmmusic.net
            ► Fanpage: https://www.facebook.com/wmmusicc.net

            © Copyright Cryz T
            © Copyright by Cryz T & WM Media ☞ Do not Reup`;
    setData(data);
    setDescription(data.substring(0, 200));
  }, []);

  const handleShowHideButton = () => {
    setIsShowMore(!isShowMore);

    if (isShowMore) {
      setDescription(data);
      setShowHideName("Ẩn bớt");
    } else {
      setDescription(data.substring(0, 200));
      setShowHideName("Hiện thêm");
    }
  };

  return (
    <div className="watch_active_metadata">
      <div className="title">
        <h1>Mình từng suýt gạt tay trúng má trấn thành</h1>
      </div>
      <div className="top_row">
        <div className="owner">
          <div className="channel_info">
            <a className="avatar">
              <img src="https://yt3.ggpht.com/5SNxZQaK8yLgStxRuzh_KF0d-aK5-gzj7eXxAwGCwVCCWPKaazju_O_dHjyRUvWoqRc-7kjPaQk=s88-c-k-c0x00ffffff-no-rj" />
            </a>
            <div className="upload_info">
              <div className="channel_name">
                <span>JV</span>
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
              className="tippy_box"
              content="Tôi thích video này"
              placement="bottom"
            >
              <button className="btn_like">
                <LikeIcon />
                <span>Thích</span>
              </button>
            </Tippy>
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box"
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
              className="tippy_box"
              content="Chia sẻ"
              placement="bottom"
            >
              <button className="btn_share">
                <ShareIcon />
                <span>Chia sẻ</span>
              </button>
            </Tippy>
          </div>
          <div className="display_Flex">
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box"
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
            className="tippy_box"
            content="25.401 lượt xem  19 thg 5, 2023  #nhaclofi #CryzT #thucuoi"
            placement="bottom"
          >
            <span className="header_description">
              25.401 lượt xem 19 thg 5, 2023 #nhaclofi #CryzT #thucuoi
            </span>
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

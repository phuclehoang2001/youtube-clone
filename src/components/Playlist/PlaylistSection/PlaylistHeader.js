import React from "react";
import {
  CloseIcon,
  ExpandIcon,
  TopbarMenu,
  AddPlaylist,
} from "../../../components/Icons";
import { Menu as MenuPlaylist } from "../../Popper/Menu";

const PlaylistHeader = ({ handleShowPlaylist, showMore }) => {
  const MENU_ITEMS_PLAYLIST = [
    {
      leftIcon: <AddPlaylist />,
      title: "Lưu danh sách phát vào thư viện",
    },
  ];

  const handleMenuPlaylist = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      id="header"
      className={`playlist_header ${!showMore ? "collapsed" : ""}`}
      onClick={handleShowPlaylist}
    >
      <div className="header_top">
        <div className="header_description">
          {showMore ? (
            <h3 className="title_playlist">
              Danh sách kết hợp – [VIETNAMDOC - DVG] Lắng Nghe Ta Nói - Mr.shyn
              - McTee - Tea - Roy P
            </h3>
          ) : (
            <h3 className="next_video_playlist">
              <span>Tiếp theo:</span>
              <span>Đen - Nấu ăn cho em ft. PiaLinh (M/V)</span>
            </h3>
          )}

          <span className="publisher_playlist">
            Mixes are playlists Youtube makes for you
          </span>
        </div>
        <button className="expand_btn">
          {showMore ? <CloseIcon /> : <ExpandIcon />}
        </button>
      </div>
      {showMore && (
        <div className="playlist_actions">
          <MenuPlaylist items={MENU_ITEMS_PLAYLIST} offset={[0, 0]}>
            <button className="menu_playlist_btn" onClick={handleMenuPlaylist}>
              <TopbarMenu />
            </button>
          </MenuPlaylist>
        </div>
      )}
    </div>
  );
};

export default PlaylistHeader;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TopbarMenu, OverlayPlaylist, PlayIcon } from "../../Icons";
import "./PlaylistGrid.scss";
const PlaylistGrid = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      title,
      channelTitle,
      thumbnails: { medium },
    },
  } = video;
  return (
    <div className="playlist_container">
      <a
        className="playlist_thumbnail"
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
      >
        {/* <img src={medium.url} alt="thumbnail" /> */}
        <LazyLoadImage src={medium.url} alt="thumbnail" effect="blur" />
        <div className="overlays" id="playlist">
          <div className="thumbnail_overlay">
            <div className="thumbnail_overlay_icon">
              <OverlayPlaylist />
            </div>
          </div>
        </div>
        <div className="overlay_hover">
          <div className="overlay_hover_icon">
            <PlayIcon />
          </div>
          <span className="overlay_hover_text">Phát tất cả</span>
        </div>
      </a>

      <div className="playlist_details">
        <div className="playlist_metadata">
          <h3 className="title">
            <a href="#">Danh sách kết hợp – {title}</a>
          </h3>
          <div className="channel_playlist">
            <span>{channelTitle}</span>
          </div>
          <div className="video_menu_grid">
            <TopbarMenu className="menu_video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistGrid;

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
      thumbnails: { maxres, medium },
    },
    playlistItems,
  } = video;

  const thumbnailURL = maxres ? maxres : medium;

  // lấy videoId của video đầu tiền trong playlist
  const firstVideo = playlistItems.items[0];
  const {
    snippet: {
      resourceId: { videoId },
    },
  } = firstVideo;

  return (
    <div className="playlist_container">
      <a
        className="playlist_thumbnail"
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
        href={`/watch?v=${videoId}&list=${id}&start_radio=1`}
      >
        <LazyLoadImage src={thumbnailURL.url} alt="thumbnail" effect="blur" />
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
            <a href={`/watch?v=${videoId}&list=${id}&start_radio=1`}>
              Danh sách kết hợp – {title}
            </a>
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

import React from "react";
import "./Video.scss";
const Video = () => {
  return (
    <div className="video_container">
      <div className="video_thumbnail">
        <img
          src="https://i.ytimg.com/vi/NUtoFscKUFU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5oefP0lt8PB1iW-cpYQVhnqIo-w"
          alt="thumbnail"
        />
        <span className="duration">12:30</span>
      </div>

      <div className="video_details">
        <div className="avatar">
          <img
            src="https://yt3.ggpht.com/ytc/AGIKgqP2ZDMDaAb547oJ7sq1Np9MxCgCqTkKglqFJ1afFg=s68-c-k-c0x00ffffff-no-rj"
            alt="thumbnail"
          />
        </div>
        <div className="video_metadata">
          {/* Gặp vấn đề khi title quá dài */}
          <h3 className="title">
            <a href="#">Thử thách cắm trại sa mạc 50H</a>
          </h3>
          <div className="additional_medata">
            <div className="channel_name">
              <a href="#">Lâm Vlog</a>
            </div>
            <div className="metadata_line">
              <span className="view_count metadata_line_item">
                5,3 Tr lượt xem
              </span>
              <span className="publication_date metadata_line_item">
                1 năm trước
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

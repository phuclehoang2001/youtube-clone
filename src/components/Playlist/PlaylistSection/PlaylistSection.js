import React from "react";
import "./Playlist.scss";
const PlaylistSection = ({ children }) => {
  return (
    <div className="playlist_section">
      <div className="playlist_section_scroll">{children}</div>
    </div>
  );
};

export default PlaylistSection;

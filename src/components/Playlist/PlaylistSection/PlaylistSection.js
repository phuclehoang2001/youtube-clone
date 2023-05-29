import React from "react";
import "./Playlist.scss";
const PlaylistSection = ({ children }) => {
  return (
    <div className="playlist_section">
      <nav>{children}</nav>
    </div>
  );
};

export default PlaylistSection;

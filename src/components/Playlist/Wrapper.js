import React, { useState } from "react";
import { PlaylistSection } from "./PlaylistSection/index";
import PlaylistItem from "./PlaylistSection/PlaylistItem";
import PlaylistHeader from "./PlaylistSection/PlaylistHeader";
import "./Wrapper.scss";
const Wrapper = () => {
  const [showMore, setShowMore] = useState(true);
  const handleShowPlaylist = () => {
    setShowMore((value) => !value);
  };
  return (
    <div className={`wrapper_playlist ${!showMore ? "shrink" : ""}`}>
      <PlaylistHeader
        handleShowPlaylist={handleShowPlaylist}
        showMore={showMore}
      />
      {showMore && (
        <PlaylistSection>
          {[...Array(7)].map((_, index) => (
            <PlaylistItem key={index} />
          ))}
        </PlaylistSection>
      )}
    </div>
  );
};

export default Wrapper;

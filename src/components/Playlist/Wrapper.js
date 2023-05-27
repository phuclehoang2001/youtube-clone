import React, { useState } from "react";
import PlaylistSection from "./PlaylistSection";
import PlaylistItem from "./PlaylistSection/PlaylistItem";
import "./Wrapper.scss";
import PlaylistHeader from "./PlaylistSection/PlaylistHeader";
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
          {[...Array(15)].map((_, index) => (
            <PlaylistItem key={index} />
          ))}
        </PlaylistSection>
      )}
    </div>
  );
};

export default Wrapper;

import React, { useEffect, useState } from "react";
import { PlaylistSection } from "./PlaylistSection/index";
import PlaylistItem from "./PlaylistSection/PlaylistItem";
import PlaylistHeader from "./PlaylistSection/PlaylistHeader";
import { useDispatch, useSelector } from "react-redux";
import { getItemsByPlaylistId } from "../../redux/actions/playlists";
import "./Wrapper.scss";
const Wrapper = ({ playlistId, activedPlaylistItem }) => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(true);
  const handleShowPlaylist = () => {
    setShowMore((value) => !value);
  };

  const { playlistItems, loading: loadingPlaylistItems } = useSelector(
    (state) => state.videoPlaylistItems
  );

  useEffect(() => {
    dispatch(getItemsByPlaylistId(playlistId));
  }, [dispatch]);

  return (
    <div className={`wrapper_playlist ${!showMore ? "shrink" : ""}`}>
      <PlaylistHeader
        handleShowPlaylist={handleShowPlaylist}
        showMore={showMore}
      />
      {showMore && !loadingPlaylistItems && (
        <PlaylistSection>
          {playlistItems.map((playlistItem) => {
            const {
              snippet: { position },
            } = playlistItem;
            let index = position + 1;
            return (
              <PlaylistItem
                key={playlistItem.id}
                item={playlistItem}
                active={activedPlaylistItem - 1 === position}
                index={index}
              />
            );
          })}
        </PlaylistSection>
      )}
    </div>
  );
};

export default Wrapper;

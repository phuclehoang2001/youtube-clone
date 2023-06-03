import React, { useEffect } from "react";
import "./VideoPage.scss";
import WatchMetadata from "../../components/WatchMetadata/WatchMetadata";
import { Wrapper as CommentsWrapper } from "../../components/Comments";
import { Wrapper as RelatedVideosWrapper } from "../../components/RelatedVideos";
import { Wrapper as PlaylistWrapper } from "../../components/Playlist";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get("v");
  const playlistId = new URLSearchParams(location.search).get("list");
  let start = new URLSearchParams(location.search).get("start_radio");
  let index = new URLSearchParams(location.search).get("index");
  let activedPlaylistItem = 0;
  if (start) activedPlaylistItem = start--;
  if (index) activedPlaylistItem = index--;
  return (
    <div className="wrapper_video_content">
      <div className="columns">
        <div className="primary_content">
          <div className="primary_inner">
            <div className="screen_player">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="below">
              {/* component WatchMetadata */}
              <WatchMetadata />
              {/* component Comment */}
              <CommentsWrapper />
            </div>
          </div>
        </div>
        <div className="secondary_content">
          <div className="secondary_inner">
            {playlistId && (
              <PlaylistWrapper
                playlistId={playlistId}
                activedPlaylistItem={activedPlaylistItem}
              />
            )}

            <RelatedVideosWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

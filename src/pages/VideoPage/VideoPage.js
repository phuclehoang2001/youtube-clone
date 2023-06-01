import React from "react";
import "./VideoPage.scss";
import WatchMetadata from "../../components/WatchMetadata/WatchMetadata";
import { Wrapper as CommentsWrapper } from "../../components/Comments";
import { Wrapper as RelatedVideosWrapper } from "../../components/RelatedVideos";
import { Wrapper as PlaylistWrapper } from "../../components/Playlist";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const VideoPage = () => {
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get("v");
  const playlistId = new URLSearchParams(location.search).get("list");

  const { playlists, loading: loadingPlaylists } = useSelector(
    (state) => state.homePlaylists
  );
  console.log(playlists);
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
            <PlaylistWrapper />
            <RelatedVideosWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

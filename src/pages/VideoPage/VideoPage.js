import React from "react";
import "./VideoPage.scss";
import WatchMetadata from "../../components/WatchMetadata/WatchMetadata";
import { Wrapper as CommentsWrapper } from "../../components/Comments";
import { useParams } from "react-router-dom";
const VideoPage = () => {
  const { videoId } = useParams();
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
          <div className="secondary_inner"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

import React from "react";
import "./VideoScreen.scss";
import WatchMetadata from "../../components/WatchMetadata/WatchMetadata";
import { Wrapper as CommentsWrapper } from "../../components/Comments";
const VideoScreen = () => {
  return (
    <div className="wrapper_video_content">
      <div className="columns">
        <div className="primary_content">
          <div className="primary_inner">
            <div className="player"></div>
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

export default VideoScreen;

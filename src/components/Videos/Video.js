import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import numeral from "numeral";
import "numeral/locales/vi";
import "moment/locale/vi";

import { getVideoDetails, getChannelDetails } from "../../redux/actions/videos";
import "./Video.scss";
moment.locale("vi");
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      publishedAt,
      channelId,
      title,
      channelTitle,
      thumbnails: { medium },
    },
  } = video;
  const [isLocaleSet, setIsLocaleSet] = useState(false);
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelAvatar, setchannelAvatar] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const _videoId = id?.videoId || id;

  const playerRef = useRef();

  const formatNumber = (number) => {
    const formattedNumber = numeral(number).format("0,0.0a");
    return formattedNumber;
  };
  useEffect(() => {
    if (!isLocaleSet) {
      numeral.locales.vi.abbreviations.thousand = " N";
      numeral.locales.vi.abbreviations.million = " Tr";
      numeral.locale("vi");

      setIsLocaleSet(true);
    }
  }, [isLocaleSet]);

  useEffect(() => {
    getVideoDetails(_videoId).then((details) => {
      setDuration(details[0].contentDetails.duration);
      let _views = formatNumber(details[0].statistics.viewCount);
      setViews(_views);
    });
  }, [_videoId]);

  useEffect(() => {
    getChannelDetails(channelId).then((details) => {
      setchannelAvatar(details[0].snippet.thumbnails.default);
    });
  }, [channelId]);

  const onMouseOver = () => {
    // console.log("playerRef", playerRef);
  };

  const onMouseOut = () => {};
  return (
    <div className="video_container">
      <div
        className="video_thumbnail"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <img src={medium.url} alt="thumbnail" />
        <div className="preview_video">
          {/* <iframe
            ref={playerRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UIX0DSaNOjI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </div>

        <span className="duration">{_duration}</span>
      </div>

      <div className="video_details">
        <div className="avatar">
          <img src={channelAvatar?.url} alt="avatar channel" />
        </div>
        <div className="video_metadata">
          <h3 className="title">
            <a href="#">{title}</a>
          </h3>
          <div className="additional_medata">
            <div className="channel_name">
              <a href="#">{channelTitle}</a>
            </div>
            <div className="metadata_line">
              <span className="view_count metadata_line_item">
                {views} lượt xem
              </span>
              <span className="publication_date metadata_line_item">
                {moment(publishedAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

import React from "react";
import "./WatchMetadata.scss";
import { CheckedIcon } from "../Icons/Icons";

const WatchMetadata = () => {
  return (
    <div className="watch_active_metadata">
      <div className="title">
        <h1>Mình từng suýt gạt tay trúng má trấn thành</h1>
      </div>
      <div className="top_row">
        <div className="owner">
          <div className="channel_info">
            <a className="avatar">
              <img src="https://yt3.ggpht.com/5SNxZQaK8yLgStxRuzh_KF0d-aK5-gzj7eXxAwGCwVCCWPKaazju_O_dHjyRUvWoqRc-7kjPaQk=s88-c-k-c0x00ffffff-no-rj" />
            </a>
            <div className="upload_info">
              <div className="channel_name">
                <span>JV</span>
                <CheckedIcon />
                {/* tick channel */}

                {/* <div></div>  */}
              </div>
              <span className="owner_sub_count">2,12 Tr người đăng ký</span>
            </div>
          </div>
          <button className="btn-subcribe">Đăng ký</button>
        </div>
        <div className="actions"></div>
      </div>
      <div className="bottom_row"></div>
    </div>
  );
};

export default WatchMetadata;

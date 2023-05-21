import React from "react";
import {
  ReplyCommment,
  TopbarMenu,
  LikeIcon,
  DislikeIcon,
  TickChannel,
} from "../../Icons/Icons";
const CommentItem = () => {
  return (
    <div className="comment_item">
      <div className="comment_thread">
        <div className="author_thumbnail">
          <img
            src="https://yt3.ggpht.com/P64wDmA6-bXrTyhVM0lN0oS14E5Mfko5wV_XDC98DMZFiuyP4EktqrqxOewv3NPqn0u_PpJ7D_Q=s88-c-k-c0x00ffffff-no-rj"
            alt="avatar user"
          />
        </div>
        <div id="main" className="comment_render">
          <div id="header" className="comment_render">
            <div id="header_author" className="comment_render">
              <div id="header_comment_badge" className="comment_render">
                <a className="channel_name">Đen Vâu Offical</a>
                <TickChannel />
              </div>
              <div id="header_comment_publish_date" className="comment_render">
                <a>7 ngày trước</a>
              </div>
            </div>
          </div>
          <div id="comment_content" className="comment_render"></div>
          <div id="actions" className="comment_render">
            <div className="toolbar">
              <button className="btn_like">
                <LikeIcon />
              </button>
              <span className="vote_count_middle">3,2 N</span>
              <button className="btn_dislike">
                <DislikeIcon />
              </button>
            </div>
          </div>
        </div>
        <div id="action_menu">
          <TopbarMenu />
        </div>
      </div>
      <div className="replies">
        <div className="expander">
          <div className="btn_more">
            <button>
              <ReplyCommment />
              <span>400 phản hồi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

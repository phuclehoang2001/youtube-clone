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
        <a
          href="https://www.youtube.com/channel/UCWu91J5KWEj1bQhCBuGeJxw"
          className="comment_channel"
        >
          <div className="author_thumbnail">
            <img
              src="https://yt3.ggpht.com/P64wDmA6-bXrTyhVM0lN0oS14E5Mfko5wV_XDC98DMZFiuyP4EktqrqxOewv3NPqn0u_PpJ7D_Q=s88-c-k-c0x00ffffff-no-rj"
              alt="avatar user"
            />
          </div>
        </a>
        <div id="main" className="comment_render">
          <div id="header" className="comment_render">
            <div id="header_author" className="comment_render">
              <div id="header_comment_badge" className="comment_render">
                <a
                  href="https://www.youtube.com/channel/UCWu91J5KWEj1bQhCBuGeJxw"
                  className="channel_name"
                >
                  Đen Vâu Offical
                </a>
                <div className="channel_tick">
                  <TickChannel className={"icon"} />
                </div>
              </div>
              <div id="header_comment_publish_date" className="comment_render">
                <a href="http://localhost:3000/watch/1414">7 ngày trước</a>
              </div>
            </div>
          </div>
          <div id="comment_content" className="comment_render">
            <span>
              Cảm ơn ca sĩ Đen Vâu và ekip vì 1 sp nghệ thuật rất hay, xúc động,
              góp phần lan tỏa những thông điệp ý nghĩa trong cuộc sống. Yêu
              thích rất nhiều ❤
            </span>
          </div>
          <div id="actions" className="comment_render">
            <div className="toolbar">
              <button className="btn_like comment_action_render">
                <LikeIcon />
              </button>
              <span className="vote_count_middle">3,2 N</span>
              <button className="btn_dislike comment_action_render">
                <DislikeIcon />
              </button>
            </div>
          </div>
        </div>
        <div id="action_menu" className="comment_render">
          <button className="btn_menu_comment">
            <TopbarMenu className={"menu_comment"} />
          </button>
        </div>
      </div>
      <div className="replies">
        <div id="expander" className="comment_render">
          <div className="more_replies">
            <button className="btn_expand_comment">
              <ReplyCommment
                width="24px"
                height="24px"
                className="reply_comment"
              />
              <span>400 phản hồi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

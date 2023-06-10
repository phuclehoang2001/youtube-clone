import React from "react";
import ShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import "numeral/locales/vi";
import "moment/locale/vi";
import {
  ReplyCommment,
  TopbarMenu,
  LikeIcon,
  DislikeIcon,
  TickChannel,
} from "../../Icons/Icons";
const CommentItem = ({ comment }) => {
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    likeCount,
  } = comment;

  const _likeCount = numeral(likeCount).format("0,0.[0]a");

  return (
    <div className="comment_item">
      <div className="comment_thread">
        <a
          href="https://www.youtube.com/channel/UCWu91J5KWEj1bQhCBuGeJxw"
          className="comment_channel"
        >
          <div className="author_thumbnail">
            <img src={authorProfileImageUrl} alt="avatar user" />
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
                  {authorDisplayName}
                </a>
                <div className="channel_tick">
                  <TickChannel className={"icon"} />
                </div>
              </div>
              <div id="header_comment_publish_date" className="comment_render">
                <a href="http://localhost:3000/watch/1414">
                  {moment(publishedAt).fromNow()}
                </a>
              </div>
            </div>
          </div>
          <div id="comment_content" className="comment_render">
            <ShowMoreText
              lines={3}
              more={"Đọc thêm"}
              less={"Ẩn bớt"}
              anchorClass="btn_show_hide_comment"
              expanded={false}
              truncatedEndingComponent={"..."}
              keepNewLines={true}
              expandByClick={true}
            >
              {textDisplay}
            </ShowMoreText>
          </div>
          <div id="actions" className="comment_render">
            <div className="toolbar">
              <button className="btn_like comment_action_render">
                <LikeIcon />
              </button>
              {likeCount > 0 ? (
                <span className="vote_count_middle">{_likeCount}</span>
              ) : (
                ""
              )}

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

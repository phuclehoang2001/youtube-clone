import React from "react";
import ShowMoreText from "react-show-more-text";
import Tippy from "@tippyjs/react";
import numeral from "numeral";
import moment from "moment";
import "numeral/locales/vi";
import "moment/locale/vi";
import {
  TopbarMenu,
  LikeIcon,
  DislikeIcon,
  TickChannel,
} from "../../Icons/Icons";
const CommentThread = ({ snippet, canReply, reply = false }) => {
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    likeCount,
    authorChannelUrl,
  } = snippet;
  const _likeCount = numeral(likeCount).format("0,0.[0]a");
  return (
    <div className="comment_thread">
      <a href={authorChannelUrl} className="comment_channel">
        <div className={`author_thumbnail ${reply ? "reply_comment" : ""}`}>
          <img src={authorProfileImageUrl} alt="avatar user" />
        </div>
      </a>
      <div id="main" className="comment_render">
        <div id="header" className="comment_render">
          <div id="header_author" className="comment_render">
            <div id="header_comment_badge" className="comment_render">
              <a href={authorChannelUrl} className="channel_name">
                {authorDisplayName}
              </a>
              {/* <div className="channel_tick">
                  <TickChannel className={"icon"} />
                </div> */}
            </div>
            <div id="header_comment_publish_date" className="comment_render">
              <a href={authorChannelUrl}>{moment(publishedAt).fromNow()}</a>
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
            <Tippy
              delay={[0, 20]}
              offset={[0, 16]}
              arrow={false}
              className="tippy_box_header"
              content="Thích"
              placement="bottom"
            >
              <button className="btn_like comment_action_render">
                <LikeIcon />
              </button>
            </Tippy>

            {likeCount > 0 ? (
              <span className="vote_count_middle">{_likeCount}</span>
            ) : (
              ""
            )}
            <Tippy
              delay={[0, 20]}
              offset={[0, 16]}
              arrow={false}
              className="tippy_box_header"
              content="Không thích"
              placement="bottom"
            >
              <button className="btn_dislike comment_action_render">
                <DislikeIcon />
              </button>
            </Tippy>
            {canReply && (
              <button className="btn_reply">
                <div className="btn_reply_text">
                  <span>Phản hồi</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      <div id="action_menu" className="comment_render">
        <button className="btn_menu_comment">
          <TopbarMenu className={"menu_comment"} />
        </button>
      </div>
    </div>
  );
};

export default CommentThread;

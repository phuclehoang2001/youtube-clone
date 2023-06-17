import React from "react";

import CommentThread from "./CommentThread";
import { ReplyCommment } from "../../Icons/Icons";
const CommentItem = ({ comment }) => {
  const {
    canReply,
    totalReplyCount,
    isPublic,
    topLevelComment: { snippet },
  } = comment;

  return (
    <div className="comment_item">
      <CommentThread snippet={snippet} canReply={canReply} />
      {isPublic && totalReplyCount > 0 ? (
        <div className="replies">
          <div id="expander" className="comment_render">
            <div className="more_replies">
              <button className="btn_expand_comment">
                <ReplyCommment
                  width="24px"
                  height="24px"
                  className="reply_comment"
                />
                <span>{totalReplyCount} phản hồi</span>
              </button>
            </div>
            <div className="reply_contents">
              <CommentThread
                snippet={snippet}
                canReply={canReply}
                reply={true}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentItem;

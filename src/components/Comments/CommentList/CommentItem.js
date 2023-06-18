import React, { useState, useEffect } from "react";
import CommentThread from "./CommentThread";
import {
  ReplyCommment,
  HideReplyCommment,
  ExpandReplyCommment,
  LoadingIcon,
} from "../../Icons/Icons";
import { getReplies } from "../../../redux/actions/comments";

const CommentItem = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [pageToken, setPageToken] = useState("");
  const [replies, setReplies] = useState([]);
  const {
    canReply,
    totalReplyCount,
    isPublic,
    topLevelComment: { id, snippet },
  } = comment;

  const handleGetReplies = () => {
    setShowReplies((value) => !value);
  };

  const handleGetMoreReplies = () => {
    setLoadingReplies(true);
    getRepliesAPI(id, pageToken);
  };

  const getRepliesAPI = (commentId) => {
    getReplies(commentId, pageToken).then((data) => {
      const nextPageToken = data.nextPageToken;
      const items = data.items.reverse();
      setPageToken(nextPageToken);
      setReplies((preState) => {
        return [...preState, ...items];
      });
      setLoadingReplies(false);
    });
  };

  // hiện replies lần đầu
  useEffect(() => {
    if (showReplies && replies.length === 0) {
      setLoadingReplies(true);
      getRepliesAPI(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showReplies, id, replies.length]);

  return (
    <div className="comment_item">
      <CommentThread snippet={snippet} canReply={canReply} />
      {isPublic && totalReplyCount > 0 ? (
        <div className="replies">
          <div id="expander" className="comment_render">
            <div className="more_replies">
              <button className="btn_expand_comment" onClick={handleGetReplies}>
                {!showReplies ? (
                  <ReplyCommment
                    width="24px"
                    height="24px"
                    className="reply_comment"
                  />
                ) : (
                  <HideReplyCommment
                    width="24px"
                    height="24px"
                    className="reply_comment"
                  />
                )}

                <span>{totalReplyCount} phản hồi</span>
              </button>
            </div>
            {showReplies && (
              <div className="reply_contents">
                {replies.map((reply) => (
                  <CommentThread
                    snippet={reply.snippet}
                    canReply={canReply}
                    reply={true}
                    key={reply.id}
                  />
                ))}
                {loadingReplies && (
                  <div className="loading">
                    <LoadingIcon width="2rem" height="2rem" />
                  </div>
                )}

                {totalReplyCount > replies.length && !loadingReplies && (
                  <button
                    className="btn_expand_comment"
                    onClick={handleGetMoreReplies}
                  >
                    <ExpandReplyCommment
                      width="24px"
                      height="24px"
                      className="reply_comment"
                    />
                    <span>Hiện thêm phản hồi</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentItem;

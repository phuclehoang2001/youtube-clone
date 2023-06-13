import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Wrapper.scss";
import CommentList from "./CommentList/";
import CommentItem from "./CommentList/CommentItem";
import CommentHeader from "./CommentList/CommentHeader";
import { getCommentsOfVideoById } from "../../redux/actions/comments";

const Wrapper = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const { comments, loading } = useSelector((state) => state.commentList);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  return (
    <div className="wrapper_comments">
      <CommentList>
        <CommentHeader totalComments={totalComments} videoId={videoId} />
        {!loading ? (
          <>
            {_comments?.map((comment, index) => (
              <CommentItem comment={comment} key={index} />
            ))}
          </>
        ) : (
          <h1>Loading comments....</h1>
        )}
      </CommentList>
    </div>
  );
};

export default Wrapper;

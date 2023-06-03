import React from "react";
import "./Wrapper.scss";
import CommentList from "./CommentList/";
import CommentItem from "./CommentList/CommentItem";
import CommentHeader from "./CommentList/CommentHeader";

const Wrapper = ({ videoId }) => {
  return (
    <div className="wrapper_comments">
      <CommentList>
        <CommentHeader />
        {[...Array(15)].map((_, index) => (
          <CommentItem key={index} />
        ))}
      </CommentList>
    </div>
  );
};

export default Wrapper;

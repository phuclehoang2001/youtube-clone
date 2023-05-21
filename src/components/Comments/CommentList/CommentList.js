import React from "react";
import "./Comment.scss";
const CommentList = ({ children }) => {
  return <div className="comments_section">{children}</div>;
};

export default CommentList;

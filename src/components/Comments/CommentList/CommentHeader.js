import React, { useState, useEffect } from "react";
import { ShapeIcon, SortIcon } from "../../Icons/Icons";

const CommentHeader = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleFocus = () => {
    setCommentBox(true);
  };

  const handleUnFocus = () => {
    setCommentBox(false);
    setComment("");
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  useEffect(() => {
    if (comment.length >= 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [comment]);

  return (
    <div className="header_comment">
      <div className="header_comment_title">
        <h2 className="count comment_header_renderer">800 bình luận</h2>
        <div className="sort_menu comment_header_renderer">
          <SortIcon className={"dropdown_menu"} />
          <span>Sắp xếp theo</span>
        </div>
      </div>
      <div className="simple_box">
        <div className="author_thumbnail">
          <img
            src="https://yt3.ggpht.com/FID9udkB2vTqIte2w003UhOkJdjGNEaPoFLcCQNXm3gcum0AtFZBVQG-MVIeC0B_vIWmd1NIpw=s88-c-k-c0x00ffffff-no-rj"
            alt="avatar user"
          />
        </div>
        <div className="author_comment">
          <div className="input_container">
            <input
              type="text"
              placeholder="Viết bình luận..."
              value={comment}
              onFocus={handleFocus}
              onChange={handleInputChange}
            />
          </div>
          {commentBox ? (
            <div className="comment_box">
              <button className="btn_shape">
                <ShapeIcon />
              </button>
              <div className="actions">
                <div className="btn_action cancel">
                  <button onClick={handleUnFocus}>Hủy</button>
                </div>
                <div className="btn_action submit">
                  <button
                    disabled={isDisabled}
                    onClick={handleClick}
                    className={isDisabled ? "hide" : "unhide"}
                  >
                    Bình luận
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentHeader;

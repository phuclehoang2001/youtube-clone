import React, { useState, useEffect, useRef } from "react";
import { ShapeIcon, SortIcon } from "../../Icons/Icons";
import EmojiComment from "../EmojiComment";

const CommentHeader = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const inputRef = useRef(null);
  const tippyInstance = useRef(null);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleInputFocus = () => {
    setCommentBox(true);
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  //Khi nhấn nút "hủy"
  const handleCancel = () => {
    setCommentBox(false);
    setComment("");
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  //Thêm emoji vào bình luận
  const onEmojiClick = (emojiData, event) => {
    setComment((value) => value + emojiData.emoji);
    inputRef.current.focus();
  };

  //xử lý disable nút "bình luận" khi có comment hoặc không có comment
  useEffect(() => {
    if (comment.length >= 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [comment]);

  useEffect(() => {
    console.log("input focus:", isFocused);
  }, [isFocused]);

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
              ref={inputRef}
              value={comment}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </div>
          {commentBox ? (
            <div className="comment_box">
              <EmojiComment
                onEmojiClick={onEmojiClick}
                onCreate={(instance) => {
                  tippyInstance.current = instance;
                }}
              >
                <button className="btn_shape">
                  <ShapeIcon />
                </button>
              </EmojiComment>
              <div className="actions">
                <div className="btn_action">
                  <button onClick={handleCancel} className="cancel">
                    Hủy
                  </button>
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

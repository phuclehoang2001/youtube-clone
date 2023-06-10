import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import numeral from "numeral";
import "numeral/locales/vi";
import Tippy from "@tippyjs/react";
import TippyMenuVideo from "../../WatchMetadata/Tippy/TippyMenuVideo";
import { ShapeIcon, SortIcon } from "../../Icons/Icons";
import EmojiComment from "../EmojiComment";
import { login } from "../../../redux/actions/auth";
import { addComment } from "../../../redux/actions/comments";

const CommentHeader = ({ totalComments, videoId }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);
  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [activedMenuSort, setActivedMenuSort] = useState(false);

  //Sắp xếp theo...
  // Hiện comment gần nhất

  const MENU_ITEMS_SORT = [
    {
      title: "Bình luận hàng đầu",
    },
    {
      title: "Mới nhất xếp trước",
    },
  ];

  const inputRef = useRef(null);
  const sortRef = useRef(null);
  const tippyInstance = useRef(null);
  const wrapperEmojiRef = useRef(null);
  const dispatch = useDispatch();

  const { accessToken, user } = useSelector((state) => state.auth);

  const handleComment = (event) => {
    event.preventDefault();
    dispatch(addComment(videoId, comment));
    setComment("");
  };

  const handleInputFocus = (event) => {
    if (!commentBox) {
      if (accessToken === null) {
        dispatch(login());
        event.preventDefault();
      } else {
        setCommentBox(true);
      }
    }
  };

  const handleButtonClick = () => {
    setShowEmoji((value) => !value);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (event.target === inputRef.current) {
            return;
          }
          if (
            tippyInstance.current.popper.childNodes[0].contains(event.target)
          ) {
            return;
          }
          setShowEmoji(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(wrapperEmojiRef);

  //Khi nhấn nút "hủy"
  const handleCancel = () => {
    setCommentBox(false);
    setComment("");
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleShowMenu = () => {
    setActivedMenuSort(true);
  };

  const handleHideMenu = () => {
    setActivedMenuSort(false);
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

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  useEffect(() => {
    if (!activedMenuSort) {
      sortRef.current.hide();
    } else {
      document.addEventListener("wheel", preventScroll, { passive: false });
    }
    return () => {
      document.removeEventListener("wheel", preventScroll);
    };
  }, [activedMenuSort]);

  useEffect(() => {
    if (tippyInstance.current) {
      if (!tippyInstance.current.state.isVisible && showEmoji) {
        tippyInstance.current.show();
      } else if (!showEmoji) {
        tippyInstance.current.hide();
      }
    }
  }, [showEmoji]);

  return (
    <div className="header_comment">
      <div className="header_comment_title">
        <h2 className="count comment_header_renderer">
          {numeral(totalComments).format("0,0.[0000]")} bình luận
        </h2>
        <Tippy
          delay={[0, 20]}
          offset={[0, 0]}
          arrow={false}
          className="tippy_box_header"
          content="Sắp xếp bình luận"
          placement="bottom"
        >
          <TippyMenuVideo
            items={MENU_ITEMS_SORT}
            hideOnClick={false}
            placement={"bottom-end"}
            onCreate={(instance) => {
              sortRef.current = instance;
            }}
          >
            <div
              tabIndex="0"
              className="sort_menu comment_header_renderer"
              onClick={handleShowMenu}
              onBlur={handleHideMenu}
            >
              <SortIcon className={"dropdown_menu"} />
              <span>Sắp xếp theo</span>
            </div>
          </TippyMenuVideo>
        </Tippy>
      </div>
      <div className="simple_box">
        <div className="author_thumbnail">
          {accessToken === null ? (
            <img
              src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj"
              alt="avatar default"
            />
          ) : (
            <img src={user.photoURL} alt="avatar user" />
          )}
        </div>
        <div className="author_comment">
          <div className="input_container">
            <input
              type="text"
              placeholder="Viết bình luận..."
              ref={inputRef}
              value={comment}
              onFocus={handleInputFocus}
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
                hideOnClick={false}
              >
                <button
                  className="btn_shape"
                  onClick={handleButtonClick}
                  ref={wrapperEmojiRef}
                >
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
                    onClick={handleComment}
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

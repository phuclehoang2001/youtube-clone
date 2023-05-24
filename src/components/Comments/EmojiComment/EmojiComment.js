import React from "react";
import Tippy from "@tippyjs/react/headless";
import EmojiPicker from "emoji-picker-react";

const configLanguage_VN = [
  {
    category: "suggested",
    name: "GỢI Ý",
  },
  {
    category: "smileys_people",
    name: "NGƯỜI",
  },
  {
    category: "animals_nature",
    name: "THIÊN NHIÊN",
  },
  {
    category: "food_drink",
    name: "THỰC PHẨM",
  },
  {
    category: "travel_places",
    name: "DU LỊCH",
  },
  {
    category: "activities",
    name: "HOẠT ĐỘNG",
  },
  {
    category: "objects",
    name: "ĐỐI TƯỢNG",
  },
  {
    category: "symbols",
    name: "KÝ HIỆU",
  },
  {
    category: "flags",
    name: "CỜ",
  },
];
const previewConfig = {
  showPreview: false,
};

const EmojiComment = ({ children, hideOnClick = true }) => {
  const renderEmoji = (attrs) => (
    <div id="emojis" className="comment_box" tabIndex="-1" {...attrs}>
      <EmojiPicker
        previewConfig={previewConfig}
        categories={configLanguage_VN}
        searchPlaceHolder={"Tìm kiếm biểu tượng cảm xúc"}
        width={"424px"}
        height={"366px"}
      />
    </div>
  );
  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      trigger="click"
      offset={[0, 20]}
      delay={[0, 150]}
      placement="left-end"
      render={renderEmoji}
    >
      {children}
    </Tippy>
  );
};

export default EmojiComment;

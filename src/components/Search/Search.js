import { useEffect, useState, useRef } from "react";
import { SearchIcon, TouchResponse } from "../Icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./Search.scss";
function Search() {
  return (
    <div className="header_center">
      <div className={"search"}>
        <input placeholder="Tìm kiếm" spellCheck={false} />
        <div className="keyboard">
          <img
            src="data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw=="
            alt="Bàn phím"
          />
        </div>
        <Tippy
          delay={[0, 50]}
          offset={[0, 18]}
          arrow={false}
          className="tippy_box"
          content="Tìm kiếm"
          placement="bottom"
        >
          <button
            className={"search_btn"}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </Tippy>
      </div>
      <Tippy
        delay={[0, 50]}
        offset={[0, 18]}
        arrow={false}
        className="tippy_box"
        content="Tìm kiếm bằng giọng nói"
        placement="bottom"
      >
        <div className="touch_response">
          <TouchResponse />
        </div>
      </Tippy>
    </div>
  );
}

export default Search;

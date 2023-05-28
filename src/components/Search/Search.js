import { useEffect, useState, useRef } from "react";
import { SearchIcon, TouchResponse } from "../Icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import { Wrapper as SearchPopper } from "../Popper";
import SearchItem from "./SearchItem";

import "./Search.scss";
function Search() {
  const inputRef = useRef();
  return (
    <div className="header_center">
      <div>
        <HeadlessTippy
          interactive
          visible={false}
          // onClickOutside={handleHideResult}
          placement="bottom-start"
          offset={[0, 5]}
          render={(attrs) => (
            <div className="search_result" tabIndex="-1" {...attrs}>
              <SearchPopper className="menu_search_popper">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </SearchPopper>
            </div>
          )}
        >
          <div className="search">
            <div className="container_search_box" tabIndex="0">
              <div className="search_icon_box">
                <SearchIcon />
              </div>
              <input ref={inputRef} placeholder="Tìm kiếm" spellCheck={false} />
              <div className="keyboard">
                <img
                  src="data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw=="
                  alt="Bàn phím"
                />
              </div>
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
        </HeadlessTippy>
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

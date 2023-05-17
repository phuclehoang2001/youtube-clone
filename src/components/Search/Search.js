import { useEffect, useState, useRef } from "react";
import { SearchIcon, TouchResponse } from "../Icons";
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
        <button
          className={"search_btn"}
          onMouseDown={(e) => e.preventDefault()}
        >
          <SearchIcon />
        </button>
      </div>
      <div className="touch_response">
        <TouchResponse />
      </div>
    </div>
  );
}

export default Search;

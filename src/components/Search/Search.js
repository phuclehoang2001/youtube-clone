import { useEffect, useState, useRef } from "react";
import { SearchIcon } from "../Icons";
import "./Search.scss";
function Search() {
  return (
    <div>
      <div className={"search"}>
        <input placeholder="Tìm kiếm" spellCheck={false} />
        <button
          className={"search_btn"}
          onMouseDown={(e) => e.preventDefault()}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Search;

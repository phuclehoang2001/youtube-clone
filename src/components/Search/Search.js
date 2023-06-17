import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon, TouchResponse, CloseIcon } from "../Icons";
import Tippy from "@tippyjs/react";
import { Wrapper as SearchPopper } from "../Popper";
import SearchItem from "./SearchItem";
import "./Search.scss";
const characters = [
  {
    title: "Old Man's War",
    author: {
      firstName: "John",
      lastName: "Scalzi",
    },
  },
  {
    title: "The Lock Artist",
    author: {
      firstName: "Steve",
      lastName: "Hamilton",
    },
  },
  {
    title: "HTML5",
    author: {
      firstName: "Remy",
      lastName: "Sharp",
    },
  },
  {
    title: "Right Ho Jeeves",
    author: {
      firstName: "P.D",
      lastName: "Woodhouse",
    },
  },
  {
    title: "The Code of the Wooster",
    author: {
      firstName: "P.D",
      lastName: "Woodhouse",
    },
  },
  {
    title: "Thank You Jeeves",
    author: {
      firstName: "P.D",
      lastName: "Woodhouse",
    },
  },
  {
    title: "The DaVinci Code",
    author: {
      firstName: "Dan",
      lastName: "Brown",
    },
  },
  {
    title: "Angels & Demons",
    author: {
      firstName: "Dan",
      lastName: "Brown",
    },
  },
  {
    title: "The Silmarillion",
    author: {
      firstName: "J.R.R",
      lastName: "Tolkien",
    },
  },
  {
    title: "Syrup",
    author: {
      firstName: "Max",
      lastName: "Barry",
    },
  },
  {
    title: "The Lost Symbol",
    author: {
      firstName: "Dan",
      lastName: "Brown",
    },
  },
  {
    title: "The Book of Lies",
    author: {
      firstName: "Brad",
      lastName: "Meltzer",
    },
  },
  {
    title: "Lamb",
    author: {
      firstName: "Christopher",
      lastName: "Moore",
    },
  },
  {
    title: "Fool",
    author: {
      firstName: "Christopher",
      lastName: "Moore",
    },
  },
  {
    title: "Incompetence",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "Fat",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "Colony",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "Backwards, Red Dwarf",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "The Grand Design",
    author: {
      firstName: "Stephen",
      lastName: "Hawking",
    },
  },
  {
    title: "The Book of Samson",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
  {
    title: "The Preservationist",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
  {
    title: "Fallen",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
  {
    title: "Monster 1959",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
];
const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["title", "author.firstName"],
};
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const fuse = new Fuse(characters, options);
  const results = fuse.search(searchValue);
  const characterResults = searchValue
    ? results.map((result) => result.item)
    : [];
  return (
    <div className="header_center">
      <div>
        <HeadlessTippy
          interactive
          visible={showResult && characterResults.length > 0}
          placement="bottom-start"
          offset={[0, 5]}
          onClickOutside={handleHideResult}
          render={(attrs) => (
            <div className="search_result" tabIndex="-1" {...attrs}>
              <SearchPopper className="menu_search_popper">
                {characterResults.map((data) => (
                  <SearchItem data={data} />
                ))}
                <div className="search_report">
                  <span>Báo cáo đề xuất tìm kiếm không phù hợp</span>
                </div>
              </SearchPopper>
            </div>
          )}
        >
          <div className="search">
            <div className="container_search_box" tabIndex="0">
              <div className="search_icon_box">
                <SearchIcon />
              </div>
              <div className="search_input">
                <input
                  ref={inputRef}
                  placeholder="Tìm kiếm"
                  spellCheck={false}
                  value={searchValue}
                  onChange={handleSearch}
                  onFocus={() => setShowResult(true)}
                />
                <div className="keyboard">
                  <img
                    src="data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw=="
                    alt="Bàn phím"
                  />
                </div>
              </div>
              {showResult && characterResults.length > 0 && (
                <div className="clear_search">
                  <button className="btn_clear" onClick={handleClear}>
                    <CloseIcon />
                  </button>
                </div>
              )}
            </div>

            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
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
        className="tippy_box_header"
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

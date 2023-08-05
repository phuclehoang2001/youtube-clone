import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import HeadlessTippy from "@tippyjs/react/headless";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon, TouchResponse, CloseIcon } from "../Icons";
import Tippy from "@tippyjs/react";
import { Wrapper as SearchPopper } from "../Popper";
import SearchItem from "./SearchItem";
import { useDebounce } from "../../hooks";
import "./Search.scss";
import { searchByKeyword } from "../../redux/actions/search";

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
  keys: ["snippet.channelTitle", "snippet.title"],
};
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();
  const debouncedValue = useDebounce(searchValue, 300);
  const dispatch = useDispatch();

  const { results } = useSelector((state) => state.search);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      dispatch(searchByKeyword(debouncedValue));
      const fuse = new Fuse(results, options);
      const data = fuse.search(searchValue);

      setSearchResult(searchValue ? data.map((result) => result.item) : []);
    };
    fetchApi();
  }, [debouncedValue]);

  return (
    <div className="header_center">
      <div>
        <HeadlessTippy
          interactive
          visible={showResult && searchResult.length > 0}
          placement="bottom-start"
          offset={[0, 5]}
          onClickOutside={handleHideResult}
          render={(attrs) => (
            <div className="search_result" tabIndex="-1" {...attrs}>
              <SearchPopper className="menu_search_popper">
                {searchResult.map((data) => (
                  <SearchItem data={data} keyword={searchValue} />
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
              {showResult && searchResult.length > 0 && (
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

import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../Icons";
import "./SearchItem.scss";
const SearchItem = () => {
  return (
    <Link to={`/result?search_query='lam_vlog'`} className="item_search">
      <div className="item_search_icon">
        <SearchIcon />
      </div>
      <div className="item_search_keyword">
        <span>Độ mixi</span>
      </div>
    </Link>
  );
};

export default SearchItem;

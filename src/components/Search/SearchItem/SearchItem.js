import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../Icons";
import "./SearchItem.scss";
const SearchItem = ({ data, keyword }) => {
  console.log(data);
  const titleSearch =
    data.id.kind === "youtube#channel"
      ? data.snippet.channelTitle
      : data.snippet.title;
  return (
    <Link to={`/result?search_query=${titleSearch}`} className="item_search">
      <div className="item_search_icon">
        <SearchIcon />
      </div>
      <div className="item_search_keyword">
        <span>{titleSearch}</span>
      </div>
    </Link>
  );
};

export default SearchItem;

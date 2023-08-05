import React from "react";
import { useLocation } from "react-router-dom";
import CategoriesBar from "../../components/CategoriesBar";
import RelatedVideoItem from "../../components/RelatedVideos/RelatedVideoList/RelatedVideoItem";
import "./SearchPage.scss";
const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search_query");
  console.log(query);
  const categories_search_page = [
    { title: "Tất cả", type: "BY_ALL" },
    { title: "Shorts", type: "BY_SHORTS" },
    { title: "Chưa xem", type: "BY_UNSEEN" },
    { title: "Đã xem", type: "BY_SEEN" },
    { title: "Dành cho bạn", type: "BY_OFFER" },
    { title: "Tải lên gần đây", type: "BY_RECENT" },
    { title: "Trực tiếp", type: "By_LIVE" },
  ];
  const test = {
    kind: "youtube#searchResult",
    etag: "mEAxQd2vFurZoRBmk9Xwnk4oUM4",
    id: {
      kind: "youtube#video",
      videoId: "ukHK1GVyr0I",
    },
    snippet: {
      publishedAt: "2023-05-13T03:00:09Z",
      channelId: "UCWu91J5KWEj1bQhCBuGeJxw",
      title: "Đen - Nấu ăn cho em ft. PiaLinh (M/V)",
      description:
        "Đen - Nấu ăn cho em ft. PiaLinh Download/Stream: https://Denvau.lnk.to/NACE Đạo diễn: Phương Vũ Music Producer: Long ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ukHK1GVyr0I/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ukHK1GVyr0I/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ukHK1GVyr0I/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Đen Vâu Official",
      liveBroadcastContent: "none",
      publishTime: "2023-05-13T03:00:09Z",
    },
  };
  return (
    <div className="wrapper_search_page">
      <div className="list_results">
        <CategoriesBar
          categories={categories_search_page}
          className="search_page"
        />
        {[...new Array(10)].map((index, item) => (
          <RelatedVideoItem video={test} searchItem={true}></RelatedVideoItem>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

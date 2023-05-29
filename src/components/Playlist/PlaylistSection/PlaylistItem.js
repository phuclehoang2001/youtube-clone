import React, { useRef, useState, useEffect } from "react";
import {
  TopbarMenu,
  PlayIcon,
  WatchLater,
  HideOnPlaylist,
  ShareIcon,
  SaveIcon,
} from "../../../components/Icons";
import TippyMenuVideo from "../../WatchMetadata/Tippy/TippyMenuVideo";
const items = [
  {
    leftIcon: <WatchLater />,
    title: "Lưu vào danh sách xem sau",
  },
  {
    leftIcon: <SaveIcon />,
    title: "Lưu vào danh sách phát",
  },
  {
    leftIcon: <HideOnPlaylist />,
    title: "Ẩn khỏi danh sách nhạc kết hợp",
  },
  {
    leftIcon: <ShareIcon />,
    title: "Chia sẻ",
  },
];
const PlaylistItem = () => {
  const tippyRef = useRef(null);
  const [activedMenu, setActivedMenu] = useState(false);
  const handleShowMenu = () => {
    setActivedMenu((value) => !value);
  };

  const handleHideMenu = () => {
    setActivedMenu(false);
  };

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  useEffect(() => {
    if (!activedMenu) {
      tippyRef.current.hide();
    } else {
      document.addEventListener("wheel", preventScroll, { passive: false });
    }
    return () => {
      document.removeEventListener("wheel", preventScroll);
    };
  }, [activedMenu]);

  useEffect(() => {
    if (!activedMenu) {
      document.removeEventListener("wheel", preventScroll);
    }
  }, [activedMenu]);
  return (
    <div className="playlist_item">
      <a
        id="wc_endpoint"
        className="playlist_item_renderer"
        href="/watch?v=vAvJ35UTyUM&list=RDvAvJ35UTyUM&index=1&pp=8AUB"
      >
        <div id="container" className="playlist_item_renderer">
          <div id="index_container" className="playlist_item_renderer">
            <span id="index" className="playlist_item_renderer">
              <PlayIcon width="0.8rem" height="0.8rem" />
            </span>
          </div>
          <div id="thumbnail_container" className="playlist_item_renderer">
            <div id="thumbnail" className="playlist_item_renderer">
              <img src="https://i.ytimg.com/vi/840Vw6IB5Zw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDyGE0OCODkMzVDnqB9GP9o2W-4Hw" />
            </div>
          </div>
          <div id="meta" className="playlist_item_renderer">
            <h4 id="video_title" className="playlist_item_renderer">
              Tùng TeA & PC - Mây Lang Thang ft. New$oulZ (Official MV)
            </h4>
            <span id="byline" className="playlist_item_renderer">
              TaynguyenSound Official
            </span>
          </div>
        </div>
      </a>
      <div id="menu_playlist" className="playlist_item_renderer">
        <TippyMenuVideo
          items={items}
          hideOnClick={false}
          placement={"bottom-end"}
          onCreate={(instance) => {
            tippyRef.current = instance;
          }}
        >
          <div
            id="button"
            className="playlist_item_renderer"
            onClick={handleShowMenu}
            onBlur={handleHideMenu}
            tabIndex={0}
          >
            <TopbarMenu />
          </div>
        </TippyMenuVideo>
      </div>
    </div>
  );
};

export default PlaylistItem;

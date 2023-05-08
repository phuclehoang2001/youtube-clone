import React from "react";
import {
  HomeActive,
  Home,
  Shorts,
  ShortsActive,
  SubscribeChannel,
  SubscribeChannelActive,
  Library,
  VideoHistory,
  YourVideo,
  YourCutVideo,
  LikedVideo,
} from "../Icons";
import config from "../../config";
import Menu, { MenuItem } from "./Menu";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <aside className="wrapper">
      <Menu>
        <MenuItem
          title="Trang chủ"
          to={config.routes.home}
          icon={<Home />}
          activeIcon={<HomeActive />}
        ></MenuItem>
        <MenuItem
          title="Shorts"
          to={config.routes.shorts}
          icon={<Shorts />}
          activeIcon={<ShortsActive />}
        ></MenuItem>
        <MenuItem
          title="Kênh đăng ký"
          to={config.routes.subscriptions}
          icon={<SubscribeChannel />}
          activeIcon={<SubscribeChannelActive />}
        ></MenuItem>
      </Menu>
    </aside>
  );
};

export default Sidebar;

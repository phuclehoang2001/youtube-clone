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
const Sidebar = ({ sidebar }) => {
  return (
    <aside className={sidebar ? "wrapper shrink" : "wrapper"}>
      <Menu>
        <MenuItem
          sidebar={sidebar}
          title="Trang chủ"
          to={config.routes.home}
          icon={<Home />}
          activeIcon={<HomeActive />}
        ></MenuItem>
        <MenuItem
          sidebar={sidebar}
          title="Shorts"
          to={config.routes.shorts}
          icon={<Shorts />}
          activeIcon={<ShortsActive />}
        ></MenuItem>
        <MenuItem
          sidebar={sidebar}
          title="Kênh đăng ký"
          to={config.routes.subscriptions}
          icon={<SubscribeChannel />}
          activeIcon={<SubscribeChannelActive />}
        ></MenuItem>
        {sidebar ? (
          ""
        ) : (
          <>
            <MenuItem
              title="Kênh đăng ký"
              to={config.routes.subscriptions}
              icon={<SubscribeChannel />}
              activeIcon={<SubscribeChannelActive />}
            ></MenuItem>
            <MenuItem
              title="Kênh đăng ký"
              to={config.routes.subscriptions}
              icon={<SubscribeChannel />}
              activeIcon={<SubscribeChannelActive />}
            ></MenuItem>
          </>
        )}
      </Menu>
    </aside>
  );
};

export default Sidebar;

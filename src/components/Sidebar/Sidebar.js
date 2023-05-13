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
const Sidebar = ({ sidebar, renderVideo = false, open }) => {
  return (
    <>
      {renderVideo ? (
        <aside className={`wrapper ${open ? "open" : "hide"}_sidebar`}>
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
                  title="Thư viện"
                  to={config.routes.subscriptions}
                  icon={<Library />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video đã xem"
                  to={config.routes.subscriptions}
                  icon={<VideoHistory />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video của bạn"
                  to={config.routes.subscriptions}
                  icon={<YourVideo />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video đã cắt"
                  to={config.routes.subscriptions}
                  icon={<YourCutVideo />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video đã thích"
                  to={config.routes.subscriptions}
                  icon={<LikedVideo />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
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
      ) : (
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
                  title="Thư viện"
                  to={config.routes.subscriptions}
                  icon={<Library />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video đã xem"
                  to={config.routes.subscriptions}
                  icon={<VideoHistory />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video của bạn"
                  to={config.routes.subscriptions}
                  icon={<YourVideo />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video đã cắt"
                  to={config.routes.subscriptions}
                  icon={<YourCutVideo />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
                <MenuItem
                  title="Video đã thích"
                  to={config.routes.subscriptions}
                  icon={<LikedVideo />}
                  activeIcon={<SubscribeChannelActive />}
                ></MenuItem>
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
      )}
    </>
  );
};

export default Sidebar;

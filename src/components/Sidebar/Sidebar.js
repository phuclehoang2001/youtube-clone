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
  LogoYoutube,
  Menu as MenuHeader,
} from "../Icons";
import config from "../../config";
import Menu, { MenuItem } from "./Menu";
import "./Sidebar.scss";
const Sidebar = ({ sidebar, renderVideo = false, open, handleSidebar }) => {
  return (
    <>
      {renderVideo ? (
        <div className={`wrapper_drawer ${open ? "open" : "hide"}_sidebar`}>
          <div className="sidebar_header">
            <div className="sidebar_header_menu" onClick={handleSidebar}>
              <MenuHeader />
            </div>
            <div className="sidebar_header_logo">
              <a href="#" alt="Trang chủ Youtube">
                <LogoYoutube />
              </a>
              <span className="sidebar_header_countrycode">VN</span>
            </div>
          </div>
          <aside className={"sidebar_drawer"}>
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
            </Menu>
          </aside>
        </div>
      ) : (
        <div className={sidebar ? "scrollbar shrink" : "scrollbar"}>
          <aside className={"wrapper"}>
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
        </div>
      )}
    </>
  );
};

export default Sidebar;

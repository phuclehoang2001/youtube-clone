import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { login } from "../../redux/actions/auth";
import Search from "../Search/";
import {
  LogoYoutube,
  CreateVideo,
  Notification,
  Menu,
  TopbarMenu,
  LoginIcon,
  YourChannel,
  YoutubeStudio,
  LogOut,
  Theme,
  Language,
  Location,
  Setting,
  NextMenu,
} from "../Icons";
import "./Header.scss";

import { Menu as MenuHeader } from "../Popper/Menu";
const MENU_ITEMS_PROFILE = [
  {
    leftIcon: <YourChannel />,
    title: "Kênh của bạn",
    to: "/yourchannel",
  },
  {
    leftIcon: <YoutubeStudio />,
    title: "Youtube Studio",
    to: "/youtube-stutdio",
  },
  {
    leftIcon: <LogOut />,
    title: "Đăng xuất",
    logOut: true,
  },
];

const MENU_ITEMS_SWITCH = [
  {
    leftIcon: <Theme />,
    rightIcon: <NextMenu />,
    title: "Giao diện: ",
    selectedOption: "Giao diện thiết bị",
    children: {
      title: "Giao diện",
      data: [
        {
          type: "theme",
          code: "default",
          title: "Dùng giao diện của thiết bị",
          separate: true,
        },
        {
          type: "theme",
          code: "dark",
          title: "Giao diện tối",
        },
        {
          type: "theme",
          code: "light",
          title: "Giao diện sáng",
          lastItem: true,
        },
      ],
    },
    separate: true,
  },
  {
    leftIcon: <Language />,
    rightIcon: <NextMenu />,
    title: "Ngôn ngữ: ",
    selectedOption: "Tiếng Việt",
    children: {
      title: "Chọn ngôn ngữ của bạn",
      data: [
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
          separate: true,
        },
        {
          type: "language",
          code: "en",
          title: "English",
          lastItem: true,
        },
      ],
    },
  },
  {
    leftIcon: <Location />,
    rightIcon: <NextMenu />,
    title: "Địa điểm: ",
    selectedOption: "Việt Nam",
    children: {
      title: "Chọn vị trí của bạn",
      data: [
        {
          type: "location",
          code: "+84",
          title: "Việt Nam",
          separate: true,
        },
        {
          type: "location",
          code: "+82",
          title: "Hàn Quốc",
        },
        {
          type: "location",
          code: "+81",
          title: "Nhật Bản",
        },
        {
          type: "location",
          code: "+33",
          title: "Pháp",
        },
        {
          type: "location",
          code: "+358",
          title: "Phần Lan",
          lastItem: true,
        },
      ],
    },
  },
];

const Header = ({ handleSidebar }) => {
  const { accessToken, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    ...MENU_ITEMS_PROFILE,
    ...MENU_ITEMS_SWITCH,
    {
      leftIcon: <Setting />,
      title: "Cài đặt",
      to: "/account",
      separate: true,
      lastItem: true,
    },
  ];

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="header">
      <button className="header_menu yt_btn">
        <div className="header_menu_icon" onClick={() => handleSidebar()}>
          <Menu width="1.6rem" height="1.6rem" />
        </div>

        <a className="header_logo" href="/">
          <LogoYoutube width="100%" height="100%" />
          <span className="header_countrycode">VN</span>
        </a>
      </button>

      <Search />
      <div className="header_actions">
        {accessToken ? (
          <>
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
              content="Tạo"
              placement="bottom"
            >
              <button className="action_btn yt_btn">
                <CreateVideo />
              </button>
            </Tippy>
            <Tippy
              delay={[0, 50]}
              offset={[0, 18]}
              arrow={false}
              className="tippy_box_header"
              content="Thông báo"
              placement="bottom"
            >
              <button className="action_btn yt_btn">
                <Notification />
              </button>
            </Tippy>
          </>
        ) : (
          ""
        )}
        {accessToken ? (
          <MenuHeader items={userMenu} onChange={handleMenuChange} data={user}>
            <img src={user.photoURL} alt="avatar" className="avatar" />
          </MenuHeader>
        ) : (
          ""
        )}

        {accessToken ? (
          ""
        ) : (
          <div className="youtube_masthead">
            <div className="masthead">
              <Tippy
                delay={[0, 50]}
                offset={[0, 18]}
                arrow={false}
                className="tippy_box_header"
                content="Cài đặt"
                placement="bottom"
              >
                <button className="action_btn yt_btn">
                  <TopbarMenu width="1.5rem" height="1.5rem" />
                </button>
              </Tippy>
              <button className="topbar_login" onClick={handleLogin}>
                <div className="topbar_login_shape">
                  <div className="topbar_login_icon">
                    <LoginIcon />
                  </div>
                  <div className="topbar_login_content">
                    <span>Đăng nhập</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

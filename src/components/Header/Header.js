import React from "react";
import { LogoYoutube, CreateVideo, Search, Notification, Menu } from "../Icons";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <button className="header_menu yt_btn">
        <div className="header_menu_icon">
          <Menu width="1.6rem" height="1.6rem" />
        </div>

        <div className="header_logo">
          <LogoYoutube width="100%" height="100%" />
        </div>
      </button>

      <form>
        <input type="text" placeholder="Tìm kiếm" />
        <button type="submit" className="yt_btn">
          <Search width="1.6rem" height="1.6rem" />
        </button>
      </form>

      <div className="header_actions">
        <button className="action_btn yt_btn">
          <CreateVideo />
        </button>
        <button className="action_btn yt_btn">
          <Notification />
        </button>
        <img
          src="https://yt3.ggpht.com/FID9udkB2vTqIte2w003UhOkJdjGNEaPoFLcCQNXm3gcum0AtFZBVQG-MVIeC0B_vIWmd1NIpw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;

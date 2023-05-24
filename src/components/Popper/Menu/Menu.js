import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import { logOut } from "../../../redux/actions/auth";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import "./Menu.scss";
import Header from "./Header";
import HeaderMenuUser from "./HeaderMenuUser";
import { useDispatch } from "react-redux";

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = true,
  onChange = defaultFn,
  data = null,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const dispatch = useDispatch();

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
            if (item.logOut) {
              handleLogOut();
            }
          }}
        />
      );
    });
  };

  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const renderResult = (attrs) => (
    <div className={"menu_list"} tabIndex="-1" {...attrs}>
      <PopperWrapper className={"menu_popper_wrapper"}>
        {history.length === 1 && data && <HeaderMenuUser dataUser={data} />}
        {history.length > 1 && (
          <Header title={current.title} onBack={handleBack} />
        )}
        <div className={"menu-body"}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      trigger="click"
      offset={[0, 20]}
      delay={[0, 150]}
      placement="bottom-end"
      onHide={handleReset}
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

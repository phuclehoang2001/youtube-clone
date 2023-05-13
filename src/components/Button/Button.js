import { Link } from "react-router-dom";
import "./Button.scss";
function Button({
  to,
  href,
  primary = false,
  outline = false,
  size = "medium",
  text = false,
  disabled = false,
  rounded = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = `btn_wrapper ${className ? className : ""} ${
    size ? size : ""
  } ${primary ? "primary" : ""} ${outline ? "outline" : ""} ${
    text ? "text" : ""
  } ${disabled ? "disabled" : ""} ${rounded ? "rounded" : ""}`;

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="btn_icon">{leftIcon}</span>}
      <span className="btn_title">{children}</span>
      {rightIcon && <span className="btn_icon">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;

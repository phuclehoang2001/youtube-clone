import { MenuBack } from "../../Icons/Icons";
function Header({ title, onBack }) {
  return (
    <header className="menu_popper_header">
      <button className="back_btn" onClick={onBack}>
        <MenuBack />
      </button>
      <span className="menu_popper_header_title">{title}</span>
    </header>
  );
}

export default Header;

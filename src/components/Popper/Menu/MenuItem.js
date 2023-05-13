import Button from "../../Button";
import "./Menu.scss";
function MenuItem({ data, onClick }) {
  return (
    <Button
      className={
        "menu_item_header " +
        (data.separate ? "separate" : "") +
        " " +
        (data.lastItem ? "lastItem" : "")
      }
      leftIcon={data.leftIcon}
      rightIcon={data.rightIcon}
      to={data.to}
      onClick={onClick}
    >
      {data.selectedOption ? data.title + data.selectedOption : data.title}
    </Button>
  );
}

export default MenuItem;

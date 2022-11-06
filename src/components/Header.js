import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon="list" className="logo" />
        <span>To do list</span>
      </div>
    </header>
  );
};

export default Header;

import {FC} from "react";

const Header: FC = () => {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logo">
          <a href="/">
            <img src="img/icons/logo.svg" alt="Логотип"/>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;

import {FC} from "react";
import {ReactComponent as Logo} from '../../img/icons/logo.svg'
import {ReactComponent as Location} from '../../img/icons/location.svg';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import classes from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link to="/">
            <Logo width="134" height="52" />
          </Link>
        </div>
        <input id="menu-button" type="checkbox"/>
        <label htmlFor="menu-button">МЕНЮ<span></span></label>
        <div className={classes.container}>
          <Navigation/>
          <button type="button" data-modal="location">
            <Location width="16" height="21"/>
            <span>новосибирск</span>
          </button>
          <a href="tel:+73832840160">8 (383) 284 01 60</a>
        </div>
      </div>
    </header>
  )
}

export default Header;

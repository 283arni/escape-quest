import {FC} from "react";
import classes from './Location.module.scss';
import {ReactComponent as Target} from "../../img/icons/target.svg";
import {ReactComponent as Close} from "../../img/icons/close.svg";


const cities = ["Новосибирск", "Иркутск", "Смоленск", "Волгоград", "Комсомольск-на-Амуре"];

const Location: FC = () => {
  return (
    <div className={classes.content}>
      <h2>Ваш город:</h2>
      <button type="button" aria-label="search location">
        <Target width={20} height={20}/>
        <span>Определить местоположение</span>
      </button>
      <a href="/">... или выберите вручную</a>
      <ul>
        {cities.map((city) => <li key={city}>{city}</li>)}
      </ul>
    </div>
  )
}

export default Location;
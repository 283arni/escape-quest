import {FC} from "react";
import classes from './Hero.module.scss'
import {Link} from "react-router-dom";

const Hero: FC = () => {
  return (
    <main className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1>Лучшие квесты в Новосибирске</h1>
          <p>Надоело проводить свободное время лёжа на диване? Игровые площадки questroom на целый час погружают вас в мир незабываемых авантюр. Ищите подсказки, решайте головоломки и находите выход из комнаты!</p>
          <Link to="/quests">выбрать квест</Link>
        </div>
      </div>
    </main>
  )
}

export default Hero;

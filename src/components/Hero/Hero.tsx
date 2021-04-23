import {FC} from "react";
import classes from './Hero.module.scss'

const Hero: FC = () => {
  return (
    <main className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1>Лучшие квесты в Новосибирске</h1>
          <p>Надоело проводить свободное время лёжа на диване? Игровые площадки questroom на целый час погружают вас в мир незабываемых авантюр. Ищите подсказки, решайте головоломки и находите выход из комнаты!</p>
          <a href="#">выбрать квест</a>
        </div>
      </div>
    </main>
  )
}

export default Hero;

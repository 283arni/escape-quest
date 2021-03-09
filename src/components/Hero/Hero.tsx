import {FC} from "react";
import {Link} from "react-router-dom";

const Hero: FC = () => {
  return (
    <main className="Hero">
      <div className="Container">
        <div className="Hero__wrapper">
          <h1>Лучшие квесты в Новосибирске</h1>
          <p>Надоело проводить свободное время лёжа на диване? Игровые площадки questroom на целый час погружают вас в мир незабываемых авантюр. Ищите подсказки, решайте головоломки и находите выход из комнаты!</p>
          <Link to="/quests">выбрать квест</Link>
        </div>
      </div>
    </main>
  )
}

export default Hero;

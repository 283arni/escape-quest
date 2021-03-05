import {FC} from "react";

const Hero: FC = () => {
  return (
    <main className="Hero">
      <div className="Container">
        <div className="Hero__wrapper">
          <h1>Лучшие квесты в Новосибирске</h1>
          <p>Надоело проводить свободное время лёжа на диване? Игровые площадки questroom на целый час погружают вас в мир незабываемых авантюр. Ищите подсказки, решайте головоломки и находите выход из комнаты!</p>
          <a href="/">выбрать квест</a>
        </div>
      </div>
    </main>
  )
}

export default Hero;

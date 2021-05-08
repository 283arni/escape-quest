import {FC} from "react";
import {ReactComponent as Clock} from "../../img/icons/clock.svg";
import {ReactComponent as Puzzle} from "../../img/icons/puzzle.svg";
import {ReactComponent as Person} from "../../img/icons/person.svg";

import classes from "./Quest.module.scss";
import {questType} from "../../types";

type Props = {
  location: {
    state: {
      quest: questType;
    }
  }
}

const Quest: FC<Props> = ({location}: Props) => {
  const quest = location.state.quest;

  return (
    <main className={classes.quest}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <span>хоррор, триллер</span>
          <h1>маньяк</h1>
          <div className={classes.description}>
            <div className={classes.info}>
              <div className={classes.infoBlock}>
                <div className={classes.align}>
                  <Clock height={20} width={20}/>
                  <span>60 мин</span>
                </div>
              </div>
              <div className={classes.infoBlock}>
                <div className={classes.align}>
                  <Person height={18} width={23}/>
                  <span>3-4 чел</span>
                </div>
              </div>
              <div className={classes.infoBlock}>
                <div className={classes.align}>
                  <Puzzle height={22} width={22}/>
                  <span>средняя сложность</span>
                </div>
              </div>
            </div>
            <p> В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаным, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отстёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?</p>
            <a href="/">забронировать</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Quest;

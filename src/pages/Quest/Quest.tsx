import {FC} from "react";
import {Link} from "react-router-dom";
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
    <main
      className={classes.quest}
      style={{backgroundImage: `url(${quest.pictures.jpgFormatRetina})`}}
    >
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <span>{quest.genres.join(', ')}</span>
          <h1>{quest.title}</h1>
          <div className={classes.description}>
            <div className={classes.info}>
              <div className={classes.infoBlock}>
                <div className={classes.align}>
                  <Clock height={20} width={20}/>
                  <span>{`${quest.time} мин`}</span>
                </div>
              </div>
              <div className={classes.infoBlock}>
                <div className={classes.align}>
                  <Person height={18} width={23}/>
                  <span>{`${quest.people.min}-${quest.people.max} чел`}</span>
                </div>
              </div>
              <div className={classes.infoBlock}>
                <div className={classes.align}>
                  <Puzzle height={22} width={22}/>
                  <span>сложность &lt;{quest.level}&gt;</span>
                </div>
              </div>
            </div>
            <p>{quest.description}</p>
            <Link to={{pathname: "/timetable", state: {quest}}}>забронировать</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Quest;

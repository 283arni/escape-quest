import {ReactComponent as Triangle} from "../../img/icons/triangle.svg";
import {FC, useState} from "react";
import Time from "../../components/Time/Time";
import {times} from "../../data/timetable";
import {questType, timeType} from "../../types";

import classes from "./Timetable.module.scss";

type Props = {
  location: {
    state: {
      quest: questType;
    }
  }
}

const Timetable: FC<Props> = ({location}: Props) => {
  const quest = location.state.quest;

  const [time, setTime] = useState<string>('')

  const handleTimeChange = (time: string) => {
    console.log(time)
  }

  return (
    <main
      className={classes.timetable}
      style={{backgroundImage: `url(${quest.pictures.jpgFormatRetina})`}}
    >
      <div className={classes.overlay}/>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.subtitle}>
            <span>{quest.genres.join(', ')}</span>
            <span>выбранный квест</span>
          </div>
          <div className={classes.title}>
            <h1>{quest.title}</h1>
            <div className={classes.info} id="info">
              <span>Вы выбрали игру</span>
              <span>22 марта в 16:00.</span>
              <span>К оплате 1500 рублей.</span>
            </div>
            <button id="payment" type='button'>
              <span>Перейти к оплате</span>
              <Triangle width={5} height={7}/>
            </button>
          </div>
          <div className={classes.block}>
            <div className={classes.date}>
              <button id="choose-date">
                <span>Выберите дату</span>
                <Triangle width={5} height={7}/>
              </button>
              <input type="date"/>
              {/*<span id="date">22 марта</span>*/}
            </div>
            <div className={classes.samples} id="samples">
              <div className={classes.samplesFree}/>
              <span>— сводобно</span>
              <div className={classes.samplesReserved}/>
              <span>— занято</span>
              <div className={classes.samplesCheck}/>
              <span>— выбрано вами</span>
            </div>
            <div className={classes.times} id="times">
              <form>
                  {times.map((item:timeType)=> <Time key={item.time} item={item}/>)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Timetable;

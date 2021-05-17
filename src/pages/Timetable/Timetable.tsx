import {ReactComponent as Triangle} from "../../img/icons/triangle.svg";
import {ChangeEvent, FC, useRef, useState} from "react";
import Time from "../../components/Time/Time";
import {times} from "../../data/timetable";
import {questType, timeType} from "../../types";

import classes from "./Timetable.module.scss";

const replaceDate = (date: string) => {
  return date.split('.').reverse().join('-');
}

const setMaxDateCalendar = () => {
  const date = new Date();
  date.setDate(date.getDate() + 13);

  return replaceDate(date.toLocaleDateString());
}

type Props = {
  location: {
    state: {
      quest: questType;
    }
  }
}

const Timetable: FC<Props> = ({location}: Props) => {
  const quest = location.state.quest;

  const [time, setTime] = useState<string>('');
  const calendar = useRef(null);
  const today = replaceDate(new Date().toLocaleDateString());


  const handleTimeChange = (e: ChangeEvent<HTMLDivElement>) => {

    const time = e.target.id;
    setTime(time)
  }

  const handleCalendarClick = () => {
    console.log(calendar)
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
              <h2>Выберите дату</h2>
              <input
                type="date"
                ref={calendar}
                min={today}
                max={setMaxDateCalendar()}
                defaultValue={today}
                onClick={() => handleCalendarClick()}/>
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
            <div
              className={classes.times}
              onChange={(e: ChangeEvent<HTMLDivElement>) => handleTimeChange(e)}
              id="times"
            >
              <form>
                  {times.map((item: timeType)=> <Time key={item.time} item={item}/>)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Timetable;

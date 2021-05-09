import classes from "../../pages/Timetable/Timetable.module.scss";
import {timeType} from "../../types";
import {FC} from "react";

type Props = {
  item: timeType;
}

const Time: FC<Props> = ({item}: Props) => {
  return (
    <div className={classes.time} key={item.time}>
      <input type="radio" name="tab" id={`time-${item.time}`} disabled={item.reserved}/>
      <label htmlFor="tab" className={item.reserved ? classes.timeReserved : ''}>
        <span>{item.time}</span>
      </label>
      <span>{item.price} &#8381;</span>
    </div>
  )
}

export default Time;
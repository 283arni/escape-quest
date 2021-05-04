import {FC} from "react";
import classes from "./Popup.module.scss";
import {ReactComponent as Close} from "../../img/icons/close.svg";
import Location from "../Location/Location";
import Feedback from "../Feedback/Feedback";

type Content = {
  [key: string]: JSX.Element
}

type Props = {
  name: string,
  onOpenPopupClick: (name: string) => void
}

const popupContent: Content = {
  'location': <Location />,
  'feedback': <Feedback />,
}

const Popup: FC<Props> = ({name, onOpenPopupClick}: Props) => {

  return (
  <div className={`${classes.modal} ${classes.preload}`}>
    <div className={classes.wrapper}>
      <div className={classes.overlay}/>
      <div className={classes.content}>
        {popupContent[name]}
        <button
          className={`${classes.closeBtn} ${classes.btnReset}`}
          type="button"
          aria-label="close popup"
          onClick={() => onOpenPopupClick('')}
        >
          <Close width={14} height={14} />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Popup;

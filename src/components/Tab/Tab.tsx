import {FC} from "react";
import {ReactComponent as AllQuestsIcon} from "../../img/icons/all-quests.svg";
import {ReactComponent as AdventureIcon} from "../../img/icons/adventure.svg";
import {ReactComponent as HorrorIcon} from "../../img/icons/horror.svg";
import {ReactComponent as DetectiveIcon} from "../../img/icons/detective.svg";
import {ReactComponent as MysticIcon} from "../../img/icons/mystic.svg";
import {ReactComponent as SciFiIcon} from "../../img/icons/sci-fi.svg";




const tabs = [
  {
    id: "all-tab",
    icon: <AllQuestsIcon />,
  },
]

const Tab: FC = () => {
  return (
    <>
      <input type="radio" name="tab" id="all-tab"/>
      <label htmlFor="all-tab" tabIndex={0}>
        {tabs[0].icon}
        <span>Все квесты</span>
      </label>
    </>
  )
}

export default Tab;

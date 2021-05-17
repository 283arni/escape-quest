import {ChangeEvent, FC, FormEvent} from "react";
import classes from "./Tabs.module.scss";
import {tabs} from "../../data/tabs";
import {tabType} from "../../types";
import Tab from "../Tab/Tab";

type Props = {
  onSortQuestsChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const Tabs: FC<Props> = ({onSortQuestsChange}: Props) => {
  return (
    <form className={classes.tabs} onChange={(e: ChangeEvent<HTMLFormElement>) => onSortQuestsChange(e)}>
      {tabs.map((tab: tabType) =>
        <Tab
          key={tab.id}
          tab={tab}
        />)}
    </form>
  )
}

export default Tabs;

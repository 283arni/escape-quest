import {FC} from "react";
import classes from "./Tabs.module.scss";
import {tabs} from "../../data/tabs";
import {tabType} from "../../types";
import Tab from "../Tab/Tab";

type Props = {
  activeTab: string;
  onSortQuestsChange: (title : string) => void;
}

const Tabs: FC<Props> = ({onSortQuestsChange, activeTab}: Props) => {
  return (
    <form className={classes.tabs}>
      {tabs.map((tab: tabType) =>
        <Tab
          key={tab.id}
          tab={tab}
          activeTab={activeTab}
          onSortQuestsChange={onSortQuestsChange}
        />)}
    </form>
  )
}

export default Tabs;

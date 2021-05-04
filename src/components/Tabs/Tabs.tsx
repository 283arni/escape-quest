import {FC} from "react";
import classes from "./Tabs.module.scss";
import {tabs} from "../../data/tabs";
import {tabType} from "../../types";
import Tab from "../Tab/Tab";

type Props = {
  activeTab: string;
  onSortQuestsClick: (title : string) => void;
}

const Tabs: FC<Props> = ({onSortQuestsClick, activeTab}: Props) => {
  return (
    <form className={classes.tabs}>
      {tabs.map((tab: tabType) =>
        <Tab
          key={tab.id}
          tab={tab}
          activeTab={activeTab}
          onSortQuestsClick={onSortQuestsClick}
        />)}
    </form>
  )
}

export default Tabs;

import {FC} from "react";
import {tabType} from "../../types";

type Props = {
  activeTab: string;
  tab: tabType;
  onSortQuestsClick: (title : string) => void;
}

const Tab: FC<Props> = ({tab, activeTab, onSortQuestsClick}: Props) => {
  return (
    <>
      <input
        type="radio"
        name="tab"
        id={tab.id}
        checked={activeTab === tab.title}
        onChange={() => onSortQuestsClick(tab.title)}
      />
      <label
        htmlFor={tab.id}
        tabIndex={0}
      >
        {tab.icon}
        <span>{tab.title}</span>
      </label>
    </>
  )
}

export default Tab;

import {FC} from "react";
import {tabType} from "../../types";

type Props = {
  tab: tabType;
}

const Tab: FC<Props> = ({tab}: Props) => {

  return (
    <>
      <input
        type="radio"
        name="tab"
        id={tab.id}
        defaultChecked={tab.id === 'all-tabs'}
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

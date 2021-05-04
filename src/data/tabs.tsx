import {ReactComponent as AllQuestsIcon} from "../img/icons/all-quests.svg";
import {ReactComponent as AdventureIcon} from "../img/icons/adventure.svg";
import {ReactComponent as HorrorIcon} from "../img/icons/horror.svg";
import {ReactComponent as DetectiveIcon} from "../img/icons/detective.svg";
import {ReactComponent as MysticIcon} from "../img/icons/mystic.svg";
import {ReactComponent as SciFiIcon} from "../img/icons/sci-fi.svg";

import {tabType} from "../types";

export const tabs: tabType[] = [
  {
    id: "all-tab",
    title: "Все квесты",
    icon: <AllQuestsIcon />,
  },
  {
    id: "adventure-tab",
    title: "Приключения",
    icon: <AdventureIcon />,
  },
  {
    id: "horror-tab",
    title: "Ужасы",
    icon: <HorrorIcon />,
  },
  {
    id: "mystic-tab",
    title: "Мистика",
    icon: <MysticIcon />,
  },
  {
    id: "detective-tab",
    title: "Детектив",
    icon: <DetectiveIcon />,
  },
  {
    id: "sci-fi-tab",
    title: "Sci-fi",
    icon: <SciFiIcon />,
  },
]

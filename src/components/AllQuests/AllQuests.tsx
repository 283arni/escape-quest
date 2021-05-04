import {FC, SetStateAction, useEffect, useState} from "react";
import {ReactComponent as Location} from "../../img/icons/location.svg";
import {ReactComponent as Person} from "../../img/icons/person.svg";
import {ReactComponent as Puzzle} from "../../img/icons/puzzle.svg";
import {ReactComponent as Star} from "../../img/icons/star.svg";
import Tabs from "../Tabs/Tabs";
import classes from './AllQuests.module.scss'
import {getQuests} from "../../api";
import {questType} from "../../types";
import {log} from "util";



const AllQuests: FC =  () => {


  const [quests, setQuests] = useState<SetStateAction<any>>([]);
  const [activeQuests, setSortQuest] = useState<SetStateAction<any>>({activeTab: 'Все квесты', sortedQuests: []});


  useEffect(() => {
    const fetchFirestoreQuests = async () => {
      try {
        const response = await getQuests();
        const quests = response.docs.map(doc => doc.data());

        setQuests(quests);
        setSortQuest({...activeQuests ,sortedQuests: quests});
      } catch (e) {
        throw new Error(`Ошибка при запросе, ${e}`);
      }
    }

    fetchFirestoreQuests();
  }, [])

  const handleSortQuestsClick = (title: string) => {

    if (title === 'Все квесты') {
      setSortQuest({activeTab: title, sortedQuests: quests});
      return;
    }

    const sortedQuests = quests.filter((quest: questType) => {
      return quest.genres.some((genre: string) => genre === title.toLowerCase());
    })

    setSortQuest({activeTab: title, sortedQuests});
  }

  return (
    <main className={classes.quests}>
      <div className={classes.container}>
        <div className={classes.wrapper}><span>квесты в Новосибирске</span>
          <h1>Выберите тематику</h1>
          <Tabs
            activeTab={activeQuests.activeTab}
            onSortQuestsClick={handleSortQuestsClick}
          />
          <div className={classes.list}>
            <ul>
              {activeQuests.sortedQuests.map((quest: questType) => {
                const {jpgFormat, jpgFormatRetina, webpFormatRetina, webpFormat} = quest.pictures;
                const {min, max} = quest.people;

                return (
                  <li key={quest.id}>
                    <a href="#">
                      <div className={classes.img}>
                        <picture>
                          <source srcSet={`${webpFormat} 1x,${webpFormatRetina} 2x`} type="image/webp"/>
                          <img src={jpgFormat} srcSet={`${jpgFormatRetina} 2x`} width="340" height="232" alt={quest.title}/>
                        </picture>
                      </div>
                      <div className={classes.info}>
                        <h2>{quest.title}</h2>
                        <div className={classes.address}>
                          <Location width='11' height='18'/>
                          <span>{quest.address}</span>
                        </div>
                        <div className={classes.amount}>
                          <Person width="12" height="16"/>
                          <span>{`${min}–${max} чел`}</span>
                          <Puzzle width="16" height="16"/>
                          <span>{quest.level}</span>
                        </div>
                      </div>
                      {
                        quest.hit ?
                        <div className={classes.hit}>
                          <Star width="12" height="12" />
                          <span>Хит</span>
                        </div>
                        : null
                      }
                    </a>
                  </li>
                )
              }
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AllQuests;

import {FC, useEffect, useState} from "react";
import Tabs from "../Tabs/Tabs";
import classes from './AllQuests.module.scss'
import {getQuests} from "../../api";
import {activeQuestsType, questType} from "../../types";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";



const AllQuests: FC =  () => {

  const [quests, setQuests] = useState<[] | questType[]>([]);
  const [activeQuests, setSortQuest] = useState<activeQuestsType>({activeTab: 'Все квесты', sortedQuests: []});


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

  const handleSortQuestsChange = (title: string): void => {

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
            onSortQuestsChange={handleSortQuestsChange}
          />
          <div className={classes.list}>
            {!quests.length ?
              <Loader/> :
              <ul>
                {activeQuests.sortedQuests.map((quest: questType) => <Card quest={quest} key={quest.id}/>)}
              </ul>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default AllQuests;

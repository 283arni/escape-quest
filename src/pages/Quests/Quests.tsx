import {ChangeEvent, FC, FormEvent, useEffect, useState} from "react";
import Tabs from "../../components/Tabs/Tabs";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import {getQuests} from "../../api";
import {questType} from "../../types";

import classes from './Quests.module.scss'
import {tabs} from "../../data/tabs";


const Quests: FC =  () => {

  const [quests, setQuests] = useState<[] | questType[]>([]);
  const [sortedQuests, setSortQuests] = useState<[] | questType[]>([]);


  useEffect(() => {
    const fetchFirestoreQuests = async () => {
      try {
        const response = await getQuests();
        const quests = response.docs.map(doc => doc.data());

        setQuests(quests);
        setSortQuests(quests);
      } catch (e) {
        throw new Error(`Ошибка при запросе, ${e}`);
      }
    }

    fetchFirestoreQuests();
  }, [])

  const handleSortQuestsChange = (e: ChangeEvent<HTMLFormElement>): void => {

    const id =  e.target.id

    tabs.forEach((tab) => {
      if (id === 'all-tabs') {
        setSortQuests(quests);
        return;
      }

      if (tab.id === id) {
        const sortedQuests = quests.filter((quest: questType) => {
          return quest.genres.some((genre: string) => genre === tab.title.toLowerCase());
        })

        setSortQuests(sortedQuests);
      }
    })
  }

  return (
    <main className={classes.quests}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <span>квесты в Новосибирске</span>
          <h1>Выберите тематику</h1>
          <Tabs
            onSortQuestsChange={handleSortQuestsChange}
          />
          <div className={classes.list}>
            {!quests.length ?
              <Loader/> :
              <ul>
                {sortedQuests.map((quest: questType) => <Card quest={quest} key={quest.id}/>)}
              </ul>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Quests;
